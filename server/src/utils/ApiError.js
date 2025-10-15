class ApiError extends Error {
    constructor (
        message,
        statusCode = "Something want wrong",
        error = [],
        stack = '',
    ) {
        super(message);
        this.statusCode = statusCode;
        this.errors = error;
        this.data = null;
        this.success = false;
        this.message = message;

        if(stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;