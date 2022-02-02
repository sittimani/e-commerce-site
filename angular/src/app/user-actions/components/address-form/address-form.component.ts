import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'
import { phoneValidator } from 'src/app/core/validators/phone.validators';
import { color } from 'src/environments/environment.prod';
import { AddressService } from '../../shared/services/address.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {

  addressForm: FormGroup
  color = color
  title = "hello"
  isEditAddress = false

  address = {}


  constructor(private formBuilder: FormBuilder, private matDialog: MatDialogRef<AddressFormComponent>, private addressService: AddressService) {
    this.addressForm = this.formBuilder.group({
      address: ["", [Validators.required]],
      phone: [, [Validators.required, phoneValidator]]
    })
    this.getFormDatas()
  }

  closeDialog() {
    this.matDialog.close()
  }

  getFormDatas() {
    this.title = this.addressService.title
    this.addressService.triggerFormBehaviorSubject$.subscribe(value => {
      this.isEditAddress = value
      if (!this.isEditAddress)
        return this.addressForm.reset()
      this.getFormValue()
    })
  }

  getFormValue() {
    this.addressService.updateAddressSubject$.subscribe(address => {
      this.addressForm.patchValue(address)
      this.address = address
    })
  }


}
