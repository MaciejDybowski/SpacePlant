import React, { useEffect } from 'react'
import AstroImg from '../images/section-2.png';
import '../style/Section2.scss';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Section2 = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='section-2'>
            <div className='imgbox'>
                <img src={AstroImg} alt='infoAstronauta' />
            </div>
            <div  className='contentbox'>
                <div className='textbox' data-aos="fade-right">
                    <p>O czym jest nasza aplikacja</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin est non magna auctor, ornare elementum arcu semper. Etiam quis dolor nibh. Proin ultrices urna eu odio vestibulum, vitae blandit nisl tincidunt. Aenean euismod nibh et ipsum egestas, a gravida eros fringilla. Phasellus accumsan interdum molestie. Vestibulum cursus quam in quam lacinia faucibus. Ut lacinia, nulla id lacinia finibus, dolor urna elementum nunc, eget accumsan tellus nibh id tortor</span>
                    <button>Czytaj więcej...</button>
                </div>
            </div>

        </div>

    )
}

export default Section2
