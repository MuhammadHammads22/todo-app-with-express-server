// console.log("hello world from server")
import express from 'express'
import cors from "cors"
const app = express()
const port =  3000
const todo=[]
app.use(express.json());
app.use(cors());
// app.get('/water', (req, res) => {
//     console.log("some one requesting on server for water",new Date)
//     res.send('Hello from hammad server to ip for water:'+req.ip)
// })
// app.get('/food', (req, res) => {
//     console.log("some one requesting on server for food",new Date)
//     res.send('Hello from hammad server to ip for food:'+req.ip)
// })
app.get('/todo', (req, res) => {
    console.log("some one requesting for todo list",new Date)
    res.send({message:"here is your todo list",
              data:todo})
})
app.post('/todo', (req, res) => {
    todo.push(req.body.text)
    console.log("some one is posting a todo item",new Date)
    res.send({
      message:"your todo is saved",
      data:todo
    })
})
// app.post('/water', (req, res) => {
//     console.log("some one is offering water",new Date)
//     res.send('Hello from hammad your water is received:'+req.ip)
// })
// app.post('/food', (req, res) => {
//     console.log("some one is offering food",new Date)
//     res.send('Hello from hammad your food is received:'+req.ip)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})