import { Component, OnInit } from '@angular/core';
import { Angular2SwapiService,  People } from 'angular2-swapi';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employess-browser',
  templateUrl: './employess-browser.component.html',
  styleUrls: ['./employess-browser.component.css']
})

export class EmployessBrowserComponent implements OnInit {

  allPeoples$:  Observable<People[]>;
  people$:  Observable<People[]>;
  index2: number;
  isActive: boolean = false;
  
  lightsaberRed='./assets/images/lightsaberRed.png';
  lightsaberBlue='./assets/images/lightsaberBlue.png';
  squere='./assets/images/squere.jpg'
 

  constructor(private _swapi: Angular2SwapiService) { }

  ngOnInit() {
    this.getEmployes();
  }

  getEmployes(){
    this.allPeoples$=this._swapi.getPeople();
  }

  getEmploye(name: string, index: number){
    this.people$ = this._swapi.searchPeople(name);
    this.index2 = index;
  }

  changeIsActive(){
    this.isActive = !this.isActive;
  }
}