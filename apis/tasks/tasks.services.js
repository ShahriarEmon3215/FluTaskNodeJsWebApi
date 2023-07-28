const db = require('../../config/db.js')

module.exports = {
    create: (body, callback) => {
        db.query(
            `insert into task(task_name, project_id, creation_date, user_id, username, status, collaboration_date) values(?,?,?,?,?,?,?)`,
            [
                body.task_name,
                body.project_id,
                body.creation_date,
                body.user_id,
                body.username,
                body.status,
                body.collaboration_date
            ],
            (error, result, fields) => {
                if (error) {
                    return callback(error, null)
                }
                return callback(null, result)
            }
        )
    },

    getTasks: (id, callback) => {
        db.query(
            `select * from task where project_id = ?`,
            [id],
            (error, result, fields) => {
                if (error) {
                    return callback(error)
                }

                return callback(null, result)
            }
        )
    },

    updateTask: (id, bodyData , callback) => {
        db.query(
            `update task set status=? where id=?`,
            [
                bodyData.status,
                id
            ],
            (error, result, fields) => {
                if (error) {
                    return callback(error)
                }

                return callback(null,  result)
            }

        )
    },

    updateTaskCollaboration: (id, bodyData , callback) => {
        db.query(
            `update task set user_id=?, username=?, collaboration_date=? where id=?`,
            [
                bodyData.user_id,
                bodyData.username,
                bodyData.collaboration_date,
                id
            ],
            (error, result, fields) => {
                if (error) {
                    return callback(error)
                }

                return callback(null,  result)
            }

        )
    }
}