const db = require('../../config/db.js')

module.exports = {
    create: (body, callback) => {
        db.query(
            `insert into task_plan(user_id, email, collaboration_date, project_id, task_id, status) values(?,?,?,?,?,?)`,
            [
                body.user_id,
                body.email,
                body.collaboration_date,
                body.project_id,
                body.task_id,
                body.status
            ],
            (error, result, fields) => {
                if (error) {
                    return callback(error, null)
                }
                return callback(null, result)
            }
        )
    },

        updateTaskPlan: (data, callback) => {
        db.query(
            `update task_plan set status=? where id=?`,
            [
                data.status,
                data.id
            ],
            (error, result, fields) => {
                if (error) {
                    return callback(error)
                }

                return callback(null, result)
            }

        )
    },
}