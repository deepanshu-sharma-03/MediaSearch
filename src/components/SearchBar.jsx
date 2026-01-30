import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  function submitHandler(event) {
    event.preventDefault();
    dispatch(setQuery(text));
    setText("");
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          submitHandler(event);
        }}
        className="flex bg-gray-900 gap-3 "
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className=" text-2xl border-2 mt-5 ml-3 mb-5 outline-none rounded-xl w-full  px-5 py-4 "
          required
          type="text"
          placeholder="type something..."
        />
        <button className="active:scale-95 mt-5 mr-3 mb-5 cursor-pointer border-2 rounded-xl text-2xl  px-8 py-4 ">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
