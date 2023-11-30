import "./App.css";
import HomeScreen from "./pages/HomeScreen";

function App() {
  return (
    <>
      
      <div>
        <HomeScreen/>
      </div>
      <h1 className="text-3xl font-bold underline text-red-500">
        This is a tailwind test. Here is a protection test for the branch.
      </h1>
    </>
  );
}

export default App;
