const { create, getProjectsByUserId } = require('./projects.services.js')
const jwt = require('jsonwebtoken')

module.exports = {
    createProject: (req, res) => {
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
                    message: "Project created Successfully",
                    result: {
                        project: req.body.project_name,
                        id: result.insertId
                    }
                })
            })
        } else {
            return res.status(401).json({ success: false, message: 'No token provided.' });
        }
      
    },

        getProjectsListByUserId: (req, res) => {
            const id = req.params.id;
            getProjectsByUserId(id, (error, result) => {
            if (error) {
                return res.status(401).json({
                    success: false,
                    message: error,
                })
            }
            // if (!result) {
            //     return res.json({
            //         sucess: false,
            //         message: "Empty project list!",
            //     })
            // }
            return res.json({
                success: true,
                message: "Data loaded successfully",
                result: result,
            })
        })
    },
}