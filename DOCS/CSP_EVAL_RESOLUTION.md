# CSP Warning and Eval Usage Resolution

## Problem Statement

The project was experiencing Content Security Policy (CSP) violations during development due to the use of `eval()` and related JavaScript evaluation methods by Next.js 16's Turbopack in development mode. These violations appeared as console warnings and could potentially cause issues with hot module replacement (HMR) and fast refresh features.

### Symptoms
- CSP warnings in browser console: "Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source..."
- Potential issues with development-time features like HMR and fast refresh
- Strict CSP policy blocking eval usage needed by Next.js development tooling

## Root Cause

The project implements a strict Content Security Policy in `proxy.ts` that explicitly blocks the use of:
- `eval()`
- `new Function()`
- Other dynamic code evaluation methods

However, Next.js 16 with Turbopack uses these methods during development for:
- Hot Module Replacement (HMR)
- Fast Refresh
- Source map generation
- Development-time bundling

## Solution Implemented

### 1. Updated `proxy.ts` - Conditional CSP Policy

**File**: `/home/runner/work/imgv3/imgv3/proxy.ts`

**Changes**:
- Added environment detection to distinguish between development and production
- Conditionally allow `'unsafe-eval'` in the `script-src` directive **only** during development
- Maintains strict CSP in production for security

```typescript
// In development mode, allow 'unsafe-eval' for Next.js HMR and Turbopack
// In production, this is removed for strict security
const isDevelopment = process.env.NODE_ENV === 'development';
const evalPolicy = isDevelopment ? " 'unsafe-eval'" : '';

const cspHeader = `
  default-src 'self';
  script-src 'self' 'nonce-${nonce}'${evalPolicy} https://...;
  ...
`.replace(/\n/g, ' ').trim();
```

### 2. Updated `next.config.mjs` - Turbopack Configuration

**File**: `/home/runner/work/imgv3/imgv3/next.config.mjs`

**Changes**:
- Added empty `turbopack: {}` configuration to acknowledge Turbopack usage
- This prevents the warning: "This build is using Turbopack, with a `webpack` config..."
- Allows Next.js 16 to use Turbopack by default without configuration conflicts

```javascript
// Turbopack configuration (Next.js 16 default)
// Enable empty turbopack config to silence warnings
turbopack: {},
```

## Why This Approach?

### Security Considerations

1. **Development Environment**: 
   - Eval is allowed only when `NODE_ENV === 'development'`
   - This enables proper functioning of Next.js development tools
   - Development servers are not exposed to the public internet

2. **Production Environment**:
   - `NODE_ENV === 'production'` removes the `'unsafe-eval'` directive
   - Maintains strict CSP for deployed applications
   - Production builds don't use eval - they are pre-compiled and optimized

### Alternative Approaches Considered

1. **Webpack devtool configuration**: 
   - Initially considered using `config.devtool = 'source-map'` in webpack config
   - **Not implemented** because Next.js 16 uses Turbopack by default, not webpack
   - Would require forcing webpack mode which goes against Next.js 16 best practices

2. **Disabling Turbopack**:
   - Could force webpack mode with `--webpack` flag
   - **Not recommended** because Turbopack is faster and the future of Next.js
   - Would lose performance benefits of Turbopack

3. **Removing CSP entirely**:
   - **Rejected** because security is critical for this application
   - CSP protects against XSS attacks and other security vulnerabilities

## Verification

### Development Mode
To verify the changes work in development:
```bash
npm run dev
```

Expected behavior:
- No CSP warnings in browser console
- HMR and Fast Refresh work correctly
- Development server starts without errors

### Production Mode
To verify CSP remains strict in production:
```bash
npm run build
npm start
```

Expected behavior:
- Production build completes successfully
- CSP header does NOT include `'unsafe-eval'`
- Application runs with strict security policy

### Checking CSP Headers

You can verify the CSP headers by:

1. **In Browser DevTools**:
   - Open Network tab
   - Navigate to any page
   - Check response headers for `Content-Security-Policy`
   - Development should include `'unsafe-eval'`
   - Production should NOT include `'unsafe-eval'`

2. **Using curl**:
   ```bash
   # Development
   curl -I http://localhost:3000
   
   # Production
   curl -I https://your-production-domain.com
   ```

## Benefits

1. **Development Experience**: Seamless development with HMR and Fast Refresh
2. **Security**: Strict CSP in production protects against XSS and code injection
3. **Performance**: Uses Next.js 16's Turbopack for faster development builds
4. **Maintainability**: Clear separation between dev and production security policies

## Future Considerations

1. **Monitor Next.js Updates**: Future versions might handle CSP differently
2. **CSP Reporting**: Consider adding CSP reporting in production to monitor violations
3. **Additional Security Headers**: Consider adding more security headers as needed

## References

- [Next.js CSP Documentation](https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy)
- [MDN CSP Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Next.js 16 Turbopack](https://nextjs.org/docs/architecture/turbopack)

## Author

Implementation completed as part of security and development workflow improvement.

**Date**: November 10, 2025
