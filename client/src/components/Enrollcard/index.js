import React from "react";
import "./style.css";

function Logincard() {
  return (
    <div className="center">

<div className="border border-secondary">
  <h5 className="card-header">Enroll</h5>
  <div className="card-body">
  <form>
  <div className="form-group">
    <label for="exampleFormControlInput1">First Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Last Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Password</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" />
    <a href="#" className="btn btn-primary mt-4">Submit</a>

  </div>
  </form>
  </div>
</div>

    


  </div>

  );
}

export default Logincard;