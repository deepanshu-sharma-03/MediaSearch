import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const dispatch = useDispatch();

  const collectionData = useSelector((state) => state.collection.items);
  return (
    <div>
      {collectionData.length > 0 ? (
        <div className="flex justify-between m-5">
          <h2 className="  text-2xl font-semibold px-6 py-4">
            Your Collection
          </h2>
          <button
            onClick={() => {
              dispatch(clearCollection());
            }}
            className="bg-red-500 font-semibold text-xl px-6 rounded-xl py-4 active:scale-95 cursor-pointer transition"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="  text-center  text-3xl font-semibold mt-6 px-6 py-4">
          Collection is Empty
        </h2>
      )}

      <div className="flex justify-start w-full flex-wrap overflow-auto gap-5  px-10 py-6">
        {collectionData.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
