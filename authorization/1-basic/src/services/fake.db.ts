import entities from "./../entities";

const initFakeDb = () : entities.IDb => {
    return {
        users : [],
        blogs : [],
        articles : [],
        comments : []
    }
}

export default initFakeDb();