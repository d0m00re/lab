import entities from "../../entities";
import JackLapiquetteDb from "./../../services/JackLapiquette.db";

class CommentsModel extends JackLapiquetteDb{
    constructor(db : entities.IDb) {
        super(db);
    }
}

export {CommentsModel};
export default (db : entities.IDb) => new CommentsModel(db);