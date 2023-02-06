import entities from "./../../entities";
import JackLapiquetteDb from "./../../services/JackLapiquette.db";
import {generateId} from "./../../services/utils.db";
class UserModel extends JackLapiquetteDb {
    constructor(db : entities.IDb) {
        super(db);
    }

    // add
    public add(username : string) : entities.IUser {
        let newUser = {
            id : generateId(this.db.users),
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
}
export {UserModel};
export default (db : entities.IDb) => new UserModel(db);