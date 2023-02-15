import entities from "../../entities";
import { validJoin, generateId } from "../../services/utils.db";
import JackLapiquetteDb from "./../../services/JackLapiquette.db";

class ArticlesModel extends JackLapiquetteDb{
    constructor(db : entities.IDb) {
        super(db);
    }
    
    public findWtPk(id : number) : entities.IArticle | undefined {
        return this.db.articles.find(elem => elem.id === id);
    } 

    public add(data : Omit<entities.IArticle, 'id'>) : entities.IArticle | undefined {
        let encodeData = {
            ...data,
            id : generateId(this.db.articles)
        }
        //
        if (!validJoin(this.db.blogs, data.blogId)
            || !validJoin(this.db.users, data.userId)) {
            return undefined;
        }
        //push data
        this.db.articles.push(encodeData);


        // check if userId exist or not
        return encodeData;
    }

    public delete(pk : number) : entities.IArticle | undefined {
        let index = this.db.articles.findIndex(e => e.id === pk);

        console.log(index)
        if (index === -1) return undefined;
        let store = this.db.articles[index];
        this.db.blogs.splice(index);
        return store;
    }
}

export {ArticlesModel}
export default (db : entities.IDb) => new ArticlesModel(db);