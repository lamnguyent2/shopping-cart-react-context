import React,{useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { dbrealtime } from '../../../config/config';
import { onValue, ref, set } from '@firebase/database';
import { DataContext } from '../../DataAsm';

export default function Productdetails() {
    const {id} = useParams();
    const value = useContext(DataContext)
    const [comments] = value.comments
    const [productss, setProductss] = useState()
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)
    const [details, setDetails] = useState({
        Fullname: "",
        Email: "",
        Comment: ""
    })

    var today = new Date();
    const h = `0${today.getHours()}`.slice(-2);
    const m = `0${today.getMinutes()}`.slice(-2);
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = h + ":" + m;
    var dateTime = time+' ngày '+date;

    const ss = (Math.max.apply(Math, comments.map(function (o) { return o.id; }))) + 1;
    const handleSubmit = (e) => {
        e.preventDefault();
        if(dataUsers){
            if (!details.Comment) {
                alert("Vui lòng nhập đầy đủ!")
            } else {
                set(ref(dbrealtime, `shoppings/comments/${ss}`), {
                    id: ss,
                    Fullname: dataUsers.Fullname,
                    Email: dataUsers.Email,
                    Comment: details.Comment,
                    idsp:id,
                    Date: dateTime
                }).then(() => {
                    window.location.reload()
                })
                    .catch((error) => {
                        alert(error);
                    });
            }
        }else{
            if (!details.Fullname || !details.Email || !details.Comment) {
                alert("Vui lòng nhập đầy đủ!")
            } else {
                set(ref(dbrealtime, `shoppings/comments/${ss}`), {
                    id: ss,
                    Fullname: details.Fullname,
                    Email: details.Email,
                    Comment: details.Comment,
                    idsp:id,
                    Date: dateTime
                }).then(() => {
                    window.location.reload()
                })
                    .catch((error) => {
                        alert(error);
                    });
            }
        }
    };

    useEffect(()=>{
        onValue(ref(dbrealtime), (snapshot) => {
            const data = snapshot.val().shoppings.products[id];
            if (data !== null) {
                setProductss(data)
            }
        })
    },[id]);

    const addCart = value.addCart

    return (
        <div id="content"> 
            <section className="padding-top-100 padding-bottom-100">
            <div className="container"> 
                <div className="shop-detail">
                    <div className="row" > 
                        <div className="col-md-7"> 
                        <div className="images-slider">
                            <ul className="slides">
                            <li data-thumb={`../images/${productss?.images}`}> <img className="img-responsive" src={`../images/${productss?.images}`} alt="" /> </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-md-5">
                        <h4>{productss?.title}</h4>
                        <span className="price">{productss?.price.toLocaleString("en-GB")} VND</span> 
                        <ul className="item-owner">
                            <li>Designer :<span> Lam Nguyễn</span></li>
                            <li>Danh mục:<span> {productss?.namecates}</span></li>
                        </ul>
                        <p>{productss?.description}</p>
                        <div className="some-info">
                            <ul className="row margin-top-30">
                            <li className="col-xs-4">
                                <div className="quinty"> 
                                <select className="selectpicker">
                                    <option>1</option>
                                </select>
                                </div>
                            </li>

                            <li className="col-xs-6"> <a href="/cart" onClick={() => addCart(productss.id)} className="btn">Thêm giỏ hàng</a> </li>
                            </ul>
                            <div className="inner-info">
                            <h6>SHARE THIS PRODUCT</h6>
                            <ul className="social_icons">
                                <li><a href="/"><i className="icon-social-facebook" /></a></li>
                                <li><a href="/"><i className="icon-social-twitter" /></a></li>
                                <li><a href="/"><i className="icon-social-tumblr" /></a></li>
                                <li><a href="/"><i className="icon-social-youtube" /></a></li>
                                <li><a href="/"><i className="icon-social-dribbble" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="item-decribe"> 
                <ul className="nav nav-tabs animate fadeInUp" data-wow-delay="0.4s" role="tablist">
                    <li role="presentation" className="active"><a href="#descr" role="tab" data-toggle="tab">Bình Luận</a></li>
                    <li role="presentation"><a href="#review" role="tab" data-toggle="tab">List ý kiến</a></li>
                </ul>
                <div className="tab-content animate fadeInUp" data-wow-delay="0.4s"> 
                    <div role="tabpanel" className="tab-pane fade in active" id="descr">
                    <h6 className="margin-t-40">THÊM BÌNH LUẬN</h6>
                    {
                        (dataUsers) ? (
                            <form onSubmit={handleSubmit}>
                                <ul className="row">
                                <li className="col-sm-6">
                                    <label style={{fontSize:"18px"}}> *Họ và tên: {dataUsers.Fullname}
                                    <input type="hidden" onChange={e=>setDetails({...details, Fullname: dataUsers.Fullname})} value={dataUsers.Fullname}/>
                                    </label>
                                </li>
                                <li className="col-sm-6">
                                    <label style={{fontSize:"18px"}}>
                                    <input type="hidden" onChange={e=>setDetails({...details, Email: dataUsers.Email})} value={dataUsers.Email}/>
                                    </label>
                                </li>
                                <li className="col-sm-12">
                                    <label style={{fontSize:"18px"}}> *Bình luận
                                    <textarea onChange={e=>setDetails({...details, Comment: e.target.value})} value={details.Comment} />
                                    </label>
                                </li>
                                <li className="col-sm-6"> 
                                    <div className="stars"> <span></span> </div>
                                </li>
                                <li className="col-sm-6">
                                    <button type="submit" className="btn btn-dark btn-small pull-right no-margin">Đăng bình luận</button>
                                </li>
                                </ul>
                            </form>
                        ):(
                            <form onSubmit={handleSubmit}>
                                <ul className="row">
                                <li className="col-sm-6">
                                    <label style={{fontSize:"18px"}}> *Họ và tên
                                    <input type="text"  placeholder="Họ và tên" onChange={e=>setDetails({...details, Fullname: e.target.value})} value={details.Fullname} />
                                    </label>
                                </li>
                                <li className="col-sm-6">
                                    <label style={{fontSize:"18px"}}> *Email
                                    <input type="email" placeholder="Email" onChange={e=>setDetails({...details, Email: e.target.value})} value={details.Email} />
                                    </label>
                                </li>
                                <li className="col-sm-12">
                                    <label style={{fontSize:"18px"}}> *Bình luận
                                    <textarea onChange={e=>setDetails({...details, Comment: e.target.value})} value={details.Comment} />
                                    </label>
                                </li>
                                <li className="col-sm-6"> 
                                    <div className="stars"> <span></span> </div>
                                </li>
                                <li className="col-sm-6">
                                    <button type="submit" className="btn btn-dark btn-small pull-right no-margin">Đăng bình luận</button>
                                </li>
                                </ul>
                            </form>
                        )
                    }
                    
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="review">
                    {
                        comments.map(comment=>(
                            comment.idsp === id ? (
                                <div className="media">
                                    <div className="media-left"> 
                                    <div className="avatar"> <a href="/"> <img className="media-object" src="../images/avatar-4.jpg" style={{width:"50px", height:"50px"}} alt="" /> </a> </div>
                                    </div>
                                    <div className="media-body">
                                    <p className="font-playfair">“{comment.Comment}”</p>
                                    <h6>{comment.Fullname} <span className="pull-right"> {comment.Date}</span> </h6>
                                    </div>
                                </div>
                            ):("")   
                        ))
                    }
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    );
}