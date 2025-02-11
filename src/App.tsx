
import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <div className="p-5 md:px-[15%]">
        <Navbar/>
        <Home />
      </div>
    </h1>
  )
}