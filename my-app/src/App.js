import "./App.css";
import "./DiaryEditor.css";

import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
// import OptimizeTest from "./OptimizeTest"; // 리랜더링 테스트
import React,{ useEffect, useRef, useState, useMemo, useCallback, useReducer } from "react";


// const dummyList = [{
//   id: 1,
//   author: "James1",
//   content: "Hello World1",
//   emotion: 1,
//   create_date: new Date().getTime()
// },{
//   id: 2,
//   author: "James2",
//   content: "Hello World2",
//   emotion: 2,
//   create_date: new Date().getTime()
// },{
//   id: 3,
//   author: "James3",
//   content: "Hello World3",
//   emotion: 3,
//   create_date: new Date().getTime()
// },
// ];

const reducer = (state, action) => {
  switch (action.type){
    case "INIT":{
      return action.data;
    }
      case "CREATE":{
        const created_date = new Date().getTime();
        const newItem = {
            ...action.data,
            created_date
        };
        return [newItem, ...state];
      }
        case "REMOVE":{
          return state.filter((it) => it.id !== action.targetId);
        }
          case "EDIT":{
              return state.map((it) => 
              it.id === action.targetId ? {...it, content: action.newContent} : it)
          }
            default: return state;
  }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  // const [data, setData] = useState([]);
  const [data, dispatch] = useReducer(reducer,[]);
  const dataId = useRef(0);

  const onCreate = useCallback((author, content, emotion) => {
    // const created_date = new Date().getTime();
    // const newItem = {
    //   author,
    //   content,
    //   emotion,
    //   created_date,
    //   id: dataId.current,
    // };
    
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current}
    });
    dataId.current += 1;
    // setData((data) => [newItem, ...data]);
  },[]);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json());
    console.log(res)

    const initData = res.slice(0,20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) +1,
        created_date: new Date().getTime(),
        id: dataId.current++
      };
    });
    dispatch({type: "INIT" , data: initData});
    // setData(initData);
  };

  useEffect(()=>{
    getData();
  }, [])

  const onRemove = useCallback((targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    dispatch({type: "REMOVE", targetId});
    // setData(data => data.filter((it) => it.id !== targetId));
  },[]);

  const onEdit = useCallback((targetId, newContent) => {
    // setData(data =>
    //   data.map((it) => 
    //   it.id === targetId ? {...it, content: newContent} : it)
    // );
    dispatch({type: "EDIT", targetId, newContent});
  },[]);

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >=3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return {goodCount, badCount, goodRatio};
  }, [data.length]);

  const {goodCount, badCount, goodRatio} = getDiaryAnalysis;

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  }, []);

  return (
    <DiaryStateContext.Provider value={data}> 
    <DiaryDispatchContext.Provider value={memoizedDispatch}>
      <div className="App">
      {/* <OptimizeTest/> 리랜더링 테스트*/}
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio} %</div>
      <DiaryList /*onEdit={onEdit} onRemove={onRemove} diaryList={data}*/ />
    </div>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    
  );
}


export default App;
