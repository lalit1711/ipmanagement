import React, {useState} from 'react';
export function LogIn(props){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [typeOfUser, setTypeOfUser] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        typeOfUser.trim() === "" ? alert("Please select the type of User") : setValueToLocal();
    }
    const setValueToLocal = async() => {
        const _data = {
            "name" : name,
            "email" : email,
            "typeOfUser" : typeOfUser
        }
        await localStorage.setItem("userDetails", JSON.stringify(_data));
        props.props.history.push('/ip');
    };

    return(
        <div>
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>
            <form className="form-signin" onSubmit={handleSubmit}>
              <div className="form-label-group">
                <input type="email" id="i-email" className="form-control" placeholder="Email address" required onChange={e => {setEmail(e.target.value)}} autoFocus  />
                <label htmlFor="i-email" >Email address</label>
              </div>

              <div className="form-label-group">
                <input type="text" id="i-name" className="form-control" placeholder="Name" required onChange={e => {setName(e.target.value)}} />
                <label htmlFor="i-name" >Name</label>
              </div>
              <select name="cars" className="custom-select" required onChange = {e => {setTypeOfUser(e.target.value)}}>
                <option defaultValue>Type Of User</option>
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
              </select>
              <hr className="my-4" />
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
              <hr className="my-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default LogIn;