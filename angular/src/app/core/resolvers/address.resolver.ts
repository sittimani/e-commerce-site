import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Address } from 'src/app/user-actions/shared/interface/address.interface';
import { AddressService } from 'src/app/user-actions/shared/services/address.service';

@Injectable({
  providedIn: 'root'
})
export class AddressResolver implements Resolve<Address[]> {
  constructor(private addressService: AddressService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Address[]> {
    return this.addressService.getMyAddress()
  }
}
