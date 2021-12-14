import { Component, OnInit, Input } from '@angular/core';
import { EmpDet } from '../empi';
import { employees } from '../employees';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  @Input() emp?: EmpDet;

  constructor() {}

  ngOnInit(): void {}
}
