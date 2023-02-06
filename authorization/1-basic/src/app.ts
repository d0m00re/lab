import entities from "./entities";
import LapiquetteDb from "./services/fake.db";
import * as dalInit from "./dal";

// populate model
const populateModel = (dal: dalInit.DalDb) => {
    dal.Users.add("john snow");
    dal.Users.add("jack snow");
    dal.Users.add("jean snow");
}

// play
const play = (dal: dalInit.DalDb) => {
    console.log("=== play ===");
    console.log(JSON.stringify(dal.Users));
}

let dal = dalInit.initModel(LapiquetteDb);
populateModel(dal);
play(dal);