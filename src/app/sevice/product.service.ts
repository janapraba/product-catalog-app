import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
  {
    id: 1,
    name: 'Iphone 13',
    category: 'Electronics',
    imageUrl: 'assets/product-item1.jpg',
    price: 980
  },
  {
    id: 2,
    name: 'Iphone 15 pro',
    category: 'Electronics',
    imageUrl: 'assets/product-item2.jpg',
    price: 500
  },
  {
    id: 3,
    name: 'Dell Laptop',
    category: 'Electronics',
    imageUrl: 'assets/product-item3.jpg',
    price: 1200
  },
  {
    id: 4,
    name: 'Baby Boy Maroon Dress',
    category: 'Clothing',
    imageUrl: 'assets/product-item8.jpg',
    price: 700
  },

  {
    id: 5,
    name: 'Pink Anarkali',
    category: 'Clothing',
    imageUrl: 'assets/product-5.jpg',
    price: 1400
  },
  {
    id: 6,
    name: 'Green Frock',
    category: 'Clothing',
    imageUrl: 'assets/product-item5.jpg',
    price: 400
  },
  {
    id: 7,
    name: 'Vivo Laptop',
    category: 'Electronics',
    imageUrl: 'assets/product-item23.jpg',
    price: 600
  },
  {
    id: 8,
    name: 'Maroon babyboy dress',
    category: 'Clothing',
    imageUrl: 'assets/product-item8.jpg',
    price: 1200
  },
  {
    id: 9,
    name: 'Pyjama',
    category: 'Clothing',
    imageUrl: 'assets/product-item9.jpg',
    price: 2000
  },
  {
    id: 10,
    name: 'Lenovo Laptop',
    category: 'Electronics',
    imageUrl: 'assets/product-item10.jpg',
    price: 980
  },
  {
    id: 11,
    name: 'Iphone 12',
    category: 'Electronics',
    imageUrl: 'assets/product-item11.jpg',
    price: 500
  },
  {
    id: 12,
    name: 'Noise Amoled watch',
    category: 'Electronics',
    imageUrl: 'assets/product-item12.jpg',
    price: 1200
  },
  {
    id: 13,
    name: 'HP Laptop',
    category: 'Electronics',
    imageUrl: 'assets/product-item13.jpg',
    price: 700
  },
  {
    id: 14,
    name: 'Girl Baby Pink Frock',
    category: 'Clothing',
    imageUrl: 'assets/product-item14.jpg',
    price: 1400
  },
  {
    id: 15,
    name: 'Acer Laptop',
    category: 'Electronics',
    imageUrl: 'assets/product-item13.jpg',
    price: 2600
  },
  {
    id: 16,
    name: 'Baby boy Outfit',
    category: 'Clothing',
    imageUrl: 'assets/product-item16.jpg',
    price: 600
  },
  {
    id: 17,
    name: 'Girls Green Frock',
    category: 'Clothing',
    imageUrl: 'assets/product-item17.jpg',
    price: 1200
  },
  {
    id: 18,
    name: 'MSI Laptop',
    category: 'Electronics',
    imageUrl: 'assets/product-item18.jpg',
    price: 2000
  },
  {
    id: 19,
    name: 'White Frock',
    category: 'Clothing',
    imageUrl: 'assets/product-item19.jpg',
    price: 980
  },
  {
    id: 20,
    name: 'Pink Frock',
    category: 'Clothing',
    imageUrl: 'assets/product-item20.jpg',
    price: 500
  },
  {
    id: 21,
    name: 'Silver Girl baby Frock',
    category: 'Clothing',
    imageUrl: 'assets/product-item21.jpg',
    price: 1200
  },
  {
    id: 23,
    name: 'Asus Laptop',
    category: 'Electronics',
    imageUrl: 'assets/product-item23.jpg',
    price: 1400
  },
  ];

  getProducts() {
    return this.products;
  }
}
