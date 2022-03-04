import { Component, OnInit } from '@angular/core';
import hoverMenuData from '../../assets/JSON/hoverMenu.json';
import data from '../../assets/JSON/pageThree.json';

interface hoverMenuObject {
  serial: string,
  title: string,
  description: string,
}

interface dataObject {
  title: string,
  description: string,
}

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit {
  public hoverMenuData: hoverMenuObject[] = hoverMenuData;
  public pageThreeData: dataObject[] = data;
  public len = this.pageThreeData.length;
  public haft = Math.floor(this.len / 2);

  constructor() { }

  ngOnInit(): void {
  }

}
