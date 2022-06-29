import React, {useContext} from 'react';
import { dbrealtime } from '../../../config/config';
import { DataContext } from '../../DataAsm';
import { ref, update } from '@firebase/database';

function Productlike() {
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart
    const [like, setLike] = value.like

    const reductions = id => {
        products.forEach(gg =>{
            if(gg.id === id){
                if(gg.like===""){
                    gg.like = "thich";
                    gg.like2="không thích"
                    update(ref(dbrealtime, `shoppings/products/${id}`), {
                        like: gg.like,
                        like2: gg.like2,
                    })
                }else{
                    gg.like = "";
                    gg.like2="thích"
                    update(ref(dbrealtime, `shoppings/products/${id}`), {
                        like: gg.like,
                        like2: gg.like2,
                    })
                }
            }
        })
        setLike([...like])
    }

    const tangviews = id => {
        products.forEach(gg =>{
            if(gg.id === id){
                gg.view+=1
                update(ref(dbrealtime, `shoppings/products/${id}`), {
                    view: gg.view+=1
                })
            }
        })
    }

    return (
        <div>
            <div id="content"> 
            <section className="shop-page padding-top-100 padding-bottom-100">
                <div className="container">
                <div className="item-display">
                    <div className="row">
                    <div className="col-xs-6"> <span className="product-num"></span> </div>
                    <div className="col-xs-6">
                        <div className="pull-right"> 
                        <a href="/" className="grid-style"><i className="icon-grid" /></a> <a href="/" className="list-style"><i className="icon-list" /></a> </div>
                    </div>
                    </div>
                </div>
                <div className="papular-block row single-img-demos"> 
                {   
                    products.map(product =>(
                        product.like==="thich" ? (
                        <div className="col-md-3" key={product.id}>
                            <div className="item"> 
                                <div className="item-img"> <img className="img-1" src={`images/${product.images}`} alt="" /> 
                                <div className="overlay">
                                    <div className="position-center-center">
                                        <div className="inn"><a href={`images/${product.images}`} data-lighter><i className="icon-magnifier" /></a> <button style={{backgroundColor: "Transparent", backgroundRepeat: "no-repeat", border: "none"}} onClick={() => addCart(product.id)}><i className="icon-basket" /></button> <button style={{backgroundColor: "Transparent", backgroundRepeat: "no-repeat", border: "none", padding:"10px"}} onClick={() => reductions(product.id)}><i className="icon-heart" /></button></div>
                                    </div>
                                </div>
                                </div> 
                                <div className="item-name"> <a href={`/product-details/${product.id}`} onClick={() => tangviews(product.id)}>{product.title}</a>
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

export default Productlike;