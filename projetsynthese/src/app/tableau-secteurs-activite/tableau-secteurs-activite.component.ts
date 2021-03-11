import { Component, OnInit } from '@angular/core';
import { SECTEURSACTIVITE } from '../mock-secteurs-activite';

@Component({
  selector: 'app-tableau-secteurs-activite',
  templateUrl: './tableau-secteurs-activite.component.html',
  styleUrls: ['./tableau-secteurs-activite.component.sass'],
})
export class TableauSecteursActiviteComponent implements OnInit {
  secteursActivite: string[] = SECTEURSACTIVITE;

  constructor() {}

  ngOnInit(): void {}
}
