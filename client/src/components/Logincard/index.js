import React from "react";
import "./style.css";

function Logincard() {
  return (
    <div className="center">

<div className="card">
  <h5 className="card-header">Log In</h5>
  <div className="card-body">
  <form>
  <div className="form-group pt-2">
    <label for="exampleFormControlInput1">User Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Password</label>
    <input type="email" class="form-control mb-2" id="exampleFormControlInput1" />
    <a href="#" className="btn btn-primary mt-4">Go somewhere</a>

  </div>
  </form>
  </div>
</div>

    


  </div>

  );
}

export default Logincard;