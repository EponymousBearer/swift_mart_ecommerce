import Wrapper from "@/components/shared/Wrapper";
import MovingProducts from "@/components/MovingProducts";
import FeaturedList from "@/components/FeaturedList";

export default function ProductList() {
  return (
    <Wrapper>
      <section className="pt-20">
        <h2 className="text-white font-bold text-3xl mb-8">
          Featured Products
        </h2>
  
        {/* <FeaturedList /> */}
        <MovingProducts />
      </section>
    </Wrapper>
  );
}
