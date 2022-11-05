import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json());
let avatarPerfil = ""


const tweets = [
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    }
]

const users = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
]


app.post("/sign-up", (req, res) => {

    const { username, avatar } = req.body

    const signup = {
        username,
        avatar
    }

    users.push(signup)

    res.status(200).send("OK")

})

app.post("/tweets", (req, res) =>{
    const {username, tweet} = req.body

    const postTweet = {
        username,
        tweet
    }

    tweets.push(postTweet)

    res.status(200).send("OK")
})


 app.get("/tweets", (req, res) => {

    res.send(tweets)
}) 


app.listen(5000, () => console.log(`Server running in port ${5000}`))
