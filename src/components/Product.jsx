// eslint-disable-next-line react/prop-types
function Product({redLabel, productImage, productTitle, productPrice}) {
    return (
        <article>
            <span>{redLabel}</span>
            <img src={productImage} alt={productTitle}/>
            <p>{productTitle}</p>
            <h4>€{productPrice},-</h4>
        </article>
)
}



export default Product;