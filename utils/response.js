const express = require('express');
const Constants = require('./consts.js');



const sendErrorMessage = (res, errorCode) => {
    res.json({
        status: errorCode,
        message: Constants.ERROR_MESSAGE
    });
};

const sendErrorCustomMessage = (res, text, errorCode) => {
    res.json({
        status: errorCode,
        message: text
    });
};

const sendSuccessMessage = (res, message) => {
    res.json({
        status: Constants.SUCCESS,
        message: message
    });
};


const sendsuccessData = (res, message, data) => {
    res.json({
        status: Constants.SUCCESS,
        message: message,
        data: data
    });
};



module.exports = {
    sendErrorMessage,
    sendsuccessData,
    sendSuccessMessage,
    sendErrorCustomMessage
}