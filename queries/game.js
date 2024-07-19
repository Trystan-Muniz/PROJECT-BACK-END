//we are connecting to the dbconfig ton import the connection to the databse so we can export and use inside of our controller.
const db = require('../db/dbConfig')
const getAllGames =  async () =>{
    //db.any is the connection to the databse. any is a method that says we are ok with any kind of data.
try {
    const allGames = await db.any("SELECT * FROM games")
    return allGames
} catch (error) {
    return error
}
};


const getGame = async (id) => {

    try {
        const oneGame = await db.one("SELECT * FROM games WHERE id=$1", id)
        return oneGame
    } catch (error) {
        return error
    }
}

const createGame = async (games) => {
    try {
        const newGame = await db.one("INSERT INTO games (name, company, price, rating, sequel, genre,description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *" , [games.name, games.company, games.price, games.rating,games.sequel, games.genre, games.description])
        return newGame
    } catch (error) {
        return error
    }
}

const updateGame = async(id, games) => {
    try {
        const updatedGame = await db.one ("UPDATE games SET  name=$1, company=$2, price=$3, rating=$4, sequel=$5, genre=$6, description=$7 WHERE id=$8 RETURNING *", [games.name, games.company, games.price, games.rating,games.sequel, games.genre, games.description,id])
        return updatedGame
    } catch (error) {
        return error
    }
}


const deleteGame  =  async (id) =>{
    try {
        const deletedGame = await db.one ("DELETE FROM games WHERE id=$1 RETURNING *", id)
        return deletedGame
    } catch (error) {
        return error
    }
}


const sortGamesUp = async () => {
    try {
        const sortedGamesUp = await db.one("SELECT game_name, price FROM games ORDER BY games_name ASC")
        return sortedGamesUp
    } catch (error) {
        return error
    }
};





module.exports = {getAllGames,getGame,createGame,deleteGame,updateGame,sortGamesUp};