import './App.css';
import './DiaryEditor.css';

import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [{
  id: 1,
  author: "James1",
  content: "Hello World1",
  emotion: 1,
  create_date: new Date().getTime()
},{
  id: 2,
  author: "James2",
  content: "Hello World2",
  emotion: 2,
  create_date: new Date().getTime()
},{
  id: 3,
  author: "James3",
  content: "Hello World3",
  emotion: 3,
  create_date: new Date().getTime()
},

];

function App() {
  return (
    <div className="App">
     <DiaryEditor/>
     <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
