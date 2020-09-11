function CartCount(props) {
  let preTotal=props.subTotal[0].price * props.subTotal[0].quantity +
    props.subTotal[1].price * props.subTotal[1].quantity;
    let tax=(preTotal*10)/100;

  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <button type="button" />
      </div>
      <div className="summary">
        <ul>
          <li>
            Subtotal{" "}
            <span>
              $&nbsp; {preTotal}
              {/* {props.subTotal[0].price * props.subTotal[0].quantity +
                props.subTotal[1].price * props.subTotal[1].quantity} */}
            </span>
          </li>
          <li>
            Tax{" "}
            <span>
              $&nbsp;
              {tax}
              {/* {(props.subTotal[0].price * props.subTotal[0].quantity +
                props.subTotal[1].price * props.subTotal[1].quantity) *
                props.tax} */}
            </span>
          </li>
          <li className="total">
            Total <span>$ {preTotal + tax}</span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
}
