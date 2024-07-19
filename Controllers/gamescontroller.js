const express =require('express')
const games = express.Router()
const { getAllGames,getGame,createGame,deleteGame,updateGame, sortGamesUp } = require ('../queries/game')


// localhost:4444/games/
games.get('/', async (req,res) => {
    const allGames =  await getAllGames()
    if(allGames[0]){
    res.status(200).json(allGames)
    }
    else {
        res.status(500).json({error: "Internal server Error"})
    }
})

//Show: local:4444/games/1
games.get('/:id', async (req,res) => {
    const { id } = req.params
    const singleGame = await getGame(id)
    if(singleGame){
        res.status(200).json(singleGame)
    } else {
        res.status(404).json({error:"Game Not Found"})
    }
})
//localhost:4444/games :when creating we are speaking to the database so the / is by itself(asyncronise)
//Req.body used as argument. we are trying to receive information which lives in the body of the request
games.post('/', async (req,res) => {
  const newGame = await createGame(req.body)
    res.json(newGame)
})

games.delete("/:id", async (req,res) => {
    const { id } = req.params
    const deletedGame = await deleteGame(id)
    if(deletedGame.id){
        res.status(200).json({error: "Successfully deleted Game."})
    } else {
        res.status(404).json({ error: "Game Not Found."})
    }

})

games.put("/:id", async (req,res) => {
    const { id } = req.params
    const updatedGame = await updateGame( id, req.body)
    if (updatedGame.id) {
        res.status(200).json(updatedGame)
    } else {
        res.status(404).json ({error: "Game Not Found"})
    }
})




games.get('/', async (req,res) => {
    const sortedGamesUp = await sortGamesUp()
    if(sortedGamesUp){
        res.status(200).json(sortGamesUp)
    }else {
        res.status(404).json({error: "Unable to sort games"})
    }
})



module.exports = games;