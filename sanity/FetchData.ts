import { client } from "./lib/client";

export default async function FetchData() {
    const data = await client.fetch(`*[_type == "product"]`);
    return data;
}

export interface IProductImage {
    _type: string;
    _key: string;
    asset: {
      _ref: string;
      url: string;
    };
  }
  
  export interface IProduct {
    _type: string;
    _id: string;
    slug: {
      _type: string;
      current: string;
    };
    title: string;
    description: string;
    price: number;
    images: IProductImage[];
    category: string;
    gender: string;
  }