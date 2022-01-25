import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  category: string = ""
  products = [{
    _id: "123",
    name: "realme 5 pro",
    url: "https://m.media-amazon.com/images/I/51z4GjHGZjL._SX679_.jpg",
    price: 15000
  }, {
    _id: "123",
    name: "realme 5 pro",
    url: "https://m.media-amazon.com/images/I/51z4GjHGZjL._SX679_.jpg",
    price: 15000
  }, {
    _id: "123",
    name: "realme 5 pro",
    url: "https://m.media-amazon.com/images/I/51z4GjHGZjL._SX679_.jpg",
    price: 15000
  }, {
    _id: "123",
    name: "realme 5 pro",
    url: "https://m.media-amazon.com/images/I/51z4GjHGZjL._SX679_.jpg",
    price: 15000
  }, {
    _id: "123",
    name: "realme 5 pro",
    url: "https://m.media-amazon.com/images/I/51z4GjHGZjL._SX679_.jpg",
    price: 15000
  }, {
    _id: "123",
    name: "realme 5 pro",
    url: "https://m.media-amazon.com/images/I/51z4GjHGZjL._SX679_.jpg",
    price: 15000
  }, {
    _id: "123",
    name: "realme 5 pro",
    url: "https://m.media-amazon.com/images/I/51z4GjHGZjL._SX679_.jpg",
    price: 15000
  }]

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(object => {
      this.category = object.name
    })
  }

  ngOnInit(): void {
  }

  exploreproduct(id: string) { }

  addToCart(id: string) { }

  addWishList(id: string) { }

}
