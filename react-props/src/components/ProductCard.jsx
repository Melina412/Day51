const ProductCard = (props) => {
  console.log(props);
  return (
    <article className="product-card">
      <img src={props.img} alt="product image" />
      <p>{props.product}</p>
      <p>{props.price}</p>
      <button>BUY NOW</button>
    </article>
  );
};

export default ProductCard;
