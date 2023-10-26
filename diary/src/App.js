import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';

import RouteTest from './components/RouteTest';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h2>Hello</h2>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/diary/:id' element={<Diary/>}/>
      </Routes>
      <RouteTest/>
      <Link to={"/Edit"}>
      <button>Test</button>
      </Link>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
