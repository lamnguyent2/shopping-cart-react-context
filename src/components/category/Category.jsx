import React,{useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { dbrealtime } from '../../config/config';
import { DataContext } from '../DataAsm';
import { onValue, ref, update } from '@firebase/database';

export default function Category() {
    const {id} = useParams();
    const value = useContext(DataContext)
    const [productss, setProductss] = useState([])
    const [products] = value.products
    const [catalogs] = value.catalogs
    const addCart = value.addCart
    const [like, setLike] = value.like

    useEffect(()=>{
        onValue(ref(dbrealtime), (snapshot) => {
            const data = snapshot.val().shoppings.products;
            if (data !== null) {
                data.map((dd) => (
                    (dd.idcate === Number(id)) ? (
                        setProductss((ddaraay) => [...ddaraay, dd])
                    ) : ("")
                ))
            }
        })
    }, [id]);
    
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(9)
    const totalPost = productss.length
    const pageNumber = []
    for(let i = 1; i<= Math.ceil(totalPost / postPerPage); i++){
        pageNumber.push(i)
    }

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage

    const paginate = pageNumber => setCurrentPage(pageNumber)

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
        <div id="content"> 
            <section className="shop-page padding-top-100 padding-bottom-100">
            <div className="container">
                <div className="row"> 
                <div className="col-sm-3">
                    <div className="shop-sidebar"> 
                    <h5 className="shop-tittle margin-bottom-30">danh mục</h5>
                    <ul className="shop-cate">
                        {   
                            catalogs.map(catalog =>(
                            <li key={catalog.id}><a href={`/category/${catalog.id}`}> {catalog.namecate} </a></li>
                            ))            
                        }
                    </ul>
                    <div className="side-bnr margin-top-50"> <img className="img-responsive" src="../images/sidebar-bnr.jpg" alt="" />
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
                        <div className="col-xs-6"> <span className="product-num"></span> </div>
                        <div className="col-xs-6">
                        <div className="pull-right"> 
                            <a href="#." className="grid-style"><i className="icon-grid" /></a> <a href="#." className="list-style"><i className="icon-list" /></a> </div>
                        </div>
                    </div>
                    </div>
                    <div className="papular-block row single-img-demos"> 
                    {   
                        productss.slice(indexOfFirstPost, indexOfLastPost).map(product =>(
                            <div className="col-md-4" key={product.id}> 
                                <div className={`item ${product.like}`}> 
                                <div className="item-img"> <img className="img-1" src={`../images/${product.images}`} alt="" />
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
                        ))            
                    }
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
