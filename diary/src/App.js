import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';

// import RouteTest from './components/RouteTest';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import MyHeader from './components/MyHeader';
import MyButton from './components/MyButton';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <MyHeader
      leftChild={
        <MyButton
        text={"왼쪽 버튼"}
        onClick={() => {
          alert("왼쪽버튼클릭!")
        }}
        />
      }
      headText={"APP"}
      rightChild={
        <MyButton
        text={"오른쪽 버튼"}
        onClick={() => {
          alert("오른쪽버튼클릭!")
        }}
        />
      }
      
      />
      <h2>Hello</h2>
   
      <h1>React Router 실습</h1>
        <MyButton
          text={"버튼"}
          type={"positive"}
          onClick={() => alert("버튼 클릭")}
        />
        <MyButton
          text={"버튼"}
          type={"negative"}
          onClick={() => alert("버튼 클릭")}
        />
        <MyButton
          text={"버튼"}
          type={"default"}
          onClick={() => alert("버튼 클릭")}
        />
        <MyButton
          text={"버튼"}
          type={"abc"}
          onClick={() => alert("버튼 클릭")}
        />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/diary/:id' element={<Diary/>}/>
      </Routes>
      {/* <RouteTest/>
      <Link to={"/Edit"}>
      <button>Test</button>
      </Link>
       */}
    </div>
    </BrowserRouter>
  );
}

export default App;
