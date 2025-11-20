import { NextResponse } from 'next/server';

/**
 * Shared OpenRouter API configuration and utilities
 */

export interface OpenRouterMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface OpenRouterRequest {
  model: string;
  messages: OpenRouterMessage[];
  temperature?: number;
  max_tokens?: number;
  top_p?: number;
  frequency_penalty?: number;
  presence_penalty?: number;
}

export interface OpenRouterResponse {
  choices: Array<{
    message: {
      content: string;
      role: string;
    };
    finish_reason: string;
  }>;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

/**
 * Call OpenRouter API with error handling
 */
export async function callOpenRouter(
  request: OpenRouterRequest,
  apiKey?: string,
  referer?: string,
  title?: string
): Promise<OpenRouterResponse> {
  const key = apiKey || process.env.OPENROUTER_API_KEY;
  
  if (!key) {
    throw new Error('OpenRouter API key not configured');
  }

  const headers: Record<string, string> = {
    'Authorization': `Bearer ${key}`,
    'Content-Type': 'application/json'
  };

  if (referer) {
    headers['HTTP-Referer'] = referer;
  }

  if (title) {
    headers['X-Title'] = title;
  }

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers,
    body: JSON.stringify(request)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenRouter API error: ${errorText}`);
  }

  return await response.json();
}

/**
 * Create error response for API routes
 */
export function createErrorResponse(error: string, status: number = 500) {
  return NextResponse.json({ error }, { status });
}

/**
 * Create success response for API routes
 */
export function createSuccessResponse(data: any, status: number = 200) {
  return NextResponse.json(data, { status });
}

/**
 * Free models available on OpenRouter
 */
export const FREE_MODELS = [
  'deepseek/deepseek-chat:free',
  'huggingfaceh4/zephyr-7b-beta:free',
  'mistralai/mistral-7b-instruct:free',
  'google/gemma-7b-it:free'
] as const;
