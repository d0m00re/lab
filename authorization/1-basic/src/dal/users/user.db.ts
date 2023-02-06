import entities from "./../../entities";

class User {
    db : entities.IDb;
    constructor(db : entities.IDb) {
        this.db = db;
    }

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
}

export default User;