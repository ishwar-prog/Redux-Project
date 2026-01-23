import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi.js";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTabs, loading, error, results } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      if (!query) return;
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];

          if (activeTabs == "photos") {
            let response = await fetchPhotos(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              url: item.links.html,
            }));
          }

          if (activeTabs == "videos") {
            let response = await fetchVideos(query);
            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
              url: item.url,
            }));
          }

          if (activeTabs === "GIF") {
            let response = await fetchGIF(query);
            data = response.data.map((item) => ({
              id: item.id,
              type: "GIF",
              title: item.title || "GIF",
              thumbnail: item.images.fixed_height_small.url,
              src: item.images.original.url,
              url: item.url,
            }));
          }
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };
      getData();
    },
    [query, activeTabs, dispatch],
  );

  if (error) return <h1>error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-5 py-4">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;

// return <div key={idx}>
//             <a target="_blank" href={item.url}><ResultCard item={item} /></a>
//           </div>
