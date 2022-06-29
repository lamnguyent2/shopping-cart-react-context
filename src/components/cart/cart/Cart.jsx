import React,{useContext, useState, useEffect} from 'react'
import { DataContext } from '../../DataAsm';

export default function Cart() {
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0)
    const [quantity, setTQty] = useState(0)

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

    const removeProduct = id => {
        if(window.confirm("Bạn thực sự xóa sản phẩm này ra khỏi giỏ?")){
            cart.forEach((item, index) => {
                if(item.id === id){
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
        
    }

    const removeallProduct = () => {
        if(window.confirm("Bạn thực sự xóa tất cả sản phẩm ra khỏi giỏ?")){
            cart.splice(cart)
            setCart([...cart])
        }
    }

    const removeProducts = id => {
            cart.forEach((item, index) => {
                if(item.id === id){
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
    }

    const reduction = id => {
        cart.forEach(item =>{
            if(item.id === id){
                if(item.count<2){
                    removeProducts(item.id)
                }else{
                    item.count -= 1;
                }
            }
        })
        setCart([...cart])
    }

    const increase = id => {
        cart.forEach(item =>{
            if(item.id === id){
                item.count += 1 ;
            }
        })
        setCart([...cart])
    }

    return (
        <div id="content"> 
            <section className="padding-top-100 padding-bottom-100 pages-in chart-page">
            <div className="container"> 
                <div className="shopping-cart text-center">
                <div className="cart-head">
                    <ul className="row">
                    <li className="col-sm-2 text-left">
                        <h6>HÌNH ẢNH</h6>
                    </li>
                    <li className="col-sm-4 text-left">
                        <h6>TÊN</h6>
                    </li>
                    <li className="col-sm-2">
                        <h6>GIÁ TIỀN</h6>
                    </li>
                    <li className="col-sm-1">
                        <h6>SL</h6>
                    </li>
                    <li className="col-sm-2">
                        <h6>TỔNG</h6>
                    </li>
                    <li className="col-sm-1"> </li>
                    </ul>
                </div>
                {
                    cart.map(product =>(
                    <ul className="row cart-details" key={product.id}>
                        <li className="col-sm-6">
                        <div className="media"> 
                            <div className="media-left media-middle"> <a href="/" className="item-img"> <img className="media-object" src={`images/${product.images}`} alt="" style={{maxWidth: "135px"}} /> </a> </div>
                            <div className="media-body">
                            <div className="position-center-center">
                                <h5>{product.title}</h5>
                            </div>
                            </div>
                        </div>
                        </li>
                        <li className="col-sm-2">
                        <div className="position-center-center"> <span className="price">{product.price.toLocaleString("en-GB")} VND</span> </div>
                        </li>
                        <li className="col-sm-1">
                            <div className="position-center-center">
                                <div className="quinty"> 
                                <div className="amount" style={{width:"200px", marginLeft:"-65px"}}>
                                    <button className="count" style={{width: "20px", margin:"10px"}} onClick={() => reduction(product.id)}> - </button>
                                    <span>{product.count}</span>
                                    <button className="count" style={{width: "20px", margin:"10px"}} onClick={() => increase(product.id)}> + </button>
                                </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-sm-2">
                        <div className="position-center-center"> <span className="price">{(product.price*product.count).toLocaleString("en-GB")} VND</span> </div>
                        </li>
                        <li className="col-sm-1">
                        <div className="position-center-center"> <button style={{backgroundColor: "Transparent", backgroundRepeat: "no-repeat", border: "none"}} onClick={() => removeProduct(product.id)}><i className="icon-close" /></button> </div>
                        </li>
                    </ul>
                    ))
                }
                <div className="coupn-btn"> <button className="btn" onClick={() => removeallProduct()}>Xóa Tất Cả</button></div>
                </div>
            </div>
            </section>
            <section className="padding-top-100 padding-bottom-100 light-gray-bg shopping-cart small-cart">
            <div className="container"> 
                <div className="cart-ship-info margin-top-0">
                <div className="row"> 
                    <div className="col-sm-7">
                    <h6>tiện ích</h6>
                    <div className="coupn-btn"> <a href="/" className="btn">Tiếp tục mua sắm</a> <a href="/checkout" className="btn">Thanh toán</a> </div>
                    </div>
                    <div className="col-sm-5">
                    <h6>tổng đơn hàng</h6>
                    <div className="grand-total">
                        <div className="order-detail">
                            <p className="all-total">Tổng số lượng <span> {quantity}</span></p>
                            <p className="all-total">Tổng tiền <span>{total.toLocaleString("en-GB")} VND</span></p>
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

