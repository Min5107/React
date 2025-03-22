import ComAFun from "./ComAFun";
import ComBFun from "./ComBFun";

function Exam03UseReducer(props) {
  return (
    <div className="card">
      <div className="card-header">
        Exam03UseReducer
      </div>
      <div className="card-body">
        <ComAFun/>
        <div className="m-3"></div>
        <ComBFun/>
      </div>
    </div>
  );
}

export default Exam03UseReducer;