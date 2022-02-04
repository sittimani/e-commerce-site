import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { serverAddress } from 'src/environments/environment.prod';
import { AddressFormComponent } from '../../components/address-form/address-form.component';
import { Address } from '../interface/address.interface';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  public title: string = ''

  private triggerFormBehaviorSubject: BehaviorSubject<boolean>
  public triggerFormBehaviorSubject$: Observable<boolean>

  private updateAddressSubject: BehaviorSubject<any>
  public updateAddressSubject$: Observable<any>

  constructor(private http: HttpClient, private dialog: MatDialog) {
    this.triggerFormBehaviorSubject = new BehaviorSubject<boolean>(false)
    this.triggerFormBehaviorSubject$ = this.triggerFormBehaviorSubject.asObservable()

    this.updateAddressSubject = new BehaviorSubject<Address>({ address: '', phone: "123" })
    this.updateAddressSubject$ = this.updateAddressSubject.asObservable()
  }

  getMyAddress() {
    return this.http.get<Address[]>(`${serverAddress}getMyAddress`)
  }

  openDialog() {
    return this.dialog.open(AddressFormComponent, {
      width: "390px",
      panelClass: "confirm-dialog-cotainer",
      disableClose: true
    })
  }

  setHeading(title: string) {
    this.title = title
  }

  triggerForm(title: string, value: boolean) {
    this.title = title
    this.triggerFormBehaviorSubject.next(value)
  }

  updateAddress(address: Address) {
    this.updateAddressSubject.next(address)
  }

  updateUserAddress(body: Address) {
    return this.http.put<string>(`${serverAddress}update-address`, body)
  }

  addUserAddress(body: Address) {
    return this.http.post<string>(`${serverAddress}add-address`, body)
  }

  deleteUserAddress(id: string) {
    return this.http.delete<string>(`${serverAddress}delete-address/${id}`)
  }
}
