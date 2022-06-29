import React, { useContext} from 'react';
import { Pie} from 'react-chartjs-2'
import { DataContext } from '../../DataAsm';

export default function Bieudothongke() {
    const value = useContext(DataContext)
    const [products] = value.products
    
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
                        <div className="col-xs-6"> <span className="product-num"> Biểu đồ thống kê</span> </div>
                        <div className="col-xs-6">
                        <div className="pull-right"> 
                            <a href="#." className="grid-style"><i className="icon-grid" /></a> <a href="#." className="list-style"><i className="icon-list" /></a> </div>
                        </div>
                    </div>
                </div>
                    <div className="papular-block row single-img-demos"> 
                    <h3 style={{textAlign: 'center'}}>Biểu đồ thống kê</h3>
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <Pie style={{maxHeight:"400px", marginLeft:"100px"}}
                        data={{
                        labels: products.map(prod=>(
                            [prod.title]
                        )),
                        datasets: [
                            {
                            label: '# of votes',
                            data: products.map(prod=>(
                                [prod.price]
                            )),
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                            ],
                            borderWidth: 1,
                            }
                        ],
                        }}
                        height={400}
                        width={600}
                        options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                            {
                                ticks: {
                                beginAtZero: true,
                                },
                            },
                            ],
                        },
                        legend: {
                            labels: {
                            fontSize: 25,
                            },
                        },
                        }}
                    />
                    <br />
                    <a href="/bangthongke" className="btn btn-danger">Quay lại</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    );
}
