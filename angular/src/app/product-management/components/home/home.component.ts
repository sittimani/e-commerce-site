import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isNoCatagory = false
  interval = 6000

  slides = [{'image': "https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/confirm-banner._CB485949149_.gif"}, {'image': "https://images.freekaamaal.com/post_images/1608704571.png"}]

  catagories = [
    {
    name: "somename",
    url: "https://images.freekaamaal.com/post_images/1608704571.png"
  },{
    name: "somename",
    url: "https://images.freekaamaal.com/post_images/1608704571.png"
  },{
    name: "somename",
    url: "https://images.freekaamaal.com/post_images/1608704571.png"
  },{
    name: "somename",
    url: "https://images.freekaamaal.com/post_images/1608704571.png"
  },{
    name: "somename",
    url: "https://images.freekaamaal.com/post_images/1608704571.png"
  },{
    name: "somename",
    url: "https://images.freekaamaal.com/post_images/1608704571.png"
  },{
    name: "somename",
    url: "https://images.freekaamaal.com/post_images/1608704571.png"
  },{
    name: "somename",
    url: "https://images.freekaamaal.com/post_images/1608704571.png"
  },
]

  constructor() { }

  exploreCatagories(name:string) {}

}
