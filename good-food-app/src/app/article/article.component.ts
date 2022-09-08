import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  backWithLocation() {
    this.location.back();
  }
}
