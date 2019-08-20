import React from 'react';

function AddIP(props) {
    const deleteData = (d) => {
        props.deleteData(d)
    }
    return (
        <div>
            {
                props.data.map((e,i) => {
                    return(
                        <div className="card card-signin my-5" key={i}>
                            <div className="card-body">
                                <div className="row flex-display">
                                    <div className="col-md-8 form-label-group">
                                        <input type="email" id="i-added-ip" className="form-control" placeholder="Email address" disabled  />
                                        <label htmlFor="i-added-ip" >{e}</label>
                                    </div>
                                    <div className="col-md-1">
                                        <button className="btn btn-lg btn-primary " type="submit" name={i} onClick = {e => {deleteData(e.target.name)}}>-</button>
                                    </div>
                                    <div className="col-md-1"></div>
                                    {
                                        (function(){
                                            if((i+1)===props.data.length && ((props.user == "premium" && props.data.length < 10) || (props.user =="basic" && props.data.length< 5)) ){
                                                return(
                                                    <div className="col-md-1">
                                                        <button className="btn btn-lg btn-primary " type="submit" onClick = {()=>props.action(true)} >+</button>
                                                    </div>
                                                )
                                            }
                                            else{
                                                // props.showInputBox(false);
                                            }
                                        })()
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AddIP;