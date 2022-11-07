import React from "react";
import { Link } from "react-router-dom";

const Search = ({ search, data, link }) => {
  return (
    <div className="d-flex" style={{ gap: "10px" }}>
      {data
        .filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((product) => {
          return (
            <>
              <div class="col-md-3 mb-4">
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
                    <p class="card-text lead fw-bold">${product.price}</p>
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
    </div>
  );
};

export default Search;
