import { Component, OnInit } from '@angular/core';
//Environement
import { environement } from '../../environement';

@Component({
  selector: 'app-action-haut-admin',
  templateUrl: './action-haut-admin.component.html',
  styleUrls: ['./action-haut-admin.component.sass'],
})
export class ActionHautAdminComponent implements OnInit {
  env = environement;
  constructor() {}

  ngOnInit(): void {}
}
