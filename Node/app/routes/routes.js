const Sample = require('../models/sample')
module.exports = (app) => {

    function checkPassword(password) {
        const passw = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$/;
        if (password.match(passw)) {
            return true;
        }
        else {
            return false;
        }
    }

    function validateEmail(email) {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegex.test(email)) {
            return (true);
        } return (false);
    }

    app.get('/user/getAll', function (req, res) {
        Sample.collection.find({}).toArray((error, result) => {
            if (error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    });

    app.post('/user/create/', function (req, res) {
        let isPasswordStrong = checkPassword(req.body.password);
        let isEmailValid = validateEmail(req.body.email);
        if (isEmailValid) {
            if (isPasswordStrong) {
                Sample.findOne({
                    email: req.body.email
                }, function (err, data) {
                    if (data != null && Object.keys(data).length > 0) {
                        res.send("Account already exist");
                    }
                    else {
                        let data = {
                            email: req.body.email,
                            password: req.body.password,
                        }
                        Sample.collection.insertOne(data, (error, result) => {
                            if (error) {
                                return res.status(500).send(error);
                            }
                            res.send(result.ops);
                        });
                    }
                })
            }
            else {
                res.send("Please enter valid password");
            }
        }
        else {
            res.send("Please enter valid email address");
        }
    });


    app.post('/user/edit/', function (req, res) {
        let isPasswordStrong = checkPassword(req.body.password);
        let isEmailValid = validateEmail(req.body.email);
        let isNewPasswordStrong = checkPassword(req.body.newPassword ? req.body.newPassword : req.body.password);
        let isNewEmailValid = validateEmail(req.body.newEmail ? req.body.newEmail : req.body.email);
        if (isEmailValid) {
            if (isPasswordStrong) {
                Sample.findOne({
                    email: req.body.email,
                    password: req.body.password,
                }, function (err, data) {
                    if (data != null && Object.keys(data).length > 0) {
                        if (isNewEmailValid) {
                            if (isNewPasswordStrong) {
                                Sample.collection.update({
                                    _id: data._id
                                },
                                    {
                                        email: req.body.newEmail ? req.body.newEmail : req.body.email,
                                        password: req.body.newPassword ? req.body.newPassword : req.body.password,
                                    }
                                    , function (error, result) {
                                        if (error) {
                                            return res.status(500).send(error);
                                        }
                                        res.send(data);
                                    })
                            }
                            else {
                                res.send("Please enter valid New Password");
                            }
                        }
                        else {
                            res.send("Please enter valid new email address");
                        }
                    }
                    else {
                        res.send("Email or Password may be incorrect");
                    }
                })
            }
            else {
                res.send("Please enter valid password");
            }
        }
        else {
            res.send("Please enter valid email address");
        }
    });

    app.delete('/user/delete/', function (req, res) {
        Sample.findOne({
            email: req.body.email,
            password: req.body.password,
        }, function (err, data) {
            if (data != null && Object.keys(data).length > 0) {
                // Sample.collection.remove();
                Sample.collection.deleteOne({
                    _id: data._id
                }, function (error, result) {
                    if (error) {
                        return res.status(500).send(error);
                    }
                    res.send(data);
                })
            }
            else {
                res.send("Email or Password may be incorrect");
            }
        })
    });

}