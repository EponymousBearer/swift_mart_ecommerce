import MovingProducts from "@/components/MovingProducts";

export default function ProductList() {
  return (
      <section className="pt-16 md:pt-20 2xl:pt-40 w-fullflex flex-col max-w-7xl 2xl:mx-auto mx-4 px-4 md:mx-6 md:px-6 xl:mx-14 xl:px-14 2xl:px-0 2xl:max-w-6xl">
        <h2 className="text-white font-bold text-2xl md::text-3xl mb-8">
          Featured Products
        </h2>  
        <MovingProducts />
      </section>
  );
}
