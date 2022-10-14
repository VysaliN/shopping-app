import React from 'react';
import { useState } from 'react';
import {connect} from 'react-redux';
import {AddProduct} from './actions';
import { RemoveProduct } from './actions';
import "./Card.css"

const Card = ({products,AddProduct,RemoveProduct}) => {
    const [item,setItem] = useState("");
    const submitHandler = async e =>{
        e.preventDefault();
        if(item !== ""){
            await AddProduct({name:item});
            setItem("");
        }
        setItem("");
    }
    return (
        <center>
            <div class="card" style={{"width": "18rem"}}>
                <div class="card-body">
                    <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Add Products" value={item} onChange={e => setItem(e.target.value)}/> <br />
                        <button type="submit" className="btn">
                        Add Product 
                        </button> 
                    </form>
                    <br />
                    {products.map(product => {
                        return(
                            <div className="items">
                            <div className="item"  >{product.name} 
                            <span className="delete" onClick={()=> RemoveProduct(product.name)}>
                            X</span></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </center>
    )
}

const mapStateToProps = (state) =>({
    products: state
})

export default connect(mapStateToProps,{AddProduct,RemoveProduct})(Card);