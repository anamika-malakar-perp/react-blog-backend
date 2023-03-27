
const mongoClient = require("../database/connection");
const collectionName = "technology"; 

const technologyDataInsertToDb = async(req, res) => {
    const technologyData = req.body;
    try {
        const result = await mongoClient.insertToDB(technologyData, collectionName);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const technologyDataFindFromDb = async(req, res) => {
    try {
        const result = await mongoClient.findFromDB(collectionName);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

module.exports = { technologyDataInsertToDb, technologyDataFindFromDb } 