import React, {useContext, useState} from 'react';
import { DataContext } from '../../DataAsm';
import { ref, remove } from '@firebase/database';
import { dbrealtime } from '../../../config/config';

export default function Showuser() {
    const value = useContext(DataContext)
    const [users] = value.users

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(4)
    const totalPost = users.length
    const pageNumber = []
    for(let i = 1; i<= Math.ceil(totalPost / postPerPage); i++){
        pageNumber.push(i)
    }

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage

    const paginate = pageNumber => setCurrentPage(pageNumber)

    const xoauser = (id) => {
        if (window.confirm("Bạn thực sự muốn xóa tài khoản này?")) {
            remove(ref(dbrealtime, `shoppings/users/${id}`))
            .then(() => {
                window.location.href= "/admin-users";
            })
                .catch((error) => {
                    alert(error);
                });
        }
    };

    return (
        <div id="content"> 
            <section className="shop-page padding-top-100 padding-bottom-100">
            <div className="container">
                <div className="row"> 
                <div className="col-sm-3">
                    <div className="shop-sidebar"> 
                    <h5 className="shop-tittle margin-bottom-30">danh mục</h5>
                    <ul className="shop-cate">
                        <li><a href="/admin-products">Quản trị sản phẩm</a></li>
                        <li><a href="/admin-users">Quản trị tài khoản</a></li>
                        <li><a href="/admin-orders">Quản trị đơn hàng</a></li>
                        <li><a href="/bangthongke">Thống kê</a></li>
                    </ul>
                    <div className="side-bnr margin-top-50"> <img className="img-responsive" src="images/sidebar-bnr.jpg" alt="" />
                        <div className="position-center-center"> <span className="price">299,000 VND</span>
                        <div className="bnr-text" style={{fontSize:"28px"}}>Trông
                            nóng bỏng
                            với
                            phong cách</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-9">
                <div className="item-display">
                    <div className="row">
                        <div className="col-xs-6"> <span className="product-num"> Quản trị tài khoản</span> </div>
                        <div className="col-xs-6">
                        <div className="pull-right"> 
                            <a href="#." className="grid-style"><i className="icon-grid" /></a> <a href="#." className="list-style"><i className="icon-list" /></a> </div>
                        </div>
                    </div>
                </div>
                    <div className="papular-block row single-img-demos"> 
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Họ Tên</th>
                                <th scope="col">Tên tài khoản</th>
                                <th scope="col">Email</th>
                                <th scope="col">Quyền</th>
                                <th scope="col">Tùy chỉnh</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    users.slice(indexOfFirstPost, indexOfLastPost).map(user=>(
                                        <tr key={user.id}>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.Fullname}</td>
                                            <td>{user.Username}</td>
                                            <td>{user.Email}</td>
                                            {
                                                (user.role)===0 ?(
                                                    <td>Admin</td>
                                                ): (
                                                    <td>Khách hàng</td>
                                                )
                                            }
                                            {
                                                (user.role)===0 ?(
                                                    <td><a href={`/edit-users/${user.id}`}><button className="suaxoa" style={{borderRadius:"5px"}}>Sửa</button></a></td>
                                                ): (
                                                    <td><a href={`/edit-users/${user.id}`}><button className="suaxoa" style={{borderRadius:"5px"}}>Sửa</button></a> <button className="suaxoa" onClick={()=>xoauser(user.id)} style={{borderRadius:"5px"}}>Xóa</button></td>
                                                )
                                            }
                                            
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <ul className="pagination">
                        {
                            pageNumber.map(number=>(
                                <li key={number}><button onClick={()=>paginate(number)}>{number}</button></li>
                            ))
                        }
                    </ul>
                </div>
                </div>
            </div>
            </section>
        </div>
    );
}
