export type IUser = {
  name: string;
  email: string;
  password: string;
};
export type IBook = {
  title: string;
  author: string;
  genre:
    | "Fiction"
    | "Fantasy"
    | "Mystery"
    | "Poetry"
    | "Young Adult"
    | "Non-Fiction"
    | "Science Fiction"
    | "Romance"
    | "Thriller"
    | "Historical Fiction"
    | "Biography"
    | "Self-Help"
    | "Humor"
    | "Drama"
    | "Horror"
    | "Adventure"
    | "Action"
    | "Classic"
    | "Other";
  publicationDate: string;
  reviews: string[];
  addedBy?: string;
};
