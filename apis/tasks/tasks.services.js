const db = require('../../config/db.js')

module.exports = {
    create: (body, callback) => {
        db.query(
            `insert into task(task_name, start_date, end_date, project_id, creation_date) values(?,?,?,?,?)`,
            [
                body.task_name,
                body.start_date,
                body.end_date,
                body.project_id,
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
}