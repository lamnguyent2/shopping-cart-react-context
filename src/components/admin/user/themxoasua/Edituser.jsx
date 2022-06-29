import React, { useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { onValue, ref, update } from '@firebase/database';
import { dbrealtime } from '../../../../config/config';

export default function Edituser() {
    let { id } = useParams();
    const [details, setDetails] = useState({
        Fullname: "", 
        Username: "", 
        Email: "",
        Password: "",
        Role: ""
    });
    useEffect(() => {
        onValue(ref(dbrealtime), (snapshot) => {
            const data = snapshot.val().shoppings.users[id];
            if (data !== null) {
                setDetails(data)
            }
        })
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!details.Fullname || !details.Username || !details.Email || !details.role) {
          alert("Vui lòng nhập đầy đủ!")
        } else {
            update(ref(dbrealtime, `shoppings/users/${id}`), {
                Fullname: details.Fullname, 
                Username: details.Username, 
                Email: details.Email,
                Password: details.Password,
                role: details.role
            })
            .then(() => {
                window.location.href = "/admin-users"
            })
                .catch((error) => {
                    alert(error);
                });
                    
        }
    };
    const { Fullname, Username, Email, role }= details

    return (
        <div id="content">
            <section className="shop-page padding-top-100 padding-bottom-100">
                <div className="container">
                    <h2 style={{textAlign:"center"}}>Sửa tài khoản</h2> <br/>
                    <form className="form" onSubmit={handleSubmit} style={{marginLeft:"270px"}}>
                        <div className="container">
                        <label htmlFor="Username"><b>Họ và tên:</b></label><br />
                        <input className="input" type="text" placeholder="Họ và tên" name="Fullname" id="Fullname" onChange={e=>setDetails({...details, Fullname: e.target.value})} value={Fullname || ""}/><br />
                        <label htmlFor="Username"><b>Tên tài khoản:</b></label><br />
                        <input className="input" type="text" placeholder="Tên tài khoản" name="Username" id="Username" onChange={e=>setDetails({...details, Username: e.target.value})} value={Username || ""}/><br />
                        <label htmlFor="Username"><b>Email:</b></label><br />
                        <input className="input" type="email" placeholder="Email" name="Email" id="Email" onChange={e=>setDetails({...details, Email: e.target.value})} value={Email || ""}  /><br />
                        <label htmlFor="Username"><b>Loại sản phẩm:</b></label><br />
                        <select name="role" id="role"  className="input" onChange={e=>setDetails({...details, role: e.target.valueAsNumber || role })} value={role}>
                                <option value="0" >Admin</option>
                                <option value="1" >Khách hàng</option>
                        </select>
                        <br />
                        <button type="submit"  className="button">Sửa</button>
                        </div>
                    </form>
                </div>
            </section>
            
        </div>
    );
}