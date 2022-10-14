import React from 'react'
import {connect} from 'react-redux';
import "./Count.css"

const Count= ({products}) => {
    return (
        <div className="main" >
            <center>
            <button type="button" className="button">
            Total Products(
            <span className="length">
                {products.length}
            </span>)
            </button>
            </center>
        </div>
    )
}
const mapStateToProps = state => ({
    products : state
})
export default connect(mapStateToProps)(Count);