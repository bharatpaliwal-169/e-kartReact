import React, { Component } from 'react'
import {storeProducts , detailProduct} from './data';

const ProductContext = React.createContext();
//provider
//consumer 

export default class ProductProvider extends Component {
    state={
        // products : storeProducts,
        products : [],
        detailProducts : detailProduct
    };

    componentDidMount(){
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });

        this.setState(()=>{
            return {products: tempProducts}
        });
    }

    handelDetail = ()=> {
        console.log('hello from detail');
    };

    addToCart = ()=>{
        console.log('add to cart');
    };

    render() {
        return (
            <ProductContext.Provider value= {{...this.state,
            handelDetail:this.handelDetail,
            addToCart :this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};