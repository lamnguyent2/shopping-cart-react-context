import React, {useState, useContext, useEffect} from 'react'
import { DataContext } from '../../DataAsm';

export default function Header() {
    const value = useContext(DataContext)
    const [cart] = value.cart
    const [Qty, setQuantity] = useState(0)
    const [total, setTotal] = useState(0)
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    useEffect(() =>{
        const getQty = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.count)
            },0)
            setQuantity(res)
        }
        getQty()
    },[cart])

    useEffect(() =>{
        const gettotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.count* item.price)
            },0)
            setTotal(res)
        }
        gettotal()
    },[cart])

    const Logout = () => {
        localStorage.removeItem("dataUser")
        window.location.href="/login";
    }

    return (
        <header>
            <div className="sticky">
                <div className="container"> 
                <div className="logo"> <a href="/"><img className="img-responsive" src="images/logo.png" alt="" /></a> </div>
                <nav className="navbar ownmenu">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-open-btn" aria-expanded="false"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"><i className="fa fa-navicon" /></span> </button>
                    </div>
                    <div className="collapse navbar-collapse" id="nav-open-btn">
                    <ul className="nav">
                        <li> <a href="/">Trang chủ </a> </li>
                        <li> <a href="/products">Sản phẩm</a> </li>
                        <li> <a href="/productlike">Sản phẩm yêu thích</a> </li>
                        <li className="dropdown"> <a href="/" className="dropdown-toggle" data-toggle="dropdown">Xem thêm</a>
                            <ul className="dropdown-menu">
                                <li><a href="/contact">Liên hệ</a></li>
                                <li><a href="/baocao">Báo cáo dự án</a></li>
                            </ul>
                        </li>
                    </ul>
                    </div>
                    <div className="nav-right">
                    <ul className="navbar-right">
                        <li className="dropdown user-acc"> <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="icon-user" /> </a>
                        {(dataUsers) ? (
                            <ul className="dropdown-menu">
                                <li>
                                <h6>Xin chào! {dataUsers.Fullname}</h6>
                                </li>
                                <li><a href={`/profile/${dataUsers.id}`}>Trang cá nhân</a></li>
                                {
                                    (dataUsers.role)=== 0 ? (
                                        <li><a href="/admin-products">Quản trị</a></li>
                                    ):("")
                                }
                                {
                                    <li><button onClick={Logout} style={{width:"300px", height:"50px"}}>Đăng xuất</button></li>
                                }
                            </ul>
                        ) : (
                            <ul className="dropdown-menu">
                                <li><a href="/login">Đăng nhập</a></li>
                                <li><a href="/register">Đăng ký</a></li>
                            </ul>
                        )}
                        </li> 
                        <li className="dropdown user-basket"> <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"><i className="icon-basket-loaded" /> </a>
                        <ul className="dropdown-menu">
                            <li>
                                <h5 className="text-center">Tổng tiền: {total.toLocaleString("en-GB")} VND</h5>
                                <h5 className="text-center">Tổng số lượng: {Qty}</h5>
                            </li>
                            <li className="margin-0">
                            <div className="row">
                                <div className="col-xs-6"> <a href="/cart" className="btn">Xem giỏ hàng</a></div>
                                <div className="col-xs-6 "> <a href="/checkout" className="btn">Thah toán</a></div>
                            </div>
                            </li>
                        </ul>
                        </li>
                        <li className="dropdown"> <button className="search-open" style={{backgroundColor: "Transparent", backgroundRepeat: "no-repeat", border: "none", paddingLeft:"10px", paddingTop:"1px"}}><i className=" icon-magnifier"/></button>
                        <div className="search-inside animated bounceInUp"> <i className="icon-close search-close" />
                            <div className="search-overlay" />
                            <div className="position-center-center">
                            <div className="search">
                                <form>
                                <input type="search" placeholder="Search Shop" />
                                <button type="submit"><i className="icon-check" /></button>
                                </form>
                            </div>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                </nav>
                </div>
            </div>
        </header>
    );
}

