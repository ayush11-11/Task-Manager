const express = require('express')
const path = require('path')

var PORT=process.env.PORT|| 5000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/todos', require('./todos'))
app.use('/todos/sort/',require('./todos'))

app.use('/todos/note/',require('./todos'))
app.listen(PORT, () => console.log('Server started at http://localhost:2678'))
