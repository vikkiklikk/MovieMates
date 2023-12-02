import "./App.css";
import DropDown from "./components/ui/DropDown";

function App() {
  return (
    <>
      <div>
         <DropDown
         options={[
          'val 1',
          'val 2',
          'val 3',
         ]}/>
      </div>
    </>
  );
}

export default App;
