import entities from "../../entities";
import JackLapiquetteDb from "./../../services/JackLapiquette.db";
import { validJoin, generateId } from "../../services/utils.db";

class CommentsModel extends JackLapiquetteDb{
    constructor(db : entities.IDb) {
        super(db);
    }

    public add(data : Omit<entities.IComment, 'id'>) : entities.IComment | undefined {
        let encodeData = {
            ...data,
            id : generateId(this.db.articles)
        }
        //
        if (!validJoin(this.db.articles, data.articleId)
            || !validJoin(this.db.users, data.userId)) {
            return undefined;
        }

        // check if userId exist or not
        return encodeData;
    }
}

export {CommentsModel};
export default (db : entities.IDb) => new CommentsModel(db);