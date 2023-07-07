const db = require('../../config/db.js')

module.exports = {
    create: (body, callback) => {
        db.query(
            `insert into project_vs_user(project_id, user_id, added_date) values(?,?,?)`,
            [
                body.project_id,
                body.user_id,
                body.added_date,
            ],
            (error, result, fields) => { 
                if (error) {
                    return callback(error, null)
                }
                return callback(null, result)
            }
        )
    },

    update: (id,body, callback) => {
        db.query(
            `update project_vs_user set project_id=?, user_id=?, added_date=? where id=?`,
            [
                body.project_id,
                body.user_id,
                body.added_date,
                id
            ],
            (error, result, fields) => {
                if (error) {
                    return callback(error, null)
                }
                return callback(null, result)
            }
        )
    },


    getCollaboratorsByProjectAndUserId: (user_id, callback) => {
        db.query(
            `select * from project_vs_user where user_id=?`,
            [user_id],
            (error, result) => {
                if (error) {
                    return callback(error)
                } else {
                    return callback(error, result)
                }

            }
        )
    }

}