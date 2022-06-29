import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../DataAsm';
import Formlogin from './Formlogin';

export default function Login() {
    const value = useContext(DataContext)
    const [users] = value.users

    const [user, setUser] = useState(null);
    const Login = details => {
        if(details.Username===""){
            alert("Vui lòng điền tên đăng nhập!")
        }else if(details.Password===""){
            alert("Vui lòng điền mật khẩu!")
        }else{
            users.forEach(gg =>{
                if(details.Username === gg.Username && details.Password === gg.Password){
                    setUser({
                        Fullname: gg.Fullname,
                        Username: details.Username,
                        Email: gg.Email,
                        Password: details.Pssword,
                        role: gg.role,
                        id: gg.id
                    });
                    console.log(gg);
                    window.location.href="/"
                }
            })
        }
    }
    useEffect(() =>{
        const dataUser =  JSON.parse(localStorage.getItem('dataUser'))
        if(dataUser) setUser(dataUser)
    },[])
 
    useEffect(() =>{
        localStorage.setItem('dataUser', JSON.stringify(user))
    },[user])

    return (
        <div>
            <Formlogin Login={Login} />
            <div className="khoangcacha"></div>
        </div>
    );
}