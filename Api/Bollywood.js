
const mongoClient = require("../database/connection");
const collectionName = "bollywood";

const bollywoodDataInsertToDb = async(req, res) => {
    const bollywoodData = req.body;
    try {
        const result = await mongoClient.insertToDB(bollywoodData, collectionName);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const bollywoodDataFindFromDb = async(req, res) => {
    try {
        const result = await mongoClient.findFromDB(collectionName);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

module.exports = { bollywoodDataInsertToDb, bollywoodDataFindFromDb } 