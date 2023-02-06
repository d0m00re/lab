import entities from "./entities";
import LapiquetteDb from "./services/fake.db";
import * as dalInit from "./dal";

// populate model
const populateModel = (dal: dalInit.DalDb) => {
    dal.Users.add("john snow");
    dal.Users.add("jack snow");
    dal.Users.add("jean snow");

    const user = dal.Users.findWtPk(1);
    if (!user) return ;
    dal.Blogs.add({userId : user.id, title : "health"})
    dal.Blogs.add({userId : user.id, title : "duck life"})

    const blogs = dal.Blogs.findWtPk(1);
    if (!blogs) return ;
    dal.Articles.add({userId : 1, blogId : blogs.id, text : "health"})

    const articles = dal.Articles.findWtPk(0);
    if (!articles) return ;
    dal.Comments.add({userId : 1, articleId : articles.id, text : "food"})
    dal.Comments.add({userId : 1, articleId : articles.id, text : "adopt me"})
    dal.Comments.add({userId : 1, articleId : articles.id, text : "idk"})
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