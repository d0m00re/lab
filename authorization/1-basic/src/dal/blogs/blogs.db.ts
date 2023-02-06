import entities from "../../entities";
import JackLapiquetteDb from "./../../services/JackLapiquette.db";
import { validJoin, generateId } from "../../services/utils.db";


class BlogsModel extends JackLapiquetteDb {
    constructor(db : entities.IDb) {
        super(db);
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

        // check if userId exist or not
        return encodeData;
    }
    /*
    // add
    public add(username : string) : entities.IUser {
        let newUser = {
            id : this.db.users.length,
            username : username
        }
        this.db.users.push(newUser);
        return newUser;
    }
    // find one with pk
    public findWtPk(id : number) : entities.IUser | undefined {
        return this.db.users.find(elem => elem.id === id);
    } 

    // find all
    public findAll(user : Partial<entities.IUser>) {
        return this.db.users;
    }
    // delete

    // purge
    */
}

export {BlogsModel};
export default (db : entities.IDb) => new BlogsModel(db);