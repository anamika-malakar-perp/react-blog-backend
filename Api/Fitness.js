
const mongoClient = require("../database/connection");
const collectionName = "fitness"; 

const fitnessDataInsertToDb = async(req, res) => {
    const fitnessData = req.body;
    try {
        const result = await mongoClient.insertToDB(fitnessData, collectionName);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const fitnessDataFindFromDb = async(req, res) => {
    try {
        const result = await mongoClient.findFromDB(collectionName);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

module.exports = { fitnessDataInsertToDb, fitnessDataFindFromDb } 