export interface Post {
  id: string,
  author: string,
  message: string,
  image: string | null,
}

export interface PostMutation {
  author: string,
  message: string,
  image: File | null,
}