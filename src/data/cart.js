import { products } from "../Components/Products/products";
import {shippingOptions as shipping} from "./shippingOptions";

export const cart = JSON.parse(localStorage.getItem('cart')) || [];