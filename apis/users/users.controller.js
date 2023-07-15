const { create , getUsers, getUserById, updateUser, deleteUser, getUserByEmail } = require('./users.services.js')
const {genSaltSync, hashSync, compareSync} = require('bcrypt')
const { sign } = require('jsonwebtoken')


module.exports = {
    createUser: (req, res) => {
        const body = req.body
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt)
        create(body, (error, result)=> {
            if(error){
                if (error == "User Already Registered"){
                    return res.status(422).json({ success: false, message : "This email already in use! please try another."})
                }
                return res.status(422).json({ success: false, message: error })
            }
            return res.status(200).json({
                success: true,
                message: "Registration Successful!",
                result: {
                    username : body.username,
                    email : body.email,
                }
            })
        })
    },

    getUserById: (req, res) => {
        const id = req.params.id;
        getUserById(id, (error, result)=>{
            if(error){
                return;
            }
            if(!result){
                return res.json({
                    success: false,
                    message: "empty data",
                })
            }
            return res.json({
                success: true,
                message: "Data loaded successfully",
                result: result,
            })
        })
    },

    getUserByEmail: (req, res) => {
        const email = req.body.email;
        getUserByEmail(email, (error, result)=>{
            if(error){
                return res.status(400).json({
                    success: false,
                    message: error,
                })
            }
            if(!result){
                return res.status(401).json({
                    success: false,
                    message: "empty data",
                })
            }
            return res.json({
                success: true,
                message: "successfull",
                result: {
                    "id": result['id'],
                    "username": result['username'],
                    "email": result['email'],
                },
            })
        })
    },


    getUsers: (req, res) => {
        getUsers((error, result) => {
            if (error) {
                return res.json({
                    sucess: false,
                    message: "Someting went wrong!",
                })
            }
            if (!result) {
                return res.json({
                    sucess: false,
                    message: "Empty data",
                })
            }
            return res.json({
                sucess: true,
                message: "Data loaded successfully",
                result: result,
            })
        })
    },



       updateUser: (req, res) => {
        const body = req.body
        const salt = genSaltSync(10)
           body.password = hashSync(body.password, salt)
        updateUser( body ,(error, result) => {
            if (error) {
                return res.json({
                    success: false,
                    message: "Error",
                })
            }
           if(!result){
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

     deleteUser: (req, res) => {
        const body = req.body
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt)
        deleteUser(body, (error, result) => {
            if (error) {
                return res.json({
                    success: false,
                    message: "Failed",
                });
            }

            return res.json({
                success: true,
                message: "Deleted",
            })
        })
    },

    login: (req, res)=>{
        const body = req.body
        getUserByEmail(body.email, (error, results)=>{
            if(error){
                return res.status(401).json({
                    success: false,
                    message: error
                })
            }
            if (!results){
                return res.status(401).json({
                    success: false,
                    message: "Invalid email or password"
                })
            }

            const result = compareSync(body.password, results.password)
            if(result){
               results.password = undefined
                const jsonToken = sign({result: results}, "jwt3215", {
                   // expiresIn: "1h"   /// for limit login session
                })
                return res.json({
                    success: true,
                    message: "Successfully logged in",
                    token: jsonToken,
                    user: results
                })
            }else{
                return res.status(401).json({
                    success: false,
                    message: "Invalid User or passwords"
                })
            }
        })
    }
    
}