import React, { useState } from "react";

function ComCFunForm(props) {
  //상태
  const [board, setBoard] = useState({
    btitle: "",
    bcontent: ""
  });

  //함수
  const handleChange = (event) => {
    //방법1
    // setBoard({
    //   ...board, [event.target.name]:event.target.value
    // });

    //방법2
    setBoard((prevBoard) => {
      return {
        ...prevBoard, [event.target.name]:event.target.value
      }
    });
  };
  const handdleAdd = (event) => {
    event.preventDefault();
    console.log(board);
  }

  return (
    <div className="card">
      <div className="card-header">
        ComCFunForm
      </div>
      <div className="card-body">
        <form>
          <div className="form-group row">
            <label htmlFor="btitle" className="col-sm-2 col-form-label">btitle</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="btitle" value={board.btitle} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bcontent" className="col-sm-2 col-form-label">bcontent</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="bcontent" value={board.bcontent} onChange={handleChange}/>
            </div>
          </div>
          <div className="alert alert-success">
            <div>btitle: {board.btitle}</div>
            <div>bcontent: {board.bcontent}</div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 d-flex justify-content-center">
              <button className="btn btn-primary btn-sm mr-2" onClick={handdleAdd}>추가</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ComCFunForm;