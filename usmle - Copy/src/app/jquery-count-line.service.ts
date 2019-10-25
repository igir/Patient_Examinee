import { Injectable,InjectionToken } from '@angular/core';
// import {InjectionToken} from "@angular/core";
export let jQueryToken = new InjectionToken('jQuery'); 


@Injectable({
  providedIn: 'root'
})
export class JqueryCountLineService {

  constructor() { }
}
