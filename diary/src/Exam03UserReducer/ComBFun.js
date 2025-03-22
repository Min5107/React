import { useReducer, useState } from "react";

function reducer(prevBoards, action) {
  if(action.type === "ADD") {
    const newBoards = prevBoards.concat(action.board);
    return newBoards;
  } else if(action.type === "REMOVE") {
    const newBoards = prevBoards.filter(board => board.bno !== action.bno);
    return newBoards
  } else if(action.type === "UPDATE") {
    const newBoards = prevBoards.map(board => {
      if(board.bno === action.board.bno) {
        return action.board;
      } else {
        return board;
      }
    });
    return newBoards;
  } else {
    return null
  }
}

function ComBFun(props) {
  const [boards, dispatch] = useReducer(reducer, []);
  const [newBno, setNewBno] = useState(1);
  const [newBoard, setNewBoard] = useState({
    btitle: "",
    bcontent: ""
  });
  const [dirtiedBoard, setDirtiedBoard] = useState({
    bno: "",    
    btitle: "",
    bcontent: ""
  });

  const changeNewBoard = (event) => {
    setNewBoard({
      ...newBoard, [event.target.name]: event.target.value
    });
  };
  
  const addBoard = (event) => {
    const board = {...newBoard, bno:newBno};
    //boards 상태에 새로운 board 추가
    dispatch({type:"ADD", board});
    //게시물 번호 증가시키기
    setNewBno(newBno + 1);
    //새로운 입력을 위해 다시 초기화 시킴
    setNewBoard({
      btitle: "",
      bcontent: ""
    });
  };

  const selectBoard = (bno) => {
    const selectedBoard = boards.find(board => board.bno === bno);
    setDirtiedBoard({...selectedBoard});
  };

  const changeDirtiedBoard = (event) => {
    setDirtiedBoard({
      ...dirtiedBoard, [event.target.name]: event.target.value
    });
  };

  const updateBoard = (event) => {
    const board = {...dirtiedBoard};
    dispatch({type:"UPDATE", board});
    setDirtiedBoard({
      bno: "",
      btitle: "",
      bcontent: ""
    });
  };

  const removeBoard = (bno) => {
    dispatch({type:"REMOVE", bno});
  }

  return (
    <div className="card">
      <div className="card-header">
        ComBFun
      </div>
      <div className="card-body">
        <div className="alert alert-primary">
          <table style={{width:"100%"}}>
            <tbody>
              <tr>
                <td style={{width:"100px"}}>btitle</td>
                <td><input type="text" name="btitle" style={{width:"100%"}} value={newBoard.btitle} onChange={changeNewBoard}/></td>
              </tr>
              <tr>
                <td>bcontent</td>
                <td><input type="text" name="bcontent" style={{width:"100%"}} value={newBoard.bcontent} onChange={changeNewBoard}/></td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-success btn-sm" onClick={addBoard}>추가</button>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>bno</th>
                <th>btitle</th>
                <th>bcontent</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {boards.map(board =>(
                <tr key={board.bno}>
                  <td>{board.bno}</td>
                  <td>{board.btitle}</td>
                  <td>{board.bcontent}</td>
                  <td style={{width:"150px"}}>
                    <button className="btn btn-info btn-sm mr-1" onClick={(event)=>{selectBoard(board.bno);}}>선택</button>
                    <button className="btn btn-danger btn-sm" onClick={(event)=>{removeBoard(board.bno);}}>삭제</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="alert alert-primary">
          <table style={{width:"100%"}}>
            <tbody>
              <tr>
                <td style={{width:"100px"}}>bno</td>
                <td><input type="text" name="bno" style={{width:"100%"}} value={dirtiedBoard.bno} readOnly/></td>
              </tr>          
              <tr>
                <td style={{width:"100px"}}>btitle</td>
                <td><input type="text" name="btitle" style={{width:"100%"}} value={dirtiedBoard.btitle} onChange={changeDirtiedBoard}/></td>
              </tr>
              <tr>
                <td>bcontent</td>
                <td><input type="text" name="bcontent" style={{width:"100%"}} value={dirtiedBoard.bcontent} onChange={changeDirtiedBoard}/></td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-success btn-sm" onClick={updateBoard}>수정</button>
        </div>      
      </div>
    </div>
  );
}

export default ComBFun;