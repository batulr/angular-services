import { Injectable } from '@angular/core';
import { EmpDet } from './empi';
import { employees } from './employees';

@Injectable({
  providedIn: 'root',
})
export class EmpsuppService {
  getEmpls(): EmpDet[] {
    return employees;
  }
  constructor() {}
}
