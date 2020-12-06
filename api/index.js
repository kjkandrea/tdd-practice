const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000

app.use(morgan('dev'))

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`)
})