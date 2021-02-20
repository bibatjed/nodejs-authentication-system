module.exports = (err, req, res, next) => {
    console.log(err);
    return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'failed',
    });
};
