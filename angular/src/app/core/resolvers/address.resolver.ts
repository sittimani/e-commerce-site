import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddressService } from 'src/app/user-actions/shared/services/address.service';

@Injectable({
  providedIn: 'root'
})
export class AddressResolver implements Resolve<any> {
  constructor(private addressService: AddressService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.addressService.getMyAddress()
  }
}
