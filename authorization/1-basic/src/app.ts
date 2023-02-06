import entities from "./entities";
import LapiquetteDb from "./services/fake.db";
import * as dalInit from "./dal";

// populate model
const populateModel = (dal: dalInit.DalDb) => {
    dal.Users.add("john snow");
    dal.Users.add("jack snow");
    dal.Users.add("jean snow");

    let user = dal.Users.findWtPk(1);
    if (!user) return ;
    dal.Blogs.add({userId : user.id, title : "health"})
    dal.Blogs.add({userId : user.id, title : "duck life"})

    dal.Articles.add({userId : 1, blogId : 1, text : "health"})

    dal.Comments.add({userId : 1, articleId : 0, text : "food"})
    dal.Comments.add({userId : 1, articleId : 0, text : "adopt me"})
    dal.Comments.add({userId : 1, articleId : 0, text : "idk"})
}

// play
const play = (dal: dalInit.DalDb) => {
    let db = dal.Users.db;
    console.log("=== play ===");
    console.log(JSON.stringify(db.users));
    console.log(JSON.stringify(db.blogs));
    console.log(JSON.stringify(db.articles));
    console.log(JSON.stringify(db.comments));

}

let dal = dalInit.initModel(LapiquetteDb);
populateModel(dal);
play(dal);