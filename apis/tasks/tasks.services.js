const db = require('../../config/db.js')

module.exports = {
    create: (body, callback) => {
        db.query(
          `insert into task(name, project_id, user_id, status, assigned_date, created_at) values(?,?,?,?,?,?)`,
          [
            body.name,
            body.project_id,
            body.user_id,
            body.status,
            body.assigned_date,
            body.created_at,
          ],
          (error, result, fields) => {
            if (error) {
              return callback(error, null);
            }
            return callback(null, result);
          }
        );
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
          `update task set user_id=?, username=?, assigned_date=? where id=?`,
          [bodyData.user_id, bodyData.username, bodyData.assigned_date, id],
          (error, result, fields) => {
            if (error) {
              return callback(error);
            }

            return callback(null, result);
          }
        );
    }
}