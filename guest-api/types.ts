export interface Post {
  id: string,
  author: string,
  message: string,
  image: string | null,
}

export interface ReqPost {
  author: string,
  message: string,
  image: string | null,
}