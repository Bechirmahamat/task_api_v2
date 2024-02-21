const error = (err, req, res, next) => {
    res.status(500).json({ status: 'failed', err })
}

module.exports = error
