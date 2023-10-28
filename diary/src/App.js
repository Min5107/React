import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { createContext, useEffect, useReducer, useRef, useState  } from 'react';
import axios from 'axios';
import './App.css';

// import RouteTest from './components/RouteTest';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import MyHeader from './components/MyHeader';
import MyButton from './components/MyButton';


export const DiaryStateContext = createContext(null);
export const DiaryDispactchContext = createContext(null);

const reducer = (state, action) => {
  let newState = [];
  switch(action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE":{
        const newItem = {
          ...action.data
        };
        newState = [newItem, ...state];
        break;
    }

    case "REMOVE": {
        newState = state.filter((it) => it.id !== action.targetID);
        break
    }
    case "EDIT": {
        newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data} : it );
        break;
    }
    default: 
    return state;
  }
  return newState;
}



 /* App 데이터  */ 
function App() {
  const [data, dispatch] = useReducer(reducer,[]);
  const dataId = useRef(0);
  const [dummyData, setDummyData] = useState([]);
  console.log("App 컴포넌트 렌더링");

//   const initData = res.slice(0, 20).map((res) => {
//     return {
//         author: res.email,
//         content: res.body,
//         emotion: Math.floor(Math.random() * 5) + 1, // 0~5까지 랜덤수 추출
//         create_date: new Date().getTime(),
//         id: dataId.current++ // dataId를 현재 current값으로 넣고나서 ++을 통해 1을 더함
//     }
// })

  useEffect(() => {
    const fetchData = () => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
          const initData = res.data.slice(0, 20).map((item) => {
            return {
              author: item.email,
              content: item.body,
              emotion: Math.floor(Math.random() * 5) + 1, // 0~5까지 랜덤수 추출
              create_date: new Date().getTime(),
              id: dataId.current++ // dataId를 현재 current값으로 넣고나서 ++을 통해 1을 더함
          }
      })
          console.log(res.data);
          setDummyData(initData);
        });
    };
    fetchData();
  }, []);


  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data:{
        id: dataId.current,
        data: new Date(date).getTime(),
        content,
        emotion
      }
    });
    dataId.current += 1;
  };

  const onRemove = (targetID) => {
    dispatch({type: "REMOVE", targetID});
  };

  const onEdit = (targetID, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetID,
        data: new Date(date).getTime(),
        content,
        emotion
      }
    });
  };

  return (
    <DiaryStateContext.Provider value={{data, dummyData}}>
      <DiaryDispactchContext.Provider value={(onCreate, onEdit, onRemove)}>
    
    <BrowserRouter>
    <div className="App">
            
      {/* <MyHeader
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
        /> */}

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
    </DiaryDispactchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
