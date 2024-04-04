import { defineField, defineType } from "sanity";

export const Product = defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 50,
      },
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Product Title",
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Product Description",
    }),
    defineField({
      name: "price",
      title: "Product Price",
      type: "number",
    }),
    defineField({
      name: "images",
      title: "Product Image",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "category",
      title: "Product Category",
      type: "string",
      options: {
        list: [
          {title: "Headphone", value: "headphone"},
          {title: "Accessories", value: "accessories"},
          {title: "Monitor", value: "monitor"},
        ]
      }
    }),
  ],
});
