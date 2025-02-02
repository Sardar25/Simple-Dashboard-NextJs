export interface Post {
    id:string;
    title:string;
    body:string;
    author:string;
    date:string;
    comments:PostComment[];

}

interface PostComment {
    id:string;
    text:string;
    username:string;
}