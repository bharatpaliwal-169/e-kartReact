import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            // <ProductConsumer>
            //     { value => {
            //         const {
            //             id,
            //             company,
            //             price,
            //             img,
            //             info,
            //             title,
            //             incart
            //         } = value.detailProduct;
            //         return(
            //             <div className='container py-5'>
            //                 <div className='row'>
            //                     <div className='col-10 my-5 mx-auto text-center text-blue' >
            //                         <h1> {title} </h1>
            //                     </div>
            //                 </div>
            //                 <div className='row'>
            //                     <div className='col-10 col-md-6 mx-auto my-3' >
            //                         <img className='img-fluid' src={img} alt ='product image' />
            //                     </div>
            //                     <div className='col-10 col-md-6 mx-auto my-3' >
            //                         <h2> Model : {title} </h2>
            //                         <h4 className='mt-3 mb-2 text-title text-muted'>
            //                             MADE BY : <span className='text-uppercase' > {company} </span> 
            //                         </h4>
            //                         <h4 className='text-blue'>
            //                             <strong>
            //                                 Price : Rs.- {price}
            //                             </strong>
            //                         </h4>
            //                         <p className='font-weight-bold mt-3 mb-0' >
            //                             Some Info About The Product
            //                         </p>
            //                         <p className='text-muted lead'>
            //                             {info}
            //                         </p>
            //                         <div>
            //                             <Link to='/'>
            //                                 <button className='btn-outline-secondary btn-lg' > 
            //                                     Back To Products
            //                                 </button>
            //                             </Link>
                                        
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         )
            //     }}
            // </ProductConsumer>

            <div>
                <h1> Details of products.</h1>
            </div>
        )
    }
}
