import React, {useState} from 'react';
import AddIP from './AddIp';
import ShowInputBoxDom from './ShowIp';

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


export default Ip;