import React, { useState } from 'react'
import './index.css'

const Slider = () => {
    const [src, setSrc] = useState('https://i.pinimg.com/736x/c7/53/4f/c7534f73a33fc700f987080ea3f589d2.jpg')
    const handleClick = (e) => {
        setSrc(e.target.src)
    }
    return (
        <div>
            <div className='slider_container'>
                <div className='image1'>
                    <img src={src} alt="" />
                </div>
                <div className='image_2_3_4'>
                    <div className='image2' >
                        <img onClick={(e) => handleClick(e)} src="https://i.pinimg.com/736x/7f/55/0c/7f550c22942ea7c5e4b08d37f7eae2f6.jpg" alt="" />
                    </div>

                    <div className='image3' >
                        <img onClick={(e) => handleClick(e)} src="https://i.pinimg.com/736x/f5/5d/2e/f55d2eaf51659c40bf78d9a66e75cff6.jpg" alt="" />
                    </div>
                    <div className='image4'>
                        <img onClick={(e) => handleClick(e)} src="https://i.pinimg.com/736x/c7/53/4f/c7534f73a33fc700f987080ea3f589d2.jpg" alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
