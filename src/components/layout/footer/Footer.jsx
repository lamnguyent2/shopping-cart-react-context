import React from 'react';

function Footer(props) {
    return (

        <footer style={{maxHeight: "400px"}}>
            <div className="container"> 
                <div className="col-md-6">
                <div className="about-footer"> <img className="margin-bottom-30" src="images/logo-foot.png" alt="" />
                    <p><i className="icon-pointer" /> Phường 12, Gò Vấp, TP.HCM.</p>
                    <p><i className="icon-call-end" />033 207 3907</p>
                    <p><i className="icon-envelope" />lamnvtps11769@fpt.edu.vn</p>
                </div>
                </div>
                <div className="col-md-3">
                <h6>LIÊN KẾT HỮU ÍCH</h6>
                <ul className="link">
                    <li><a href="/products"> Sản phẩm</a></li>
                    <li><a href="https://baya.vn/"> Tìm 1 cửa hàng</a></li>
                    <li><a href="/"> Chính sách bảo mật</a></li>
                    <li><a href="/"> Blog</a></li>
                    <li><a href="/">Danh sách Blog</a></li>
                </ul>
                </div>
                <div className="col-md-3">
                <h6>Cửa hàng</h6>
                <ul className="link">
                    <li><a href="/"> Thông tin</a></li>
                    <li><a href="/productlike"> Sản phẩm yêu thích</a></li>
                    <li><a href="/products"> Sản Phẩm</a></li>
                    <li><a href="/contact"> Liên hệ</a></li>
                    <li><a href="/"> Ủng hộ</a></li>
                </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;