import React, {useState} from 'react'

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

export default ShowInputBoxDom;