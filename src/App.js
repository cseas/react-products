import React from "react";
import Product from "./Product";
import productsData from "./productsData"

function App() {
  const productsComponents = productsData.map(
    item => <Product key={item.id} product={item} />);

    return (
      <div>
        {productsComponents}
      </div>
    );
}

export default App;
