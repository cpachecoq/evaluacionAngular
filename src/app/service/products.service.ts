import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  lstProducts = []
  constructor() { }

  addProduct(product: Product) { 

    
  }

  getProducts() { 
    return this.lstProducts
  }
}
