import React from "react";
import { removeCollection } from "../redux/features/collectionSlice";
import { useDispatch } from "react-redux";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden cursor-pointor">
      <a target="_blank" href={item.url} className="h-full">
        {item.type == "photo" ? (
          <img
            className="h-full w-full rounded object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            autoPlay
            muted
            loop
            className="h-full w-full rounded object-cover object-center"
            src={item.src}
          ></video>
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="flex justify-between items-center gap-3 absolute w-full px-4 py-6  bottom-0 text-white"
      >
        <h2 className=" text-lg font-semibold capitalize h-14 overflow-hidden">
          {item.title}
        </h2>
        <button
          onClick={() => {
            dispatch(removeCollection(item));
          }}
          className="bg-indigo-600 active:scale-95 text-xl  px-3 py-1 font-medium  cursor-pointer rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
