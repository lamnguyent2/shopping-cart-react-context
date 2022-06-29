import React, { useContext} from 'react'
import { DataContext } from '../../DataAsm';
import { ref, set } from '@firebase/database';
import Formregister from './Formregister';
import { dbrealtime } from '../../../config/config';

export default function Register() {
    const value = useContext(DataContext)
    const [users] = value.users

    const ss = (Math.max.apply(Math, users.map(function (o) { return o.id; }))) + 1;
    const Register = details => {
        if(details.Fullname===""){
            alert("Vui lòng điền họ và tên!")
        }else if(details.Username===""){
            alert("Vui lòng điền tên đăng nhập!")
        }else if(details.Email===""){
            alert("Vui lòng điền email!")
        }else if(details.Password===""){
            alert("Vui lòng điền mật khẩu!")
        }else{
            users.forEach(gg =>{
                if(details.Username === gg.Username || details.Email === gg.Email){
                    alert("Đã có tài khoản hoặc email!")
                }
                if(details.Username !== gg.Username && details.Email !== gg.Email){
                    set(ref(dbrealtime, `shoppings/users/${ss}`), {
                        id: ss,
                        Fullname: details.Fullname,
                        Username: details.Username,
                        Email: details.Email,
                        Password: details.Password,
                        role:1
                    }).then(() => {
                        window.location.href = "/login"
                    })
                        .catch((error) => {
                            alert(error);
                        });
                }
            })
        }
    }

    return (
        <div>
            <Formregister Register={Register} />
        </div>
    );
}