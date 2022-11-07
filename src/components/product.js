import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action/index";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import axios from "axios";
import "./product.css";
import Products from "./Products";
import {MdArrowBack} from "react-icons/md"

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => setProduct(response.data))
        .catch((error) => console.log(error));
    };
    getProduct();
  }, []);

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="300px"
            width="300px"
          />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p className="rating">
            Rating {product.rating && product.rating.rate}
          </p>
          <h3 className="price">${product.price}</h3>
          <p className="description">{product.description}</p>

          <button
            className="add"
            onClick={() => {
              addProduct(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </>
    );
  };
  <Products product={product} />;
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          <ShowProduct />
        </div>
      </div>
      <Link to="/Products">
        <button className="back" title="Click to go Home"><MdArrowBack/></button>
      </Link>
    </div>
  );
};

export default Product;
