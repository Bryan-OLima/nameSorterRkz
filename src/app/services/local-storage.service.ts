import { Injectable } from '@angular/core';
import { Person } from '../modules/home/model/person';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveToLocalStorage(obj: any): void{
    localStorage.setItem('givewayData', JSON.stringify(obj));
  }

  getLocalStorage(): any{
    return localStorage.getItem('givewayData');
  }
}
