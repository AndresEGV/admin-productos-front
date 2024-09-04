import {safeParse} from 'valibot'
import { DraftProductSchema } from "../types";
import axios from "axios";


type ProductData = {
    [k: string]: FormDataEntryValue;
}

export const addProduct = (data: ProductData) => {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price
        });
        if (result.success) {
            console.log()
        }else{
            throw new Error('Datos no validos')
        }

        console.log(result);
    } catch (error) {
        console.log(error)
    }
}