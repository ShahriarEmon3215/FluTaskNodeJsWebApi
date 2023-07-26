require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./apis/users/users.routes.js')
const projectRouter = require('./apis/projects/projects.routes.js')
const taskRouter = require('./apis/tasks/tasks.routes.js')
const collaborationRouter = require('./apis/collaboration/collaboration.routes.js')

app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/project', projectRouter)
app.use('/api/task', taskRouter)
app.use('/api/collaboration', collaborationRouter) 

app.listen(2023, ()=>{
    console.log("Server is up and runnng at port : ",  2023)
})