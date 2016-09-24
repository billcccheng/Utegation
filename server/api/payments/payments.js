'use strict';

module.exports = function (oApp) {

    var Payment = require('../../db/models/payment.js');
    
    var pay = new Payment({
        Gas:{
            id: 1,
            UtilityType: "Gas",
            Payments: 215,
            Description: "Due ....",
            Email:  {
            Title: "Email",
    	        OnorOff : true,
            },
            Phone: {
                Title: "Phone",
    	        OnorOff : true,
            },
            Text: {
                Title: "Text",
    	        OnorOff : false,
            }
        },
        Water:{
            // id: 1,
            UtilityType: "Water",
            Payments: 260,
            Description: "Due ....",
            Email:  {
            Title: "Email",
    	        OnorOff : true,
            },
            Phone: {
                Title: "Phone",
    	        OnorOff : true,
            },
            Text: {
                Title: "Text",
    	        OnorOff : true,
            }
        },
        Electricity:{
            UtilityType: "Electricity",
            Payments: 0,
            Description: "Due ....",
            Email:  {
            Title: "Email",
    	        OnorOff : false,
            },
            Phone: {
                Title: "Phone",
    	        OnorOff : false,
            },
            Text: {
                Title: "Text",
    	        OnorOff : false,
            }
        }
    });

    // console.log(pay);
    pay.save(function(err) {
      if (err) throw err;
      console.log('Payment saved successfully!');
    });
    

    oApp.get('/api/payment', function (req, res) {
        Payment.find(function (err, payments) {
            if (err) {
                return res.status(500).send('Error occurred: database error');
            }

            var newRes = payments.map(function (payment) {
                return {
                    Gas:[{
                        // id: payment.Gas.id,
                        UtilityType: payment.Gas.UtilityType,
                        Payments: payment.Gas.Payments,
                        Description: payment.Gas.Description
                    }],
                    Water:[{
                        // id: payment.Water.id,
                        UtilityType: payment.Water.UtilityType,
                        Payments: payment.Water.Payments,
                        Description: payment.Water.Description
                    }],
                    Electricity:[{
                        // id: payment.Water.id,
                        UtilityType: payment.Electricity.UtilityType,
                        Payments: payment.Electricity.Payments,
                        Description: payment.Electricity.Description
                    }]
                };
            });
            res.json(newRes[0]);
        });
    });
    
    oApp.get('/api/overview', function (req, res) {
        Payment.find(function (err, payments) {
            if (err) {
                return res.status(500).send('Error occurred: database error');
            }

            var newRes = payments.map(function (payment) {
                return {
                    Gas:[{
                        // id: payment.Gas.id,
                        UtilityType: payment.Gas.UtilityType,
                        Payments: payment.Gas.Payments,
                        Description: payment.Gas.Description
                    }],
                    Water:[{
                        // id: payment.Water.id,
                        UtilityType: payment.Water.UtilityType,
                        Payments: payment.Water.Payments,
                        Description: payment.Water.Description
                    }],
                    Electricity:[{
                        // id: payment.Water.id,
                        UtilityType: payment.Electricity.UtilityType,
                        Payments: payment.Electricity.Payments,
                        Description: payment.Electricity.Description
                    }]
                };
            });
            
            newRes = [newRes[0].Gas[0], newRes[0].Water[0], newRes[0].Electricity[0]];
            // console.log(newRes);
            res.json(newRes);
        });
    });
    
    
    oApp.get('/api/preference', function (req, res) {
        Payment.find(function (err, payments) {
            if (err) {
                return res.status(500).send('Error occurred: database error');
            }

            var newRes = payments.map(function (payment) {
                return {
                    Gas:[
                        payment.Gas.Phone,
                        payment.Gas.Email,
                        payment.Gas.Text
                    ],
                    Water:[
                        payment.Water.Phone,
                        payment.Water.Email,
                        payment.Water.Text
                    ],
                    Electricity:[
                        payment.Electricity.Phone,
                        payment.Electricity.Email,
                        payment.Electricity.Text
                    ]
                };
            });
            // newRes = [newRes[0].Gas, newRes[0].Gas, newRes[0].Gas];
            // console.log(newRes);
            res.json(newRes[0]);
        });
    });
};



// 'use strict';

// module.exports = function (oApp) {

//     var Payment = require('../../db/models/payment.js');
    
//     var pay = new Payment();
//     pay.Gas.push({
//         id: 1,
//         UtilityType: "aa",
//         Payments: "200",
//         Description: "test"
//     });
    
//     pay.save(function(err) {
//       if (err) throw err;
    
//       console.log('Payment saved successfully!');
//     });
    

//     oApp.get('/api/payment', function (req, res) {
//         Payment.find(function (err, payments) {
//             if (err) {
//                 return res.status(500).send('Error occurred: database error');
//             }

//             res.json(payments.map(function (payment) {
//                 return {
//                     Gas:{
//                         id: payment.id,
//                         UtilityType: payment.Gas.UtilityType,
//                         Payments: payment.GaPayments,
//                         Description: payment.Description
//                     }
//                 };
//             }));
//         });
//     });
// };


