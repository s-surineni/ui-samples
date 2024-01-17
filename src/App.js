import './App.css';
import { Route, Routes } from "react-router-dom";
import SampleHome from './components/samples/SamplesHome';
import LoginPage from './components/login/login1/LoginPage';
import LoginPage2 from './components/login/login2/LoginPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Routes>
        <Route exact path="/" element={<SampleHome />} />
        <Route path="/sample/login1" element={<LoginPage />} />
        <Route path="/sample/login2" element={<LoginPage2 />} />
      </Routes>
    </div>
  );
}

export default App;
