import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const LatestProducts = await getLatestProducts()

  return (
    <>
      <ProductList title="Newest arrivals" data={LatestProducts} limit={4} />
    </>
  )
};

export default Homepage;