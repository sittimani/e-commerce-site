import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/shared/shared/interface/item.interface';
import { Address } from '../../shared/interface/address.interface';
import { AddressService } from '../../shared/services/address.service';

@Component({
  selector: 'app-view-address',
  templateUrl: './view-address.component.html',
  styleUrls: ['./view-address.component.css']
})
export class ViewAddressComponent implements OnInit {

  public headers = ['address', 'phone']
  public items: Item[] = []
  isRemoveButton = true

  constructor(private route: ActivatedRoute, private addressService: AddressService, private router: Router) {
    this.items = this.route.snapshot.data.address
  }

  ngOnInit(): void { }

  removeAddress(id: string) {
    this.addressService.deleteUserAddress(id).subscribe(result => {
      console.log(result)
    })
  }

  updateAddress(id: string) {
    this.addressService.triggerForm("Update Form", true)
    const address = this.getAddress(id)
    this.addressService.updateAddress(<Address><unknown>address)
    this.addressService.openDialog().afterClosed().subscribe((result: Address) => {
      if (this.isValidAddress(result)) {
        result._id = id
        result.userId = address.userId
        this.addressService.updateUserAddress(result).subscribe(result => {
          console.log(result)
        })
      }
    })
  }

  getAddress(id: string) {
    const address = this.items.filter(item => {
      return item._id === id
    })
    return address[0]
  }

  addNewAddress() {
    this.addressService.triggerForm("Add New Address", false)
    this.addressService.openDialog().afterClosed().subscribe((result: Address) => {
      if (this.isValidAddress(result)) {
        this.addressService.addUserAddress(result).subscribe(result => {
         console.log(result)
        })
      }
    })
  }

  isValidAddress(address: Address) {
    if (address === undefined)
      return false
    if (!address) {
      alert("Invalid Form Data")
      return false
    }
    return true
  }
}
