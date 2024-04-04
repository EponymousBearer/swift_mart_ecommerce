import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
import PromoSection from "@/views/PromoSection";
import Newsletter from "@/views/Newsletter";
import Ps from "@/views/PsSection";
import PreviewCollections from "@/views/PreviewCollecitons";

export default async function Home() {
  return (
    <section className="bg-stone-900">
      <Hero></Hero>
      <ProductList></ProductList>
      <PreviewCollections />
      <Ps></Ps>
      <PromoSection />
    </section>
  );
}
