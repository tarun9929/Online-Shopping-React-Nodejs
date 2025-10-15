const asyncHandler = (cb) => async (req , res, next) => {
    try {
        await cb(req , res , next);
    } catch {
        console.log(error);
        return res.status(error.statusCode).json({
            success: false,
            data: null,
            message: error.message,
            statusCode: error.statusCode
        })
    }
}

export default asyncHandler;