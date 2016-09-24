'use strict';

var mongoose = require('mongoose');

var paymentSchema = mongoose.Schema({
    Gas: {
        // id: Number,
        UtilityType: String,
        Payments: Number,
        Description: String,
        Email:  {
            Title: String,
	        OnorOff : Boolean,
        },
        Phone: {
            Title: String,
	        OnorOff : Boolean,
        },
        Text: {
            Title: String,
	        OnorOff : Boolean,
        }
    },
    Water:{
        // id: Number,
        UtilityType: String,
        Payments: Number,
        Description: String,
        Email:  {
            Title: String,
	        OnorOff : Boolean,
        },
        Phone: {
            Title: String,
	        OnorOff : Boolean,
        },
        Text: {
            Title: String,
	        OnorOff : Boolean,
        }
    },
    Electricity:{
        // id: Number,
        UtilityType: String,
        Payments: Number,
        Description: String,
        Email:  {
            Title: String,
	        OnorOff : Boolean,
        },
        Phone: {
            Title: String,
	        OnorOff : Boolean,
        },
        Text: {
            Title: String,
	        OnorOff : Boolean,
        }
    },
});

var Payment = mongoose.model('payment', paymentSchema);

module.exports = Payment;