import { Component, OnInit } from '@angular/core';
import data from '../../assets/JSON/hoverMenu.json';
interface dataObject {
  serial: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {
  public hoverMenuData: dataObject[] = data;

  constructor() { }

  ngOnInit(): void {
  }

}
