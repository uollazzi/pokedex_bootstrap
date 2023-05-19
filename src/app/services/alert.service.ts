import { Injectable } from '@angular/core';
import { Alert } from '../models/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alert?: Alert;

  constructor() { }

  success(...text: string[]) {
    this.alert = { text, type: "success" };
  }

  warning(...text: string[]) {
    this.alert = { text, type: "warning" };
  }

  error(...text: string[]) {
    this.alert = { text, type: "danger" };
  }

  clear() {
    this.alert = undefined;
  }
}
