# CSP Configuration Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     Next.js Application Start                    │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
                   ┌─────────────────────┐
                   │  Check Environment  │
                   │  NODE_ENV = ?       │
                   └──────────┬──────────┘
                              │
                 ┌────────────┴────────────┐
                 │                         │
                 ▼                         ▼
        ┌─────────────────┐      ┌─────────────────┐
        │  Development    │      │   Production    │
        │  NODE_ENV =     │      │   NODE_ENV =    │
        │  'development'  │      │   'production'  │
        └────────┬────────┘      └────────┬────────┘
                 │                         │
                 ▼                         ▼
        ┌─────────────────┐      ┌─────────────────┐
        │ evalPolicy =    │      │ evalPolicy =    │
        │ " 'unsafe-eval'"│      │ "" (empty)      │
        └────────┬────────┘      └────────┬────────┘
                 │                         │
                 └────────────┬────────────┘
                              │
                              ▼
                   ┌──────────────────────┐
                   │   Build CSP Header   │
                   │   script-src 'self'  │
                   │   'nonce-{nonce}'    │
                   │   ${evalPolicy}      │
                   │   + other sources    │
                   └──────────┬───────────┘
                              │
                 ┌────────────┴────────────┐
                 │                         │
                 ▼                         ▼
        ┌─────────────────┐      ┌─────────────────┐
        │  Development    │      │   Production    │
        │  CSP Header:    │      │   CSP Header:   │
        │                 │      │                 │
        │ script-src      │      │ script-src      │
        │   'self'        │      │   'self'        │
        │   'nonce-XXX'   │      │   'nonce-XXX'   │
        │   'unsafe-eval' │      │   (no unsafe)   │
        │   https://...   │      │   https://...   │
        └────────┬────────┘      └────────┬────────┘
                 │                         │
                 ▼                         ▼
        ┌─────────────────┐      ┌─────────────────┐
        │  Allows:        │      │  Blocks:        │
        │  ✅ eval()      │      │  ❌ eval()      │
        │  ✅ HMR         │      │  ✅ Pre-compiled│
        │  ✅ Fast Refresh│      │  ✅ Secure      │
        └─────────────────┘      └─────────────────┘
```

## Key Points

### Development Mode
- **Environment**: `NODE_ENV=development`
- **CSP Modification**: Adds `'unsafe-eval'` to script-src
- **Purpose**: Enable Next.js development features
- **Features Enabled**:
  - Hot Module Replacement (HMR)
  - Fast Refresh
  - Turbopack development tools
- **Security**: Lower priority (not public-facing)

### Production Mode
- **Environment**: `NODE_ENV=production`
- **CSP Modification**: No unsafe-eval added
- **Purpose**: Maximum security
- **Features**:
  - Pre-compiled bundles (no eval needed)
  - Strict CSP enforcement
  - XSS attack prevention
- **Security**: High priority (public-facing)

## Code Flow

```typescript
// proxy.ts

// 1. Detect environment
const isDevelopment = process.env.NODE_ENV === 'development';

// 2. Set eval policy conditionally
const evalPolicy = isDevelopment ? " 'unsafe-eval'" : '';

// 3. Build CSP header with conditional policy
const cspHeader = `
  script-src 'self' 'nonce-${nonce}'${evalPolicy} https://...;
`;

// 4. Apply CSP header to response
res.headers.set('Content-Security-Policy', cspHeader);
```

## Request Flow

```
User Request
     │
     ▼
Middleware (proxy.ts)
     │
     ├─→ Check NODE_ENV
     │
     ├─→ Generate nonce
     │
     ├─→ Build CSP with conditional eval
     │
     ├─→ Set CSP header
     │
     ▼
Response with CSP
```

## Security Decision Matrix

| Environment | eval Allowed | Reason | Risk Level |
|------------|--------------|--------|------------|
| Development | ✅ Yes | HMR, Fast Refresh | Low (not public) |
| Production | ❌ No | Security, no eval needed | High (public) |

## Testing Verification

```bash
# Test 1: Development
NODE_ENV=development npm run dev
# Expected: CSP includes 'unsafe-eval'

# Test 2: Production
NODE_ENV=production npm run build && npm start
# Expected: CSP does NOT include 'unsafe-eval'

# Test 3: Automated
bash scripts/test-csp.sh
# Expected: All tests pass
```
