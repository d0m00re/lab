export interface IUser{
    id : number;
    username : string;
}

export interface IComment {
    id : number;
    userId : number;
    articleId : number;
    text : string;
}

export interface IArticle {
    id : number;
    userId : number;
    blogId : number;
    text : string;
}

export interface IBlog {
    id : number;
    userId : number;
    title : string;
}

export interface IDb {
    users : IUser[],
    blogs : IBlog[],
    articles : IArticle[],
    comments : IComment[]
}