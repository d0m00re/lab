import entities from "../entities";
// todo : find best way for abstract class
class JackLapiquetteDb {
    db : entities.IDb;
    constructor(db : entities.IDb) {
        this.db = db;
    }
}

export default JackLapiquetteDb;