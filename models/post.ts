import Comment from "./comments.ts";

// Cambiamos el nombre de las variables al mismo nombre que devuelve la API
interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  cover: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  comments: Comment[];
}

export default Post;
