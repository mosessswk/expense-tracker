const express = require("express");

function requestLogger(req, res, next) {
    console.log(new Date().toISOString(), req.method, req.originalUrl);
    next();
}

function responseTimeLogger(req, res, next) {
    const start = Date.now();
    res.on("finish", () => {
        const end = Date.now();
        console.log(req.method, req.originalUrl, end - start, "ms");
    })
    next();
}

module.exports = {
    requestLogger,
    responseTimeLogger
}