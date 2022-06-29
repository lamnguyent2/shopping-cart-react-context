import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { dbrealtime } from '../../../config/config';
import { onValue, ref } from '@firebase/database';
export default function Profile(props) {
    const {id} = useParams()
    const [userss, setuserss] = useState([])
    useEffect(()=>{
        onValue(ref(dbrealtime), (snapshot) => {
            const data = snapshot.val().shoppings.users[id];
            if (data !== null) {
                setuserss(data)
            }
        })
    },[id]);
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)
    return (
        <div className="container profile-container">
            <div className="main-body as1">
                <nav aria-label="breadcrumb" className="main-breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Trang cá nhân</li>
                </ol>
                </nav>
                <div className="row gutters-sm smss">
                <div className="col-md-4 mb-3">
                    <div className="card as2">
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                            {
                                (dataUsers.token) ? (
                                    <img src={dataUsers.img} alt="Admin" className="rounded-circle" width={150} />
                                ) : (
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                                )
                            }
                        
                        <div className="mt-3">
                            {
                                (dataUsers.token) ? (
                                    <b style={{fontSize:"22px"}}>{dataUsers.Fullname}</b>
                                ) : (
                                    <b style={{fontSize:"22px"}}>{userss.Fullname}</b>
                                )
                            }
                            
                            <p>Tài khoản của ECOSHOP</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="card mt-3">
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card mb-3">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Họ tên:</h6>
                        </div>
                            {
                                (dataUsers.token) ? (
                                    <div className="col-sm-9 text-secondary">                  
                                        {dataUsers.Fullname}
                                    </div>
                                ) : (
                                    <div className="col-sm-9 text-secondary">                  
                                        {userss.Fullname}
                                    </div>
                                )
                            }
                        </div>
                        <hr />
                        <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                        </div>
                            {
                                (dataUsers.token) ? (
                                    <div className="col-sm-9 text-secondary">
                                        {dataUsers.Email}
                                    </div>
                                ) : (
                                    <div className="col-sm-9 text-secondary">
                                        {userss.Email}
                                    </div>
                                )
                            }
                        
                        </div>
                        <hr />
                        <div className="row">
                        <div className="col-sm-12">
                            <a className="btn btn-info " href={`/reset-password/${userss.id}`} style={{maxWidth:"280px", maxHeight:"60px" }}>Đổi mật khẩu</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row gutters-sm">
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
