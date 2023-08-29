import React from "react";
import CartItems from "@/components/CartItems";

export default function cart() {
  // const { userId } = useAuth();
  // const res = await fetch(`http://localhost:3000/api/cart?user_id=${userId}`);
  // const data = await res.json();

  return (
    // <Wrapper>
    //   <section className="px-12 my-16">
    //     <h1 className="font-bold text-2xl">Shopping Cart</h1>

    //     <div className=" flex mt-2 gap-x-10">
    //       <div className="basis-[70%]">
    //         <div>
    //           {data.map((item: any) => (
    //             <div className=" flex p-8 gap-x-8">
    //               <div className=" h-48 w-44">
    //                 <Image
    //                   src={item.image_url} // Use the image URL here
    //                   height={500}
    //                   width={400}
    //                   className="h-full w-full object-cover"
    //                   alt={item.product_title}
    //                 />
    //               </div>
    //               <div className="font-bold w-full ">
    //                 <div className="text-xl font-light flex items-center justify-between">
    //                   <span>{item.product_title}</span>
    //                   <button>
    //                     <Trash2 />
    //                   </button>
    //                 </div>
    //                 <h2 className="mt-5 text-gray-500">Dress</h2>
    //                 <div className="mt-4">Delivery Estimation</div>
    //                 <div className="mt-4 text-yellow-400">5 Working Days</div>
    //                 <div className="mt-4 text-lg flex items-center justify-between">
    //                   <span>$ {item.product_price}</span>
    //                   <div className="font-light">{item.product_quantity}</div>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //       <div className="bg-blue-50 basis-[30%] p-9 space-y-7">
    //         <h2 className="text-xl font-bold">Order Summary</h2>
    //         <div className="text-lg flex">Quantity: {}</div>
    //         <div className="text-lg">Sub Total: </div>
    //         <Button className="text-white w-full py-3">
    //           Proceed To Checkout
    //         </Button>
    //       </div>
    //     </div>
    //   </section>
    // </Wrapper>
    <div>
      <CartItems/>
    </div>
  );
}
