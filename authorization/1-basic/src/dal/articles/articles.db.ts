import entities from "../../entities";
import JackLapiquetteDb from "./../../services/JackLapiquette.db";

class ArticlesModel extends JackLapiquetteDb{
    constructor(db : entities.IDb) {
        super(db);
    }
    /*
    // add
    public add(username : string) : entities.IArticle {
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
    */
    // delete

    // purge
}

export {ArticlesModel}
export default (db : entities.IDb) => new ArticlesModel(db);