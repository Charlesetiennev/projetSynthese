import { Component, OnInit, Input } from '@angular/core';
import { Stagiaire } from '../stagiaire';

@Component({
  selector: 'app-mini-stagiaire-carte',
  templateUrl: './mini-stagiaire-carte.component.html',
  styleUrls: ['./mini-stagiaire-carte.component.sass'],
})
export class MiniStagiaireCarteComponent implements OnInit {
  @Input() stagiaire: Stagiaire;
  constructor() {}

  ngOnInit(): void {}
}
