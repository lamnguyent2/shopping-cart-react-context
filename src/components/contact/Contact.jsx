import React from 'react';

export default function Contact() {
    const sumds = ()=>{
        alert("Yêu cầu của bạn đã được gửi! \nChúc bạn mua hàng vui vẻ :))")
    }
    return (
        <div id="content"> 
            <section className="contact padding-top-100 padding-bottom-100">
            <div className="container">
                <div className="contact-form">
                <h5>Vui lòng điền vào một số chi tiết</h5>
                <div className="row">
                    <div className="col-md-8"> 
                    <div id="contact_message" className="success-msg"> <i className="fa fa-paper-plane-o" />Cảm ơn. Tin nhắn của bạn đã được gửi</div>
                    <form id="contact_form" className="contact-form" onSubmit={sumds}>
                        <ul className="row">
                        <li className="col-sm-6">
                            <label>Họ và tên *
                            <input type="text" className="form-control" name="name" id="name" required/>
                            </label>
                        </li>
                        <li className="col-sm-6">
                            <label>Email *
                            <input type="email" className="form-control" name="email" id="email" required/>
                            </label>
                        </li>
                        <li className="col-sm-6">
                            <label>Số điện thoại *
                            <input type="number" className="form-control" name="company" id="company" required/>
                            </label>
                        </li>
                        <li className="col-sm-6">
                            <label>Địa chỉ
                            <input type="text" className="form-control" name="website" id="website" required/>
                            </label>
                        </li>
                        <li className="col-sm-12">
                            <label>Lời nhắn 
                            <textarea className="form-control" name="message" id="message" rows={5} required/>
                            </label>
                        </li>
                        <li className="col-sm-12">
                            <button type="submit" value="submit" className="btn" id="btn_submit">GỬI MAIL</button>
                        </li>
                        </ul>
                    </form>
                    </div>
                    <div className="col-md-4">
                    <div className="contact-info">
                        <h6>Địa chỉ củ chúng tôi</h6>
                        <ul>
                        <li> <i className="icon-map-pin" /> Phường 12, Gò Vấp<br />
                            TP.HCM.</li>
                        <li> <i className="icon-call-end" /> 0332073907</li>
                        <li> <i className="icon-envelope" /> <a href="/" target="_blank">lamnguyenxyzt3@gmail.com</a> </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    );
}