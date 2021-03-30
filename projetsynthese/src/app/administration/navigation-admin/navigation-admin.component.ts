import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environement } from '../../environement';
@Component({
  selector: 'app-navigation-admin',
  templateUrl: './navigation-admin.component.html',
  styleUrls: ['./navigation-admin.component.sass'],
})
export class NavigationAdminComponent implements OnInit {
  env = environement;
  deconnexion() {
    this.env.connecter = false;
    this.router.navigate(['/']);
  }
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.deconnexion;
    console.log(this.env.statusDeConnexion);
  }
}
