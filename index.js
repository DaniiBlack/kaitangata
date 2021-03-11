const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT||3000
const bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())
const wai = [
  {
    title:'Amazing event',
    date:'2021-03-10',
    startTime:'12:00',
    endTime:'18:00',
    menu:'Woke dumplings',
    location: 'Motueka'
  },
  {
    title:'Self Amusement',
    date:'2021-03-12',
    startTime:'11:00',
    endTime:'17:00',
    menu:'TBD',
    location: 'Glebe'
  },
  {
    title:'Less good event',
    date:'2021-03-15',
    startTime:'13:00',
    endTime:'19:00',
    menu:'Sad dumplings',
    location: 'Nelson'
  },
  {
    title:'Getting sideways',
    date:'2021-03-14',
    startTime:'18:00',
    endTime:'00:00',
    menu:'A lot of wine and some eggs',
    location: 'Hunter Valley, NSW'
  },
  {
    title:'Less good event',
    date:'2021-03-15',
    startTime:'13:00',
    endTime:'19:00',
    menu:'Sad dumplings',
    location: 'Nelson'
  },
  {
    title:'Less good event',
    date:'2021-03-15',
    startTime:'13:00',
    endTime:'19:00',
    menu:'Sad dumplings',
    location: 'Nelson'
  },
  {
    title:'Less good event',
    date:'2021-03-15',
    startTime:'13:00',
    endTime:'19:00',
    menu:'Sad dumplings',
    location: 'Nelson'
  },
  {
    title:'Less good event',
    date:'2021-03-15',
    startTime:'13:00',
    endTime:'19:00',
    menu:'Sad dumplings',
    location: 'Nelson'
  },
  {
    title:'Less good event',
    date:'2021-03-15',
    startTime:'13:00',
    endTime:'19:00',
    menu:'Sad dumplings',
    location: 'Nelson'
  },
  {
    title:'Less good event',
    date:'2021-03-15',
    startTime:'13:00',
    endTime:'19:00',
    menu:'Sad dumplings',
    location: 'Nelson'
  },
  {
    title:'Less good event',
    date:'2021-03-15',
    startTime:'13:00',
    endTime:'19:00',
    menu:'Sad dumplings',
    location: 'Nelson'
  },

]

app.get('/wai', (req, res) => {
  res.json({
    wai
  })
});
app.post('/wai', (req, res) => {
  console.log(req.body);
  wai.push(req.body)
  res.json({})
});

app.get( "/", (req, res) => {
  res.send("Connected")
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})