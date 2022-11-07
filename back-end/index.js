import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json());


let profilePic = ""

const tweets = [
    {
        username: "bobesponja",
        tweet: "eu amo o hub",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
]

const users = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
]

app.get("/tweets", (req, res) => {

    res.send(tweets.slice(0,10))
 })

app.post("/sign-up", (req, res) => {

    const { username, avatar } = req.body

    const signup = {
        username,
        avatar
    }

    profilePic = avatar

    users.push(signup)

    res.status(200).send("OK")

})

app.post("/tweets", (req, res) =>{
    const {username, tweet} = req.body

    const postTweet = {
        username,
        tweet,
        avatar: profilePic
    }

    tweets.unshift(postTweet)

    res.status(200).send("OK")
})


 


app.listen(5000, () => console.log(`Server running in port ${5000}`))
