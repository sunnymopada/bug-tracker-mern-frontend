const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const bugs = [
   { id: 1, description: 'Bug 1', userId: 1, resolved: true },
   { id: 2, description: 'Bug 2', userId: 1, resolved: false },
   { id: 3, description: 'Bug 3', userId: 2, resolved: true },
   { id: 4, description: 'Bug 4', resolved: false }
]

app.post('/api/users/login', (req, res) => {
   const response = { jwt_token: 'alskdfjlakdshf', expires_in: 1 }
   res.json(response)
})

app.post('/api/users/register', (req, res) => {
   const response = { jwt_token: 'alskdfjlakdshf', expires_in: 1 }
   res.json(response)
})

app.get('/api/bugs', (req, res) => {
   res.json(bugs)
})

app.post('/api/bugs', (req, res) => {
   const bug = { id: Date.now(), resolved: false, ...req.body }
   bugs.push(bug)

   res.json(bug)
})

app.patch('/api/bugs/:id', (req, res) => {
   const index = bugs.findIndex(bug => bug.id === parseInt(req.params.id))
   const bug = bugs[index]
   if ('resolved' in req.body) bug.resolved = req.body.resolved
   if ('userId' in req.body) bug.userId = req.body.userId

   res.json(bug)
})

app.listen(9001, () => {
   console.log('Node server started on port 9001.')
})
