import React from "react";

export const Home = () => {
  return (
    <>
      <div class="card-group">
        <div class="card m-5">
          <img
            style={{ width: "200px" }}
            src="https://th.bing.com/th/id/OIP.CRBBGZZzyJGhWrt1kCbRQQHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">I-Phone</h5>
            <p class="card-text">Price $1000</p>
          </div>
          <div>
            <button type="button" class="btn btn-primary">
              Primary
            </button>
          </div>
        </div>

        <div class="card" style={{ top: "50px", right: "50px" }}>
          <img
            style={{ width: "100px" }}
            src="https://th.bing.com/th/id/OIP.CEVGNeo6IAM6fzKAE4wpDgHaHa?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
    </>
  );
};

// export default Home;
