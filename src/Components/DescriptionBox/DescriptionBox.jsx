import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="description-nav-box">Description</div>
                <div className="description-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform where businesses 
                    and individuals can buy and sell goods and services over the
                    internet. These websites facilitate commercial transactions, 
                    providing a virtual storefront where customers can browse 
                    products or services, make selections, and complete 
                    purchases electronically. E-commerce /websites typically include
                    features such as product catalogs, shopping carts, secure payment
                    gateways, customer accounts, order tracking, and customer service
                    options.</p>
                    <p>E-commerce websites have transformed the retail landscape by providing convenience, a broader range of products, and often competitive pricing for consumers, while offering businesses access to a global market.</p>
            </div>
        </div>
    )
}

export default DescriptionBox
