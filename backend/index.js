const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/wai', (req, res) => {
  res.json({
    wai: [
      {
        title:'Amazing event',
        date:'2021-03-10',
        startTime:'12:00',
        endTime:'18:00',
        menu:'Woke dumplings',
      },
      {
        title:'Less good event',
        date:'2021-03-15',
        startTime:'13:00',
        endTime:'19:00',
        menu:'Sad dumplings',
      }
    ]
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})