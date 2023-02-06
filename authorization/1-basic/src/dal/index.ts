//export * from './articles';
//export * from './blogs';
//export * from './comments';
//export * from './users';

import entities from "./../entities";
import _User, {UserModel} from "../dal/users/user.db";
import _Articles, {ArticlesModel} from "../dal/articles/articles.db";
import _Blogs, {BlogsModel} from "../dal/blogs/blogs.db";
import _Comments, {CommentsModel} from "../dal/comments/comments.db";
//import User from "./dal/users/user.db";
// init model

export interface DalDb {
    Users: UserModel;
    Blogs : BlogsModel;
    Articles : ArticlesModel;
    Comments : CommentsModel;
}

export const initModel = (db : entities.IDb) : DalDb => {
    const Users = _User(db);
    const Blogs = _Blogs(db);
    const Articles = _Articles(db);
    const Comments = _Comments(db);
    //   User.
    return {
        Users,
        Blogs,
        Articles,
        Comments
    }
}