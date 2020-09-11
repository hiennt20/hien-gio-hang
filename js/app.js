/* Comment theo class hoặc function
 function trong react đại diện cho 1 Comment phải viết hoa cả chữ cái đầu tiên luôn
numberItems={true} là thuộc tính, nhận bất cứ giá trị nào

*/

const PRODUCTS = [
  {
    id: 1,
    name: "Product 1",
    description: "Description 1",
    image: "https://via.placeholder.com/200x150",
    price: 2,
    quantity: 15,
  },
  {
    id: 2,
    name: "laptop dell",
    description: "Description 2",
    image: "https://via.placeholder.com/200x150",
    price: 5,
    quantity: 10,
  },
];

// tính lại giá trị products

ReactDOM.render(
  <div>
     <CartHeader products={PRODUCTS} title="Shopping Cart 1"></CartHeader>
    {/* <CartHeader numberItems={100} title="Shopping cart 1"></CartHeader> */}
    {/* <CartHeader numberItems={200} title="Shopping cart 2"></CartHeader>
    <CartHeader numberItems={300} title="Shopping cart 3"></CartHeader> */}
   

    <CartProducst
    products={PRODUCTS}

    // // sp1

    //   productsName={PRODUCTS[0].name}
    //   productsDes={PRODUCTS[0].description}
    //   productsImage={PRODUCTS[0].image}
    //   productsPrice={PRODUCTS[0].price}
    //   productsQuan={PRODUCTS[0].quantity}
    //   //  sp2
    //   productsName2={PRODUCTS[1].name}
    //   productsDes2={PRODUCTS[1].description}
    //   productsImage2={PRODUCTS[1].image}
    //   productsPrice2={PRODUCTS[1].price}
    //   productsQuan2={PRODUCTS[1].quantity}
    ></CartProducst>
    <CartCount subTotal={PRODUCTS}></CartCount>
  </div>,

  document.getElementById("root")
);
