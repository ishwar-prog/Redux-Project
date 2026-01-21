
import { useDispatch } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";
import { useSelector } from "react-redux";
const Tabs = () => {
  const tabs = ["photos", "videos", "GIF"];

  const dispatch = useDispatch();

  const activeTabs = useSelector((state)=>state.search.activeTabs)
  return (
    <div className="flex gap-10 p-10">
      {tabs.map(function (elem, idx) {
        return (
          <button
            className={`${(activeTabs == elem?'bg-cyan-950':'bg-blue-500')} transition-all duration-80 cursor-pointer active:scale-95 px-5 py-2 rounded-4xl uppercase`}
            key={idx}
            onClick={()=>{
              dispatch(setActiveTabs(elem))
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
