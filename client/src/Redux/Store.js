import { configureStore } from "@reduxjs/toolkit";
import pokemon from "./Slices";

export default configureStore({
  reducer: {
    pokemon,
  },
});
