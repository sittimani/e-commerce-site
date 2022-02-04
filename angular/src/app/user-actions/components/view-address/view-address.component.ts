import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Item } from 'src/app/shared/shared/interface/item.interface';
import { Address } from '../../shared/interface/address.interface';
import { AddressService } from '../../shared/services/address.service';

@Component({
  selector: 'app-view-address',
  templateUrl: './view-address.component.html',
  styleUrls: ['./view-address.component.css']
})
export class ViewAddressComponent {

  public headers = ['address', 'phone']
  public items: Item[] = []
  isRemoveButton = true

  constructor(private route: ActivatedRoute, private addressService: AddressService, private router: Router, private toastr: ToastrService) {
    console.log("view address loaded")
    this.items = this.route.snapshot.data.address
  }

  removeAddress(id: string) {
    this.addressService.deleteUserAddress(id).subscribe(result => {
      this.toastr.success(result)
      this.getUpdatedAddress()
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
          this.toastr.success(result)
          this.getUpdatedAddress()
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
          this.toastr.success(result)
          this.getUpdatedAddress()
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

  getUpdatedAddress() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate([currentUrl]);
  }
}
