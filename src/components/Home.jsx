import React, {useContext} from 'react';
import { DataContext } from './DataAsm';
import Slider from './layout/slider/Slider';

export default function Home() {
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart

    return (
        <div>
            <Slider />
            <div id="content"> 
                <section className="padding-top-100 padding-bottom-100">
                <div className="container"> 
                    <div className="heading text-center">
                    <h4>Bạn có thể xem thử</h4>
                    <span>Các sản phẩm demo của chúng tôi</span> 
                    </div>
                </div>
                <div className="arrival-block single-img-demos"> 
                    <div className="item"> 
                    <img className="img-1" src="images/item-img-1-1.jpg" alt="" /> 
                    <div className="overlay"> 
                        <div className="position-center-center"> <a href="images/item-img-1-1.jpg" data-lighter><i className="icon-magnifier" /></a> </div>
                    </div>
                    </div>
                    <div className="item"> 
                    <img className="img-1" src="images/item-img-1-2.jpg" alt="" /> 
                    <div className="overlay"> 
                        <div className="position-center-center"> <a href="images/item-img-1-2.jpg" data-lighter><i className="icon-magnifier" /></a> </div>
                    </div>
                    </div>
                    <div className="item"> 
                    <img className="img-1" src="images/item-img-1-3.jpg" alt="" /> 
                    <div className="overlay"> 
                        <div className="position-center-center"> <a href="images/item-img-1-3.jpg" data-lighter><i className="icon-magnifier" /></a> </div>
                    </div>
                    </div>
                    <div className="item"> 
                    <img className="img-1" src="images/item-img-1-4.jpg" alt="" /> 
                    <div className="overlay"> 
                        <div className="position-center-center"> <a href="images/item-img-1-4.jpg" data-lighter><i className="icon-magnifier" /></a> </div>
                    </div>
                    </div>
                    <div className="item"> 
                    <img className="img-1" src="images/item-img-1-5.jpg" alt="" /> 
                    <div className="overlay"> 
                        <div className="position-center-center"> <a href="images/item-img-1-5.jpg" data-lighter><i className="icon-magnifier" /></a> </div>
                    </div>
                    </div>
                    <div className="item"> 
                    <img className="img-1" src="images/item-img-1-6.jpg" alt="" /> 
                    <div className="overlay"> 
                        <div className="position-center-center"> <a href="images/item-img-1-6.jpg" data-lighter><i className="icon-magnifier" /></a> </div>
                    </div>
                    </div>
                    <div className="item"> 
                    <img className="img-1" src="images/item-img-1-7.jpg" alt="" /> 
                    <div className="overlay"> 
                        <div className="position-center-center"> <a href="images/item-img-1-7.jpg" data-lighter><i className="icon-magnifier" /></a> </div>
                    </div>
                    </div>
                    <div className="item"> 
                    <img className="img-1" src="images/item-img-1-8.jpg" alt="" /> 
                    <div className="overlay"> 
                        <div className="position-center-center"> <a href="images/item-img-1-8.jpg" data-lighter><i className="icon-magnifier" /></a> </div>
                    </div>
                    </div>
                </div>
                </section>
                <section className="padding-top-50 padding-bottom-150">
                <div className="container"> 
                    <div className="heading text-center">
                    <h4>sản phẩm mới nhất</h4>
                    </div>
                    <div className="papular-block row single-img-demos"> 
                    {   
                        products.sort((a,b)=>(b.id-a.id)).slice(0,8).map(product =>(
                            <div className="col-md-3" key={product.id}>
                                <div className="item"> 
                                    <div className="item-img"> <img className="img-1" src={`images/${product.images}`} alt="" /> 
                                    <div className="overlay">
                                        <div className="position-center-center">
                                            <div className="inn"><a href={`images/${product.images}`} data-lighter><i className="icon-magnifier" /></a> <button style={{backgroundColor: "Transparent", backgroundRepeat: "no-repeat", border: "none", padding:"10px"}} onClick={() => addCart(product.id)}><i className="icon-basket" /></button> </div>
                                        </div>
                                    </div>
                                    </div> 
                                    <div className="item-name"> <a href={`/product-details/${product.id}`}>{product.title}</a>
                                    </div>
                                    <span className="price">{product.price.toLocaleString("en-GB")} VND</span>
                                </div>
                            </div>
                        ))            
                    }
                    </div>
                </div>
                </section>
                <section className="padding-top-50 padding-bottom-150">
                <div className="container"> 
                    <div className="heading text-center">
                    <h4>sản phẩm xem nhiều</h4>
                    </div>
                    <div className="papular-block row single-img-demos"> 
                    {   
                        products.sort((a,b)=>(b.view-a.view)).slice(0,8).map(product =>(
                            <div className="col-md-3" key={product.id}>
                                <div className="item"> 
                                    <div className="item-img"> <img className="img-1" src={`images/${product.images}`} alt="" /> 
                                    <div className="overlay">
                                        <div className="position-center-center">
                                            <div className="inn"><a href={`images/${product.images}`} data-lighter><i className="icon-magnifier" /></a> <button style={{backgroundColor: "Transparent", backgroundRepeat: "no-repeat", border: "none", padding:"10px"}} onClick={() => addCart(product.id)}><i className="icon-basket" /></button> </div>
                                        </div>
                                    </div>
                                    </div> 
                                    <div className="item-name"> <a href={`/product-details/${product.id}`}>{product.title}</a>
                                    </div>
                                    <span className="price">{product.price.toLocaleString("en-GB")} VND</span>
                                </div>
                            </div>
                        ))            
                    }
                    </div>
                </div>
                </section>
                <section className="padding-top-50 padding-bottom-150">
                <div className="container"> 
                    <div className="heading text-center">
                    <h4>sản phẩm nổi bật</h4>
                    </div>
                    <div className="papular-block row single-img-demos"> 
                    {   
                        products.map(product =>(
                            product.hot===1 ? (
                            <div className="col-md-3" key={product.id}>
                                <div className="item"> 
                                    <div className="item-img"> <img className="img-1" src={`images/${product.images}`} alt="" /> 
                                    <div className="overlay">
                                        <div className="position-center-center">
                                            <div className="inn"><a href={`images/${product.images}`} data-lighter><i className="icon-magnifier" /></a> <button style={{backgroundColor: "Transparent", backgroundRepeat: "no-repeat", border: "none", padding:"10px"}} onClick={() => addCart(product.id)}><i className="icon-basket" /></button> </div>
                                        </div>
                                    </div>
                                    </div> 
                                    <div className="item-name"> <a href={`/product-details/${product.id}`}>{product.title}</a>
                                    </div>
                                    <span className="price">{product.price.toLocaleString("en-GB")} VND</span>
                                </div>
                            </div>
                            ) : ("")
                        ))            
                    }
                    </div>
                </div>
                </section>
                <section className="padding-top-50 padding-bottom-150">
                <div className="container"> 
                    <div className="heading text-center">
                    <h4>sản phẩm bán chạy</h4>
                    </div>
                    <div className="papular-block row single-img-demos"> 
                    {   
                        products.slice(0,7).map(product =>(
                            product.hot===0 ? (
                            <div className="col-md-3" key={product.id}>
                                <div className="item"> 
                                    <div className="item-img"> <img className="img-1" src={`images/${product.images}`} alt="" /> 
                                    <div className="overlay">
                                        <div className="position-center-center">
                                            <div className="inn"><a href={`images/${product.images}`} data-lighter><i className="icon-magnifier" /></a> <button style={{backgroundColor: "Transparent", backgroundRepeat: "no-repeat", border: "none", padding:"10px"}} onClick={() => addCart(product.id)}><i className="icon-basket" /></button> </div>
                                        </div>
                                    </div>
                                    </div> 
                                    <div className="item-name"> <a href={`/product-details/${product.id}`}>{product.title}</a>
                                    </div>
                                    <span className="price">{product.price.toLocaleString("en-GB")} VND</span>
                                </div>
                            </div>
                            ) : ("")
                        ))            
                    }
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
}