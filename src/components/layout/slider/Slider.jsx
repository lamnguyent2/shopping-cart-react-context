import React from 'react';
import { Link } from 'react-router-dom';

export default function Slider(props) {
    return (
        <section className="home-slider"> 
            <div className="tp-banner-container">
                <div className="tp-banner">
                <ul>
                    <li data-transition="random" data-slotamount={7} data-masterspeed={300} data-saveperformance="off"> 
                        <img src="images/slide-bg-1.jpg" alt="slider" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" /> 
                        <div className="tp-caption font-playfair sfb tp-resizeme" data-x="left" data-hoffset={0} data-y="center" data-voffset={-200} data-speed={800} data-start={500} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed={300} style={{zIndex: 7, fontSize: '18px', color: '#fff', maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>Sản phẩm mới nhất từ ecoshop</div>
                        <div className="tp-caption sfl font-extra-bold tp-resizeme" data-x="left" data-hoffset={0} data-y="center" data-voffset={-120} data-speed={800} data-start={800} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.07" data-endelementdelay="0.1" data-endspeed={300} style={{zIndex: 6, fontSize: '80px', color: '#2d3a4b', textTransform: 'uppercase', whiteSpace: 'nowrap'}}>8,000,000 VND </div>
                        <div className="tp-caption sfr font-extra-bold tp-resizeme" data-x="left" data-hoffset={0} data-y="center" data-voffset={0} data-speed={800} data-start={800} data-easing="Power3.easeInOut" data-splitin="chars" data-splitout="none" data-elementdelay="0.07" data-endelementdelay="0.1" data-endspeed={300} style={{zIndex: 6, fontSize: '120px', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap', fontFamily:"Arial, Helvetica, sans-serif"}}>đặc sắc </div>
                        <div className="tp-caption sfr font-extra-bold tp-resizeme" data-x="left" data-hoffset={0} data-y="center" data-voffset={110} data-speed={800} data-start={1300} data-easing="Power3.easeInOut" data-splitin="chars" data-splitout="none" data-elementdelay="0.07" data-endelementdelay="0.1" data-endspeed={300} style={{zIndex: 6, fontSize: '120px', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap', fontFamily:"Arial, Helvetica, sans-serif"}}>lôi cuốn </div>
                        <div className="tp-caption lfb tp-resizeme" data-x="left" data-hoffset={0} data-y="center" data-voffset={240} data-speed={800} data-start={2200} data-easing="Power3.easeInOut" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed={300} data-scrolloffset={0} style={{zIndex: 8}}><Link to="/" className="btn">MUA SẮM NGAY</Link> </div>
                    </li>
                    <li data-transition="random" data-slotamount={7} data-masterspeed={300} data-saveperformance="off"> 
                        <img src="images/slide-bg-2.jpg" alt="slider" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" /> 
                        <div className="tp-caption font-playfair sfb tp-resizeme" data-x="center" data-hoffset={0} data-y="center" data-voffset={-150} data-speed={800} data-start={500} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed={300} style={{zIndex: 7, fontSize: '18px', color: '#fff', maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>Sản phẩm mới nhất từ ecoshop</div>
                        <div className="tp-caption sfr font-regular tp-resizeme letter-space-4" data-x="center" data-hoffset={0} data-y="center" data-voffset={-50} data-speed={800} data-start={800} data-easing="Power3.easeInOut" data-splitin="chars" data-splitout="none" data-elementdelay="0.07" data-endelementdelay="0.1" data-endspeed={300} style={{zIndex: 6, fontSize: '78px', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap', fontFamily:"Arial, Helvetica, sans-serif"}}>nhìn vô cùng đẹp</div>
                        <div className="tp-caption sfr font-extra-bold tp-resizeme letter-space-4" data-x="center" data-hoffset={0} data-y="center" data-voffset={60} data-speed={800} data-start={1300} data-easing="Power3.easeInOut" data-splitin="chars" data-splitout="none" data-elementdelay="0.07" data-endelementdelay="0.1" data-endspeed={300} style={{zIndex: 6, fontSize: '140px', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap'}}>trong mùa này </div>
                        <div className="tp-caption sfb font-extra-bold tp-resizeme" data-x="center" data-hoffset={120} data-y="center" data-voffset={200} data-speed={800} data-start={2200} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.07" data-endelementdelay="0.1" data-endspeed={300} style={{zIndex: 6, fontSize: '60px', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap', marginLeft:"300px"}}>9,999,999 VND </div>
                        <div className="tp-caption lfb tp-scrollbelowslider tp-resizeme" data-x="center" data-hoffset={-120} data-y="center" data-voffset={200} data-speed={800} data-start={2200} data-easing="Power3.easeInOut" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed={300} data-scrolloffset={0} style={{zIndex: 8}}><Link to="/" className="btn">MUA SẮM NGAY</Link> </div>
                    </li>
                </ul>
                </div>
            </div>
        </section>
    );
}

