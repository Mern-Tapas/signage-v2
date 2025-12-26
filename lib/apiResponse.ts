// lib/apiResponse.ts

import { NextResponse } from 'next/server';

interface ApiResponseData<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  statusCode: number;
}

interface ApiResponseOptions<T = any> {
  data?: T;
  message?: string;
  error?: string;
}

export class ApiResponse {
  static success<T = any>(
    data: T,
    message: string = 'Success',
    statusCode: number = 200
  ): NextResponse<ApiResponseData<T>> {
    return NextResponse.json(
      {
        success: true,
        message,
        data,
        statusCode,
      },
      { status: statusCode }
    );
  }

  static error(
    message: string = 'An error occurred',
    statusCode: number = 500,
    error?: string
  ): NextResponse<ApiResponseData> {
    return NextResponse.json(
      {
        success: false,
        message,
        error: error || message,
        statusCode,
      },
      { status: statusCode }
    );
  }

  static created<T = any>(
    data: T,
    message: string = 'Resource created successfully'
  ): NextResponse<ApiResponseData<T>> {
    return this.success(data, message, 201);
  }

  static badRequest(
    message: string = 'Bad request',
    error?: string
  ): NextResponse<ApiResponseData> {
    return this.error(message, 400, error);
  }

  static unauthorized(
    message: string = 'Unauthorized'
  ): NextResponse<ApiResponseData> {
    return this.error(message, 401);
  }

  static forbidden(
    message: string = 'Forbidden'
  ): NextResponse<ApiResponseData> {
    return this.error(message, 403);
  }

  static notFound(
    message: string = 'Resource not found'
  ): NextResponse<ApiResponseData> {
    return this.error(message, 404);
  }

  static serverError(
    message: string = 'Internal server error',
    error?: string
  ): NextResponse<ApiResponseData> {
    return this.error(message, 500, error);
  }
}