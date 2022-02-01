import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressService } from '../../shared/services/address.service';

@Component({
  selector: 'app-view-address',
  templateUrl: './view-address.component.html',
  styleUrls: ['./view-address.component.css']
})
export class ViewAddressComponent implements OnInit, AfterViewInit {

  public headers = ['address']
  public items:any = []
  isRemoveButton = true

  constructor(private route: ActivatedRoute)  {
     this.items = this.route.snapshot.data.address
   }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    
  }

  removeAddress(id:string) {}
}
