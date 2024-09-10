// import { object, string, number, boolean, InferOutput, array } from "valibot";

// export const DraftProductSchema = object({
//   name: string(),
//   price: number(),
// });

// export const ProductsSchema = array(
//   object({
//     id: number(),
//     name: string(),
//     price: number(),
//     availability: boolean(),
//   })
// );

// export type Product = InferOutput<typeof ProductsSchema>;

import { object, string, number, boolean, InferOutput, array } from "valibot";

export const DraftProductSchema = object({
  name: string(),
  price: number(),
});

// Define el esquema para un único producto
export const ProductSchema = object({
  id: number(),
  name: string(),
  price: number(),
  availability: boolean(),
});

// Define el esquema para un array de productos
export const ProductsSchema = array(ProductSchema);

// El tipo Product ahora representa un solo producto
export type Product = InferOutput<typeof ProductSchema>;
