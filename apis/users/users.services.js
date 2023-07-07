const db = require('../../config/db.js')

module.exports = {
    create: (body, callback) => {
        var query = `SELECT * FROM users WHERE email = ?`;
        db.query(query, [body.email], function (error, data) {

            if (error) return callback(error, null);

            if (data.length) {
                console.log(data[0])
                return callback("User Already Registered", null)
            } else {
                db.query(
                    `insert into users(username, email, password) values(?,?,?)`,
                    [
                        body.username,
                        body.email,
                        body.password
                    ],
                    (error, result, fields) => {
                        if (error) {
                            return callback(error, null)
                        }
                        return callback(null, result)
                    }
                )
            }
        })
       
    },

       
    getUsers: (callback) => {
        db.query(
            `select id,username,email from users`,
            [],
            (error, result, fields) => {
                if (error) {
                    return callback(error)
                }

                return callback(null, result)
            }
        )
    },

    getUserById: (id, callback) => {
        db.query(
            `select id,username,email from users where id = ?`,
            [id],
            (error, result, fields) => {
                if (error) {
                    return callback(error)
                }

                return callback(null, result[0])
            }
        )
    },

    getUserByEmail: (email, callback) => {
        db.query(
            `select id,username,email from users where email = ?`,
            [email],
            (error, result, fields) => {
                if (error) {
                    return callback(error)
                }

                return callback(null, result[0])
            }
        )
    },

    updateUser: (data, callback) => {
        db.query(
            `update users set username=?, email=?, password=? where id=?`,
            [
                data.username,
                data.email,
                data.password,
                data.id
            ],
            (error, result, fields) => {
                if (error) {
                    return callback(error)
                }

                return callback(null,  result)
            }

        )
    },

    deleteUser: (data, callback) => {
        db.query(
            `delete from users where id = ?`,
            [data.id],
            (error, result, fields) => {
                if (error) {
                    return callback(error)
                }

                return callback(null, result)
            }
        )
    },

    getUserByEmail: (email, callback) => {
       db.query(
           `select * from users where email=?`,
           [email],
           (error, result) => {
               if (error) {
                   return callback(error)
               }else{
                   return callback(error, result[0])
               }
               
           }
       )
    }
}