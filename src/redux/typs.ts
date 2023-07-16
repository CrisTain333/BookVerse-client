export type IRegisterData = {
  name: string;
  email: string;
  password: string;
};

export type ILoginCredential = {
  email: string;
  password: string;
};

export type IInitialState = {
  user: {
    _id: string;
    name: string;
    email: string;
  } | null;
  token: string;
  isLoading: boolean;
  error: boolean;
  errorMessage: string;
};

export type IBookGenre = {
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
};
