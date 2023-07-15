const { create, update, getCollaboratorsByUserId, getCollaboratorsByProjectId } = require('./collaboration.services.js')
const { getAllProjects } = require('../projects/projects.services.js')
const { getAllUsers } = require('../users/users.services.js')

const jwt = require('jsonwebtoken')

module.exports = {
    createCollaboration: (req, res) => {
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
                    return res.status(401).json({ success: false, message: error.sqlMessage })
                }
                return res.status(200).json({
                    success: true,
                    message: "Success!",
                    result: {
                        id: result.insertId
                    }
                })
            })
        } else {
            return res.status(401).json({ success: false, message: 'No token provided.' });
        }

    },


    updateCollaboration: (req, res) => {
        const body = req.body
        update(req.params.id, body, (error, result) => {
            if (error) {
                return res.json({
                    success: false,
                    message: "Error",
                })
            }
            if (!result) {
                return res.json({
                    success: false,
                    message: "failed to update"
                })
            }
            return res.json({
                success: true,
                message: "Updated",
            })
        })
    },

    getCollaborationProjectListByUserId: (req, res) => {
        // getting a collaboration list by user id which is logged in
        getCollaboratorsByUserId(req.body.user_id, (error, collaborations) => {
            var projectList = []
            var collaborationsList = []
            var filterdCollaborationList = []
            var finalProjectsList = [];

            if (error) {
                return res.status(401).json({
                    success: false,
                    message: error,
                })
            }
            collaborationsList = collaborations
           
            // get all projects list existing in database
            getAllProjects((error, projects) => {
                if (error) {
                    return res.status(401).json({
                        success: false,
                        message: error,
                    })
                }
                projectList = projects
              
               

                // filter collaboration list by user id which is logged in
                for (var i = 0; i < collaborationsList.length; i++) {
                    if (collaborationsList[i]['user_id'] == req.body.user_id) {
                        filterdCollaborationList.push(collaborationsList[i])
                    }
                }

                // loop on filtered collaboration list to get collaborated projects
                for (var i = 0; i < filterdCollaborationList.length; i++) {
                    for (var j = 0; j < projectList.length; j++) {
                        if (projectList[j]['id'] == filterdCollaborationList[i]['project_id']) {
                            finalProjectsList.push(projectList[j])
                        }
                    }
                }

                // return final projects list which projects matches with user 
                return res.json({
                    success: true,
                    message: "Data loaded successfully",
                    result: finalProjectsList,
                })
            })


        })
    },


    getCollaborationUserListByProjectId: (req, res) => {
        getCollaboratorsByProjectId(req.body.project_id, (error, collaborators) => {
            var usersList = []
            var collaboratorsList = []
            var finalUsersList = [];

            if (error) {
                return res.status(401).json({
                    success: false,
                    message: error,
                })
            }
            collaboratorsList = collaborators



            getAllUsers((error, users) => {
                if (error) {
                    return res.status(401).json({
                        success: false,
                        message: error,
                    })
                }
                usersList = users
                console.log(users.length)

               
                for (var i = 0; i < collaboratorsList.length; i++) {
                    for (var j = 0; j < usersList.length; j++) {
                        if (usersList[j]['id'] == collaboratorsList[i]['user_id']) {
                            finalUsersList.push(usersList[j])
                        }
                    }
                }


                return res.json({
                    success: true,
                    message: "Data loaded successfully",
                    result: finalUsersList,
                })
            })
        })

    },
}