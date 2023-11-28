import "./App.css";
import HomeScreen from "./pages/HomeScreen";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">
        This is a tailwind test. Here is a protection test for the branch.
      </h1>
      <div>
        <HomeScreen/>
      </div>
    </>
  );
}

export default App;
