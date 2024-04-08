import Heading from "./component/Heading";
import Random from "./component/Random";
import Tag from "./component/Tag";
function App() {
  return (
    <div className="flex flex-col   items-center gap-10 pt-4 ">
      <Heading/>
      <Random/>
      <Tag/>
    </div>
  );
}

export default App;
