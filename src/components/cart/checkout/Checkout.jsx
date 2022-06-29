import React,{useContext, useState, useEffect} from 'react'
import { DataContext } from '../../DataAsm';
import { ref, set } from '@firebase/database';
import { dbrealtime } from '../../../config/config';

export default function Checkout() {
    const value = useContext(DataContext)
    const [orders] = value.orders;
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0)
    const [quantity, setTQty] = useState(0)
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    useEffect(() =>{
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count)
            },0)
            setTotal(res)
        }
        getTotal()

        const getQty = () => {
            const res = cart.reduce((prevs, items) => {
                return prevs + (items.count)
            },0)
            setTQty(res)
        }
        getQty()

    },[cart])

    const [details, setDetails] = useState({
        Fullname:"",
        Quequan:"",
        Diachihientai:"",
        Sodienthoai:"",
        Email:"",
        Total:""
    })
    const ss = (Math.max.apply(Math, orders.map(function (o) { return o.id; }))) + 1;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(dataUsers){
            if (!details.Quequan || !details.Diachihientai || !details.Sodienthoai) {
                alert("Vui lòng nhập đầy đủ!")
            } else {        
                if(total===0){
                    alert("Bạn chưa mua hàng! Mời bạn mua hàng rồi quay lại đây!")
                }else{
                    set(ref(dbrealtime, `shoppings/orders/${ss}`), {
                        id: ss,
                        Fullname: dataUsers.Fullname,
                        Quequan: details.Quequan,
                        Diachihientai: details.Diachihientai,
                        Sodienthoai: details.Sodienthoai,
                        Email: dataUsers.Email,
                        Total: total
                    }).then(() => {
                        cart.splice(cart)
                        setCart([...cart])                               
                        window.location.href="/" 
                    })
                        .catch((error) => {
                            alert(error);
                        });
                }
            }
        }else{
            if (!details.Fullname || !details.Quequan || !details.Diachihientai || !details.Sodienthoai || !details.Email) {
                alert("Vui lòng nhập đầy đủ!")
            } else {
                if(total===0){
                    alert("Bạn chưa mua hàng! Mời bạn mua hàng rồi quay lại đây!")
                }else{
                    set(ref(dbrealtime, `shoppings/orders/${ss}`), {
                        id: ss,
                        UserName: details.UserName,
                        Quequan: details.Quequan,
                        Diachihientai: details.Diachihientai,
                        Sodienthoai: details.Sodienthoai,
                        Email: details.Email,
                        Total: total
                    }).then(() => {
                        cart.splice(cart)
                        setCart([...cart])                               
                        window.location.href="/" 
                    })
                        .catch((error) => {
                            alert(error);
                        });
                }
            }
        }
    };

    return (
        <div id="content"> 
            <section className="chart-page padding-top-100 padding-bottom-100">
            <div className="container"> 
                <div className="shopping-cart"> 
                <div className="cart-ship-info">
                    <div className="row"> 
                    <div className="col-sm-7">
                        <h6>CHI TIẾT HÓA ĐƠN</h6>
                        {
                            (dataUsers) ? (
                                <form onSubmit={handleSubmit}>
                                    <ul className="row">
                                        <li className="col-md-6">
                                        <label> HỌ VÀ TÊN
                                            <input type="text" name="last-name" onChange={e=>setDetails({...details, Fullname: e.target.value})} value={dataUsers.Fullname} disabled/>
                                        </label>
                                        </li>
                                        <li className="col-md-6"> 
                                        <label>QUÊ QUÁN
                                            <input type="text" name="company" onChange={e=>setDetails({...details, Quequan: e.target.value})} value={details.Quequan} placeholder="quê quán" required/>
                                        </label>
                                        </li>
                                        <li className="col-md-6"> 
                                        <label>*ĐỊA CHỈ HIỆN TẠI
                                            <input type="text" name="address" onChange={e=>setDetails({...details, Diachihientai: e.target.value})} value={details.Diachihientai} placeholder="địa chỉ hiện tại" required/>
                                        </label>
                                        </li>
                                        <li className="col-md-6">
                                        <label>*SỐ ĐIỆN THOẠI
                                            <input type="Number" name="contry-state" onChange={e=>setDetails({...details, Sodienthoai: e.target.value})} value={details.Sodienthoai} placeholder="số điện thoại" required/>
                                        </label>
                                        </li>
                                        <li className="col-md-6">
                                        <label>*ĐỊA CHỈ EMAIL
                                            <input type="text" name="contry-state" onChange={e=>setDetails({...details, Email: e.target.value})} value={dataUsers.Email} disabled/>
                                        </label>
                                        </li>
                                        <li className="col-md-6">
                                        <label> *TỔNG SỐ TIỀN
                                            <input type="Number" name="postal-code" onChange={e=>setDetails({...details, Total: e.target.value})} value={`${total}`} disabled/>
                                        </label>
                                        </li>
                                        <li className="col-md-6">
                                        <button type="submit" className="btn">lưu thông tin</button>
                                        </li>
                                    </ul>
                                </form>
                            ):(
                                <form onSubmit={handleSubmit}>
                                    <ul className="row">
                                        <li className="col-md-6">
                                        <label> HỌ VÀ TÊN
                                            <input type="text" name="last-name" onChange={e=>setDetails({...details, Fullname: e.target.value})} value={details.Fullname} placeholder="họ và tên" required/>
                                        </label>
                                        </li>
                                        <li className="col-md-6"> 
                                        <label>QUÊ QUÁN
                                            <input type="text" name="company" onChange={e=>setDetails({...details, Quequan: e.target.value})} value={details.Quequan} placeholder="quê quán" required/>
                                        </label>
                                        </li>
                                        <li className="col-md-6"> 
                                        <label>*ĐỊA CHỈ HIỆN TẠI
                                            <input type="text" name="address" onChange={e=>setDetails({...details, Diachihientai: e.target.value})} value={details.Diachihientai} placeholder="địa chỉ hiện tại" required/>
                                        </label>
                                        </li>
                                        <li className="col-md-6">
                                        <label>*SỐ ĐIỆN THOẠI
                                            <input type="text" name="contry-state" onChange={e=>setDetails({...details, Sodienthoai: e.target.value})} value={details.Sodienthoai} placeholder="số điện thoại" required/>
                                        </label>
                                        </li>
                                        <li className="col-md-6">
                                        <label>*ĐỊA CHỈ EMAIL
                                            <input type="text" name="contry-state" onChange={e=>setDetails({...details, Email: e.target.value})} value={details.Email} placeholder="email" required/>
                                        </label>
                                        </li>
                                        <li className="col-md-6">
                                        <label> *TỔNG SỐ TIỀN
                                            <input type="text" name="postal-code" onChange={e=>setDetails({...details, Total: e.target.value})} value={`${total}`} disabled/>
                                        </label>
                                        </li>
                                        <li className="col-md-6">
                                        <button type="submit" className="btn">lưu thông tin</button>
                                        </li>
                                    </ul>
                                </form>
                            )
                        }
                        
                        
                    </div>
                    <div className="col-sm-5">
                        <h6>ĐƠN HÀNG CỦA BẠN</h6>
                        <div className="order-place">
                            <div className="order-detail">
                            {
                                cart.map(product =>(                                
                                    <p key={product.id}>{product.title} x {product.count} <span>{(product.price*product.count).toLocaleString("en-GB")} VND</span></p>
                                ))
                            }
                                <p className="all-total">Tổng số lượng <span>{quantity} x sản phẩm</span></p>
                                <p className="all-total">Tổng giá tiền <span>{total} VND</span></p>
                            </div>
                        <div className="pay-meth">
                            <ul>
                            <li>
                                <div className="radio">
                                <input type="radio" name="radio1" id="radio1" defaultValue="option1" defaultChecked />
                                <label htmlFor="radio1"> THANH TOÁN QUA THẺ NGÂN HÀNG / VISA </label>
                                </div>
                            </li>
                            <li>
                                <div className="radio">
                                <input type="radio" name="radio1" id="radio2" defaultValue="option2" />
                                <label htmlFor="radio2"> THANH TOÁN BẰNG TIỀN MẶT</label>
                                </div>
                            </li>
                            <li>
                                <div className="radio">
                                <input type="radio" name="radio1" id="radio4" defaultValue="option4" />
                                <label htmlFor="radio4"> THANH TOÁN QUA PAYPAL </label>
                                </div>
                            </li>
                            </ul> 
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    );
}

