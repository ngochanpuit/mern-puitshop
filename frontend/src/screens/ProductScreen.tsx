import { useParams } from 'react-router-dom';
import data from '../data';
export default function ProductScreen() {
  const { slug } = useParams();
  const product = data.products.find((product) => {
    return product.slug === slug;
  });

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h1>{product.name}</h1>
      </div>
      <p>{product.price}</p>
    </div>
  );
}
