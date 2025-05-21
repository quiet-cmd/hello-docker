const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send({
        "results": [
            {
              "name": "Rick Sanchez"
            },
            {
              "name": "Adjudicator Rick"
            },
            {
              "name": "Alien Rick"
            },
            {
              "name": "Antenna Rick"
            },
            {
              "name": "Aqua Rick"
            },
            {
              "name": "Black Rick"
            },
            {
              "name": "Bootleg Portal Chemist Rick"
            },
            {
              "name": "Commander Rick"
            },
            {
              "name": "Cool Rick"
            },
            {
              "name": "Cop Rick"
            },
            {
              "name": "Cowboy Rick"
            },
            {
              "name": "Cronenberg Rick"
            },
            {
              "name": "Cyclops Rick"
            },
            {
              "name": "Doofus Rick"
            },
            {
              "name": "Evil Rick"
            },
            {
              "name": "Garment District Rick"
            },
            {
              "name": "Insurance Rick"
            },
            {
              "name": "Investigator Rick"
            },
            {
              "name": "Juggling Rick"
            },
            {
              "name": "Maximums Rickimus"
            }
          ]
    })
})

app.listen(3000, () => {
    console.log(`Server is running http://localhost/3000`)
})
