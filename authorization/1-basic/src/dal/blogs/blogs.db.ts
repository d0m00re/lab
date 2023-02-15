import entities from "../../entities";
import JackLapiquetteDb from "./../../services/JackLapiquette.db";
import { validJoin, generateId } from "../../services/utils.db";


class BlogsModel extends JackLapiquetteDb {
    constructor(db : entities.IDb) {
        super(db);
    }

    public findWtPk(id : number) : entities.IBlog | undefined {
        return this.db.blogs.find(elem => elem.id === id);
    } 

    public add(data : Omit<entities.IBlog, 'id'>) : entities.IBlog | undefined {
        let encodeData = {
            ...data,
            id : generateId(this.db.blogs)
        }
        //
        if (!validJoin(this.db.users, data.userId)) {
            return undefined;
        }

        // push data
        this.db.blogs.push(encodeData);

        // check if userId exist or not
        return encodeData;
    }

    public delete(pk : number) : entities.IBlog | undefined {
        let index = this.db.blogs.findIndex(e => e.id === pk);

        if (index === -1) return undefined;
        let store = this.db.blogs[index];
        this.db.blogs.splice(index);
        return store;
    }
}

export {BlogsModel};
export default (db : entities.IDb) => new BlogsModel(db);