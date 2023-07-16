import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/home/home";
import ErrorPage from "../page/error/404";
import Login from "../page/auth/Login";
import SignUp from "../page/auth/SignUp";
import AddBook from "../page/addBook";
import PrivateRoute from "./PrivateRoute";
import AllBook from "../page/allBook";
import BookDetails from "../page/bookDetails";
import EditBook from "../page/editBook";
import WishList from "../page/wishList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-book",
        element: <AllBook />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/edit-book/:id",
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/wish-list",
        element: <WishList />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
