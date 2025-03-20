import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  saveItem(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  getItem(key: string) {
    let data = JSON.parse(localStorage.getItem(key)!);
   return data;
  }
}
