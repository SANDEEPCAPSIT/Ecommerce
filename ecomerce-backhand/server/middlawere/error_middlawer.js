const errorMiddleware = (err, req, res, next) =>{
    const status = err.status || 500;
    const message = err.message || "BACKHAND ERROR";
    const extraDetail = err.extraDetail || "Error from Backhand";

    return res.status(status).json({message,extraDetail});
    

};
module.exports = errorMiddleware;