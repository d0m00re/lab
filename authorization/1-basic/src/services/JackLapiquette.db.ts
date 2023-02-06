import entities from "../entities";

class JackLapiquetteDb {
    db : entities.IDb;
    constructor(db : entities.IDb) {
        this.db = db;
    }
}

export default JackLapiquetteDb;