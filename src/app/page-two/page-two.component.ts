import { Component, OnInit } from '@angular/core';
import data from '../../assets/JSON/pageTwo.json';
import hoverMenuData from '../../assets/JSON/hoverMenu.json';

interface dataObject {
  id: number,
  title: string,
  description: string,
  image: string,
}

interface hoverMenuObject {
  serial: string,
  title: string,
  description: string,
}

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {
  public pageTwoData: dataObject[] = data;
  public hoverMenuData: hoverMenuObject[] = hoverMenuData;
  
  constructor () { }
  
  ngOnInit(): void {
  }

}
