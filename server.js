const app = require('express')()
const router = require('./routes/routes')
const PORT = 3001

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}...`)
})