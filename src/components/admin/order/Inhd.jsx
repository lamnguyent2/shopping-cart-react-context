import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { dbrealtime } from '../../../config/config';
import { onValue, ref } from '@firebase/database';

export default function Inhd(props) {
    const {id} = useParams();
    const [hd, sethd] = useState([])
    useEffect(()=>{
        onValue(ref(dbrealtime), (snapshot) => {
            const data = snapshot.val().shoppings.orders[id];
            if (data !== null) {
                sethd(data)
            }
        })
    },[id]);
    console.log(hd);
    const prints = ()=>{
        window.print();
    }

    return (
        <div>
            <div id="wrapper" style={{margin: '0 auto', width: '500px'}}>
                <table width="100%" id="inhddd">
                <tbody><tr>
                    <td height={25} valign="top" align="center"><div align="left">
                        <table width="100%">
                            <tbody>
                            <tr>
                                <td width={5} height={95}>&nbsp;</td>
                                <td width={343}><table border={0} cellPadding={0} cellSpacing={0} width="100%">
                                    <tbody>
                                    <tr>
                                        <td><table border={0} cellPadding={0} cellSpacing={0} width="100%">
                                            <tbody>
                                            <tr>
                                                <td colSpan={2}><strong>SHOP BÁN BÀN HOT NHẤT QUẢ ĐẤT</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Địa chỉ</td>
                                                <td>: Phường 12, Gò Vấp, TP.HCM</td>
                                            </tr>
                                            <tr>
                                                <td>Di Động </td>
                                                <td>: 0332073907</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>:lamnvtps11769@fpt.edu.vn</td>
                                            </tr>
                                            </tbody>
                                        </table></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                            </tr>
                            </tbody>
                        </table>
                        </div></td>
                    </tr>
                    <tr>
                    <td width={562} height={25} valign="top" align="center">  <hr />
                        <strong><font color="#FF0000" size={+2}>HÓA ĐƠN XUẤT HÀNG</font></strong></td>
                    </tr>
                    <tr>
                    <td height={54}>                    
                        <div align="left">
                        <b>Thông tin Khách hàng:</b>                  </div>
                        <table width="100%">
                        <tbody><tr>
                            <td width="3%">&nbsp;</td>
                            <td width="34%">Họ tên:</td>
                            <td width="63%"> {hd.Fullname}  </td>
                            </tr>
                            <tr>
                            <td>&nbsp;</td>
                            <td>Địa chỉ :</td>
                            <td>   {hd.Diachihientai}    </td>
                            </tr>
                            <tr>
                            <td>&nbsp;</td>
                            <td>Điện thoại :</td>
                            <td>  0{hd.Sodienthoai}</td>
                            </tr>
                            <tr>
                            <td>&nbsp;</td>
                            <td>Email : </td>
                            <td>   {hd.Email}</td>
                            </tr>
                            <tr>
                            <td>&nbsp;</td>
                            </tr>
                            <tr>
                            <td>&nbsp;</td>
                            </tr>
                        </tbody></table>
                        <br />
                        <span className="style3"><b>Thông tin về đơn đặt hàng : </b></span>
                        <br /><table width="100%" style={{borderCollapse: 'collapse'}}>
                        <tbody>
                            <tr style={{border: '1px solid green'}}>
                            <td colSpan={4} align="left"><div align="right">Tổng giá trị đơn hàng:</div></td>
                            <td style={{marginLeft: '400px'}}>   {hd.Total}</td>
                            </tr>     
                        </tbody></table>
                        <table width={452} border={0} align="right">
                        <tbody><tr>
                            </tr>
                            <tr>
                            <td><div align="center"><strong>Nhân viên Bán hàng</strong></div></td>
                            <td>&nbsp;</td>
                            <td><div align="center"><strong>Khách hàng</strong></div></td>
                            </tr>
                            <tr>
                            <td height={23}><div align="center">(Ký tên +Đóng dấu Công ty)</div></td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            </tr>
                            <tr>
                            <td height={73}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            </tr>
                        </tbody></table>
                        
                        <p>&nbsp;</p>
                        <p><br />
                        </p>
                    </td>
                    </tr>
                </tbody></table>
                <button onClick={()=>prints()}>Bắt đầu in</button>
            </div>
        </div>
    );
}