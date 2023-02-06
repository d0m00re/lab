import entities from "./entities";
import LapiquetteDb from "./services/fake.db";
import _User from "./dal/users/user.db";
//import User from "./dal/users/user.db";
// init model

interface DalDb {
    User: _User;
}

const initModel = (db : entities.IDb) : DalDb => {
    let User = new _User(db);

    //   User.
    return {
        User
    }
}
// populate model
const populateModel = (dal: DalDb) => {
    dal.User.add("john snow");
    dal.User.add("jack snow");
    dal.User.add("jean snow");
}

// play
const play = (dal: DalDb) => {
    console.log("=== play ===");
    console.log(JSON.stringify(dal.User));
}

let dal = initModel(LapiquetteDb);
populateModel(dal);
play(dal);


/*
import express, { Application, Request, Response } from 'express'

const app: Application = express()

const port: number = 3001


app.get('/', (req: Request, res: Response) => {
    res.send('Hello Jack Lapiquette')
})

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})*/
