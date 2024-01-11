import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import SampleHome from './components/samples/SamplesHome';
function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Routes>
        <Route exact path="/" element={<SampleHome />} />
      </Routes>
    </div>
  );
}

export default App;
