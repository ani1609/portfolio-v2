import { NextResponse } from 'next/server';

/**
 * Generates a JSON error response.
 * @param message - The error message.
 * @param status - The HTTP status code.
 * @returns JSON response.
 */
export function createErrorResponse(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

/**
 * Validates required query parameters.
 * @param param - The parameter value.
 * @param paramName - The name of the parameter.
 * @returns JSON error response if invalid, otherwise null.
 */
export function validateRequiredParam(param: string | null, paramName: string) {
  if (!param) {
    return createErrorResponse(`${paramName} is required`, 400);
  }
  return null;
}

/**
 * Validates if a month is between 1 and 12.
 * @param month - The month value.
 * @returns JSON error response if invalid, otherwise null.
 */
export function validateMonth(month: string) {
  const monthInt = parseInt(month, 10);
  if (isNaN(monthInt) || monthInt < 1 || monthInt > 12) {
    return createErrorResponse(
      'Month must be a valid number between 1 and 12',
      400
    );
  }
  return null;
}

/**
 * Validates if a year is a valid four-digit number.
 * @param year - The year value.
 * @returns JSON error response if invalid, otherwise null.
 */
export function validateYear(year: string) {
  const yearInt = parseInt(year, 10);
  if (isNaN(yearInt) || yearInt < 1000 || yearInt > 9999) {
    return createErrorResponse('Year must be a valid four-digit number', 400);
  }
  return null;
}
