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
    (store) => store.search
  );

  useEffect(function () {
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
            url: item.links.html
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
            url: item.url
          }));
        }

        if (activeTabs === "GIF") {
          let response = await fetchGIF(query);
          data = response.data.results.map((item) => ({
            id: item.id,
            type: "GIF",
            title: item.title || "GIF",
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url: item.url
          }));
        }
        dispatch(setResults(data));

      } catch (err) {
        dispatch(setError(err.message));
      }
    }
    getData();
  }, [query, activeTabs, dispatch]);

  if (error) return <h1>error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex justify-between w-full flex-wrap gap-6 overflow-auto px-5">
      {results.map((item, idx) => {
        return <div key={idx}>
            <a target="_blank" href={item.url}><ResultCard item={item} /></a>
          </div>
      })}
    </div>
  );
};

export default ResultGrid;























// import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi.js";
// import {
//   setLoading,
//   setError,
//   setResults,
// } from "../redux/features/searchSlice.js";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

// const ResultGrid = () => {
//   const dispatch = useDispatch();
//   const { query, activeTabs, loading, error, results } = useSelector(
//     (store) => store.search,
//   );

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         dispatch(setLoading());
//         let data = [];

//         if (activeTabs === "photos") {
//           const response = await fetchPhotos(query);
//           data = response.results.map((item) => ({
//             id: item.id,
//             type: "photo",
//             title: item.alt_description,
//             thumbnail: item.urls.small,
//             src: item.urls.full,
//           }));
//         }

//         if (activeTabs === "videos") {
//           const response = await fetchVideos(query);
//           data = response.videos.map((item) => ({
//             id: item.id,
//             type: "video",
//             title: item.user?.name || "video",
//             thumbnail: item.image,
//             src: item.video_files?.[0]?.link,
//           }));
//         }

//         if (activeTabs === "GIF") {
//           const response = await fetchGIF(query);
//           data = response.data.results.map((item) => ({
//             id: item.id,
//             type: "GIF",
//             title: item.title || "GIF",
//             thumbnail: item.media_formats.tinygif.url,
//             src: item.media_formats.gif.url,
//           }));
//         }

//         dispatch(setResults(data));
//       } catch (err) {
//         dispatch(
//           setError({
//             message:
//               err?.response?.data?.message || err?.message || "Request failed",
//             status: err?.response?.status || 500,
//           }),
//         );
//       }
//     };

//     getData();
//   }, [query, activeTabs, dispatch]);

//   if (error) return <h1>{error.message}</h1>;
//   if (loading) return <h1>Loading...</h1>;

//   return (
//     <div>
//       {results.map((item) => (
//         <div key={item.id}>
//           <h1>{item.title}</h1>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ResultGrid;
