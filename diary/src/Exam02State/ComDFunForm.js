import React, { useState } from "react";

function ComDFunForm(prop) {
  //상태
  const [user, setUser] = useState({
    userId: "",
    userName: "",
    userPassword: "",
  });

  //함수
  const handleChange = (event) => {
    //방법1
    setUser({
      ...user, [event.target.name]:event.target.value
    });

    setUser((prevUser) => {
        return{
            ...prevUser,
            [event.target.name]: event.target.value
        }
    })

    //방법2
    // setUser((prevUser) => {
    //   return {
    //     ...prevUser, [event.target.name]:event.target.value
    //   }
    // });
  };

  const handdleJoin = (event) => {
    event.preventDefault();
    console.log(user);
  }

  return (
    <div className="card">
      <div className="card-header">
        ComDFunForm
      </div>
      <div className="card-body">
        <form>
          <div className="form-group row">
            <label htmlFor="btitle" className="col-sm-2 col-form-label">User ID</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="userId" value={user.userId} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bcontent" className="col-sm-2 col-form-label">User Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="userName" value={user.userName} onChange={handleChange} autoComplete="username"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bcontent" className="col-sm-2 col-form-label">User Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" name="userPassword" value={user.userPassword} onChange={handleChange} autoComplete="current-password"/>
            </div>
          </div>
          <div className="alert alert-success">
            <div>userId: {user.userId}</div>
            <div>userName: {user.userName}</div>
            <div>userPassword: {user.userPassword}</div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 d-flex justify-content-center">
              <button className="btn btn-primary btn-sm mr-2" onClick={handdleJoin}>가입</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ComDFunForm;