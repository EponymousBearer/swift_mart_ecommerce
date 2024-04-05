import Wrapper from "@/components/shared/Wrapper";
import MovingProducts from "@/components/MovingProducts";
import FeaturedList from "@/components/FeaturedList";

export default function ProductList() {
  return (
    <Wrapper>
      <section className="pt-16 md:pt-20 2xl:pt-40 max-w-6xl mx-auto">
        <h2 className="text-white font-bold text-2xl md::text-3xl mb-8">
          Featured Products
        </h2>  
        {/* <FeaturedList /> */}
        <MovingProducts />
      </section>
    </Wrapper>
  );
}
