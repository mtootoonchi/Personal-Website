const port = 5500
const express = require('express')
const app = express()

app.get('/submit', (req, res) => {
    res.json()
})

app.listen(PORT, () => console.log('Server running on PORT ${PORT)'))