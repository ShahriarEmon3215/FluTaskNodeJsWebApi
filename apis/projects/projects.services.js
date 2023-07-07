const db = require('../../config/db.js')

module.exports = {
    create: (body, callback) => {
        db.query(
            `insert into project(project_name, start_date, end_date, user_id, creation_date) values(?,?,?,?,?)`,
            [
                body.project_name,
                body.start_date,
                body.end_date,
                body.user_id,
                body.creation_date
            ],
            (error, result, fields) => {
                if (error) {
                    return callback(error, null)
                }
                return callback(null, result)
            }
        )
    },

    getProjectsByUserId: (user_id, callback) => {
        db.query(
            `SELECT * FROM project WHERE user_id = ?`,
            [user_id],
            (error, result, fields) => {
                if (error) {
                    return callback(error)
                }

                return callback(null, result)
            }
        )
    },

    getAllProjects: (callback) => {
        db.query(
            `SELECT * FROM project`,
            [],
            (error, result, fields) => {
                if (error) {
                    return callback(error, null)
                }

                return callback(null, result)
            }
        )
    },
}