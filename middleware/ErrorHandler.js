const {CustomAPIError} = require('../errors/CustomError');

const ErrorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.StatusCode).json({msg: err.message});
    }
    return res.status(500).json({msg: `Something went wrong, please try again !`});
}

module.exports = ErrorHandlerMiddleware;