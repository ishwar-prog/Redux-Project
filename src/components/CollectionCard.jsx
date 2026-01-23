import React from "react";
import { useDispatch } from "react-redux";
import { removeCollection } from "../redux/features/collectionSlice";
import { removeToast } from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
  };
  return (
    <div>
      <div className="w-full h-80 relative bg-white rounded-3xl overflow-hidden shadow-md">
        <a target="_blank" className="h-full " href={item.url}>
          {item.type == "photo" ? (
            <img
              className="h-full w-full object-cover object-center"
              src={item.src}
              alt=""
            />
          ) : (
            ""
          )}
          {item.type == "video" ? (
            <video
              className="h-full w-full object-cover object-center"
              autoPlay
              loop
              muted
              src={item.src}
              alt=""
            />
          ) : (
            ""
          )}
          {item.type == "GIF" ? (
            <img
              className="h-full w-full object-cover object-center"
              src={item.src}
              alt=""
            />
          ) : (
            ""
          )}
        </a>
        <div
          id="bottom"
          className="flex justify-between gap-3 items-center w-full px-4 py-4 absolute bottom-0 bg-linear-to-t from-black/80 to-transparent text-white"
        >
          <h2 className="text-xl font-semibold capitalize h-14 overflow-hidden">
            {item.title}
          </h2>
          <button
            className="bg-lime-500 active:scale-95 text-white rounded px-3 py-2 cursor-pointer font-medium"
            onClick={() => {
              removeFromCollection(item);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
