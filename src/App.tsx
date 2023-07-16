/* eslint-disable @typescript-eslint/no-floating-promises */
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import {
  useAppDispatch,
  useAppSelector,
} from "./redux/hooks/hook";
import { useEffect } from "react";
import { getUser } from "./redux/feature/user/userSlice";
import { loadWishlist } from "./redux/feature/wishlist/wishlistSlice";
const App = () => {
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const callMe = async () => {
      if (token) {
        await dispatch(getUser(token));
      }
      dispatch(loadWishlist());
    };
    callMe();
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
