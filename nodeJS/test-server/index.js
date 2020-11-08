const express = require ('express')
const cors = require ('cors')

const charlenesProfile = {
    firstName: "Charlene",
    lastName: "Grant",
    preferences: {
        foods: ["lasagne", "Chocolate Hobnobs"],
        colour: "Yellow",
        number: 11
    },
    hoursOfSleep: 4.5
}

const db = {
    profiles: {
        1000: charlenesProfile,
    },
    books: {
        0: {
            title: "Animal Farm",
            author: "George Orwell"
        }
    }
}

const app = express()
app.use(cors())
app.use(express.json())

app.get('/profiles', (req, res) => {
    res.json({
        status: "Success you have reached /profiles",
        data: db.profiles
    })
})

app.post('/profiles', (req, res) => {
    const existingIds = Object.keys(db.profiles)
    const largestKey = Math.max(...existingIds)

    const newKey = largestKey + 1

    db.profiles[newKey] = req.body

    res.json({
        status:"success",
        message: `You have created a profile with an id of ${newKey}`
    })
})

app.get('/profiles/:userid', (req, res) => {
    console.log(req.params.userId)

    const matchingProfile = db.profiles[req.params.userId]

    if (matchingprofile) {
        res.json({
            status: "Success",
            data: matchingProfile
        })
    } else {
        res.json({
            message: "Couldn't find a user with that id"
        })
    }
})

app.listen(4000, () => {
    console.log("Server is running!")
})

