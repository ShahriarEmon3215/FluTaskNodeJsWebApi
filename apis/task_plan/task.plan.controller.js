const { create, updateTaskPlan } = require('./task.plan.service.js')
const jwt = require('jsonwebtoken')

module.exports = {
    createTaskPlan: (req, res) => {
        var token = ""
        const authHeader = String(req.headers['authorization'] || '');
        if (authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7, authHeader.length);
            if (!token) return res.status(401).json({ success: false, message: 'No token provided.' });

            jwt.verify(token, "jwt3215", function (err, decoded) {
                if (err) return res.status(500).json({ success: false, message: 'Failed to authenticate token.' });
            });


            create(req.body, (error, result) => {
                if (error) {
                    return res.status(422).json({ success: false, message: error.sqlMessage })
                }
                return res.status(200).json({
                    success: true,
                    message: "Task Plan Created Successfully",
                    result: {
                        id: result.insertId,
                        status: result.status
                    }
                })
            })
        } else {
            return res.status(401).json({ success: false, message: 'No token provided.' });
        }

    },


        taskTransaction: (req, res) => {
        var token = ""
        const authHeader = String(req.headers['authorization'] || '');
        if (authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7, authHeader.length);
            if (!token) return res.status(401).json({ success: false, message: 'No token provided.' });

            jwt.verify(token, "jwt3215", function (err, decoded) {
                if (err) return res.status(500).json({ success: false, message: 'Failed to authenticate token.' });
            });


            updateTaskPlan(req.body, (error, result) => {
                if (error) {
                    return res.status(422).json({ success: false, message: error.sqlMessage })
                }
                if (result.affectedRows == 0){
                    return res.status(422).json({
                    success: false,
                    message: "Failed To Status Update",
                }) 
                }
                return res.status(200).json({
                    success: true,
                    message: "Task Plan Status Updated",
                    result: {
                        id: req.body.id,
                        status: req.body.status
                    }
                })
            })
        } else {
            return res.status(401).json({ success: false, message: 'No token provided.' });
        }

    }
}