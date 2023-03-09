import { NgForOf, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  listeEmploi=[
    {id:1,libelle:"secretaire",etat:false},
    {id:2,libelle:"vendeur",etat:true},
    {id:3,libelle:"maitresse",etat:true}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  copyList:any []=[];
  somme :any =0;
 calc(){
  this.somme=this.listeEmploi.filter(emploi => emploi.etat==true).length;
}
recherEmploi(emploi : any){
  let l = emploi.target.value;
  this.copyList=this.listeEmploi;
  this.listeEmploi=this.copyList.filter(emploi => {return emploi.libelle.toLowerCase().includes(l.toLowerCase())} );

}
}
