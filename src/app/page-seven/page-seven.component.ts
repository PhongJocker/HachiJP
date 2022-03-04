import { Component, OnInit } from '@angular/core';
import hoverMenuData from '../../assets/JSON/hoverMenu.json';
import pageSevenPostData from '../../assets/JSON/pageSevenPost.json';
import pageSevenGridData from '../../assets/JSON/pageSevenGrid.json';

interface pageSevenPostObject {
  title: string;
  description: string;
  image: string;
}

interface pageSevenGridObject {
  title: string;
  image: string;
}

interface hoverMenuObject {
  serial: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-page-seven',
  templateUrl: './page-seven.component.html',
  styleUrls: ['./page-seven.component.css']
})
export class PageSevenComponent implements OnInit {
  public hoverMenuData: hoverMenuObject[] = hoverMenuData;
  public pageSevenPostData: pageSevenPostObject[] = pageSevenPostData;
  public pageSevenGridData: pageSevenGridObject[] = pageSevenGridData;

  constructor() { }

  ngOnInit(): void {
  }

}
