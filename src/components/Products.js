import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Search from "./Search";
import { useSelector } from "react-redux";

const Products = ({ product }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState(true);
  const [search, setSearch] = useState("");
  const [searchTitle, setSearchTitle] = useState(false);

  const state = useSelector((state) => state.handleCart);

  const searchHandle = () => {
    if (search.length > 1) {
      setSearchTitle(true);
    } else if (search.length == 1) {
      setSearchTitle(false);
    } else {
      setSearchTitle(false);
    }
  };

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <center>
          <h2 className="loading">Loading...</h2>
        </center>
      </>
    );
  };

  const filterProduct = (category) => {
    const updatedList = data.filter((x) => x.category === category);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="products">
          <div className="all" onClick={() => setFilter(data)}>
            All
          </div>
          <div className="men" onClick={() => filterProduct("men's clothing")}>
            Men's
          </div>
          <div
            className="women"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's
          </div>
          <div className="jewelery" onClick={() => filterProduct("jewelery")}>
            Jewelery
          </div>
          <div
            className="electronics"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </div>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div class="col-md-3 mb-1 p-2">
                <div class="card h-80 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    height="300px"
                    class="card-img-top"
                    alt={product.title}
                  />
                  <div class="card-body">
                    <h5 class="card-title ">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p class="card-text lead fw-bold text-danger">
                      ${product.price}
                    </p>
                    {link ? (
                      <Link to={`/product/${product.id}`}>
                        <button className="buy">Buy now</button>
                      </Link>
                    ) : (
                      <button>Buy now</button>
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="display">
        <h3>Home</h3>
        <Link to="/cart" product={product}>
          <button className="cartbtn" title="Click to go Cart">
            Cart({state.length})
          </button>
        </Link>
      </div>
      <input
        type="text"
        className="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          searchHandle();
        }}
        placeholder="Search"
      />
      {searchTitle ? (
        <Search search={search} data={data} link={link} />
      ) : (
        <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
      )}
    </div>
  );
};

export default Products;
