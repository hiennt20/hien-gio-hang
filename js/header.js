/*
function CartHeader() {
  return (
    <header className="container">
      <h1>Shopping Cart</h1>
      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>
      <span className="count">3 items in the bag</span>
    </header>
  );
}
*/

function CartHeader(props) {
  return (
    <header className="container">
      <h1>{props.title}</h1>
      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>
  <span className="count">{props.products[0].quantity + props.products[1].quantity}</span>
    </header>
  );
}




