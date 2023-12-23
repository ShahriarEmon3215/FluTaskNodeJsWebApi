const db = require('../../config/db.js')

module.exports = {
    create: (body, callback) => {
        db.query(
          `insert into project(name,user_id,status, created_at) values(?,?,?,?)`,
          [body.name, body.user_id, body.status, body.created_at],
          (error, result, fields) => {
            if (error) {
              return callback(error, null);
            }
            return callback(null, result);
          }
        );
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