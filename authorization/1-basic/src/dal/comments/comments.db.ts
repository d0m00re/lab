import entities from "../../entities";
import JackLapiquetteDb from "./../../services/JackLapiquette.db";
import { validJoin, generateId } from "../../services/utils.db";

class CommentsModel extends JackLapiquetteDb{
    constructor(db : entities.IDb) {
        super(db);
    }

    public findWtPk(id : number) : entities.IComment | undefined {
        return this.db.comments.find(elem => elem.id === id);
    } 

    public add(data : Omit<entities.IComment, 'id'>) : entities.IComment | undefined {
        let encodeData = {
            ...data,
            id : generateId(this.db.articles)
        }
        if (!validJoin(this.db.articles, data.articleId)
            || !validJoin(this.db.users, data.userId)) {
            return undefined;
        }
        // push data
        this.db.comments.push(encodeData);
        // check if userId exist or not
        return encodeData;
    }

    public delete(pk : number) : entities.IComment | undefined {
        let index = this.db.comments.findIndex(e => e.id === pk);

        if (index === -1) return undefined;
        //
        let store = this.db.comments[index];
        this.db.comments.splice(index, 1);
        return store;
    }
}

export {CommentsModel};
export default (db : entities.IDb) => new CommentsModel(db);