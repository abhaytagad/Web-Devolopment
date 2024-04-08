import Card from "./Card";

function App() {
  return (
   <div className="flex flex-col gap-4 pt-4">
    <div className="flex flex-col items-center gap-2 justify-center">
      <h1 className="font-bold text-4xl">Our Testimonials</h1>
      <div className="bg-violet-500 w-[15%] h-1"></div>
    </div>
    <div className="flex items-center justify-center ">
      <Card/>
    </div>
   </div>
  );
}

export default App;
