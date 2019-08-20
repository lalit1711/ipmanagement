import React, {useState} from 'react';
import { longStackSupport } from 'q';
export function Ip(props) {
    const _userData = JSON.parse(localStorage.getItem("userDetails"));
    if(_userData == null) props.history.push('/login');
   const [ip_address, addIp] = useState(() => {
       let _data = JSON.parse(localStorage.getItem("ips"));
        return _data == null ? [] : _data;
   });
    
   const [inputBox, showInputBox] = useState(() => {
       return ip_address.length === 0 ? true : false
   });
    let _value = ip_address[0];
   const addIpFromChild = (_ip) => {
       const newIp = [...ip_address, _ip]
        addIp(newIp);
        localStorage.setItem("ips",JSON.stringify(newIp));
   }
   const deleteData = (d) => {
    if(ip_address.length===1){
        showInputBox(true);
    }
    const deletedIp = ip_address.filter((e,i) => {
        return i != d
    })
    addIp(deletedIp);
    localStorage.setItem("ips",JSON.stringify(deletedIp));
};
const logOut = async() => {
    localStorage.setItem("ips",null);
    localStorage.setItem("userDetails", null);
    props.history.push('/login');
}
   
    return(
        <div className="container">
            <button className="float-right my-5 btn btn-lg btn-danger" onClick= { () => {logOut()}}>LogOut</button>
            <div className="row">
                <AddIP data={ip_address} action={showInputBox} deleteData={deleteData} user={_userData.typeOfUser} />
            </div>
            <div className="row">
                <ShowInputBoxDom data={inputBox}  update={addIpFromChild} ip={ip_address} user={_userData.typeOfUser} showInputBox={showInputBox}/>
            </div>
        </div>
    );
}


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

function ShowInputBoxDom(props) {
    const [_ip,addIp] = useState("")
    const isIp = value => (/^(?:(?:^|\.)(?:2(?:5[0-5]|[0-4]\d)|1?\d?\d)){4}$/.test(value) ? true : false);
    if((props.data && ((props.user == "premium" && props.ip.length <= 10) || (props.user =="basic" && props.ip.length<= 5)))){
        const saveIp = () => {
            !isIp(_ip) ? alert("Wrong Format IP") : (() => {
                props.update(_ip);
                addIp("");
                props.showInputBox(false);
            })()
        }
        return(
            <div className="card card-signin">
            <div>
              <div className="row card-body">
                  <div className="form-label-group">
                    <input type="email" id="i-email" className="form-control" value={_ip} placeholder="IP" required onChange= {e => {addIp(e.target.value)}} />
                    <label htmlFor="i-email" >New Ip</label>
                  </div>
              </div>
              <div className="card-body">
                <button className="btn btn-lg btn-primary " type="submit" onClick = {e => {saveIp()}} >Save</button>
              </div>
              </div>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
    
}

export default Ip;