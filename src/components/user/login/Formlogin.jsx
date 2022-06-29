import React, { useState } from 'react';

export default function Formlogin({Login}) {
    const [details, setDetails] = useState({Username: "", Email: "", Password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details)
    }

    return (
        <div style={{padding:"16px"}}>
            <h2 style={{textAlign:"center"}}>Đăng nhập</h2> <br/>
            <form className="form" onSubmit={submitHandler} style={{marginLeft:"470px"}}>
                <div className="container">
                <label htmlFor="Username"><b>Tên đăng nhập: lamnguyenxyzt3 (vô được trang admin)</b></label><br />
                <input className="input" type="text" placeholder="Username" name="Username" id="Username" onChange={e=>setDetails({...details, Username: e.target.value})} value={details.Username} /><br />
                <label htmlFor="psw"><b>Mật khẩu: 111111</b></label><br />
                <input className="input" type="password" placeholder="Password" name="Password" id="Password" onChange={e=>setDetails({...details, Password: e.target.value})} value={details.Password} /><br />
                <a href="/forgot-password">Quên mật khẩu?</a> <br />
                <button type="submit"  className="button">Đăng nhập</button>
                </div>
            </form>
        </div>
    );
}