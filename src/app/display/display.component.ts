import { Component, OnInit } from '@angular/core';

import { EmpDet } from '../empi';
import { employees } from '../employees';

import { EmpsuppService } from '../empsupp.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  emps: EmpDet[] = [];

  selectedEmp?: EmpDet;

  onSelect(emps: EmpDet): void {
    this.selectedEmp = emps;
  }

  constructor(private empservice: EmpsuppService) {}

  getEmpls(): void {
    this.emps = this.empservice.getEmpls();
  }

  ngOnInit(): void {
    this.getEmpls();
  }
}
