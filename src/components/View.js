import React from 'react'
import '../css/view.css'

const View = (props) => {
    const { price, title, thumbnail, permalink } = props.item

    return (
        <div className='image-container'>
            <img className='image-product' src={thumbnail} alt='img' />
            <figcaption>
                <h3 className='price'>$ {price}</h3>
                <span className='title'>{title}</span>
                <a className='link' href={permalink} target='_blank'>Ir a la página</a>
            </figcaption>
        </div>
    )
}

export default View