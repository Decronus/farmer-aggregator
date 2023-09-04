export function createErrorHandler(code: number, message: string): void {
    throw createError({
        statusCode: code,
        message: message,
    });
}

export function logError(error: any): void {
    console.error(`ERROR ${error.value?.statusCode}: ${error.value?.data.message}`);
}
