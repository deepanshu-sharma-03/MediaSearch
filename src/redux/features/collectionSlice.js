import { createSlice } from "@reduxjs/toolkit";
import { Bounce, toast } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection(state, action) {
      const alreadyExists = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!alreadyExists) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
        toast.success("Added to Collection", {
          autoplay: 1000,
          theme: "dark",
          position: "top-center",
          transition: Bounce,
        });
      } else {
        toast.info("already exists", {
          autoplay: 1000,
          theme: "dark",
          position: "top-center",
          transition: Bounce,
        });
      }
    },
    removeCollection(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("collection", state.items);
      toast.success("Removed from Collection", {
        autoplay: 1000,
        theme: "dark",
        position: "top-center",
        transition: Bounce,
      });
    },
    clearCollection(state) {
      ((state.items = []), localStorage.removeItem("collection"));
    },
  },
});

export const { addCollection, removeCollection, clearCollection } =
  collectionSlice.actions;

export default collectionSlice.reducer;
