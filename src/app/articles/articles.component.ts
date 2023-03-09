import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  titre="Les articles du jour";
  listeArticles=[
    {titre:"t1",contenu:"c1",auteur:"a1",date:"d1",categorie:"Travail"},
    {titre:"t2",contenu:"c2",auteur:"a2",date:"d2",categorie:"Education"},
    {titre:"t3",contenu:"c3",auteur:"a3",date:"d3",categorie:"cat3"}
  ]
  
}
