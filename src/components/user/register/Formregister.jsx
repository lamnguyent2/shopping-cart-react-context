import React, { useState } from 'react';

export default function Formregister({Register}) {
    const [details, setDetails] = useState({Fullname: "",Username: "", Email: "", Password: "", role:1});

    const submitHandlers = e => {
        e.preventDefault();
        Register(details)
    }

    return (
        <div style={{padding:"16px"}}>
            <h2 style={{textAlign:"center"}}>Đăng ký</h2> <br/>
            <form className="form" onSubmit={submitHandlers} style={{marginLeft:"470px"}}>
                <div className="container">
                <label htmlFor="Username"><b>Họ và tên:</b></label><br />
                <input className="input" type="text" placeholder="Username" name="Username" id="Username" onChange={e=>setDetails({...details, Fullname: e.target.value})} value={details.Fullname} /><br />
                <label htmlFor="Username"><b>Tên đăng nhập:</b></label><br />
                <input className="input" type="text" placeholder="Username" name="Username" id="Username" onChange={e=>setDetails({...details, Username: e.target.value})} value={details.Username} /><br />
                <label htmlFor="Username"><b>Email:</b></label><br />
                <input className="input" type="text" placeholder="Username" name="Username" id="Username" onChange={e=>setDetails({...details, Email: e.target.value})} value={details.Email} /><br />
                <label htmlFor="psw"><b>Mật khẩu:</b></label><br />
                <input className="input" type="password" placeholder="Password" name="Password" id="Password" onChange={e=>setDetails({...details, Password: e.target.value})} value={details.Password} /><br />
                <button type="submit"  className="button">Đăng ký</button>
                </div>
            </form>
        </div>
    );
}