import { Component, OnInit } from '@angular/core';
import hoverMenuData from '../../assets/JSON/hoverMenu.json';

interface hoverMenuObject {
  serial: string,
  title: string,
  description: string,
}

@Component({
  selector: 'app-page-five',
  templateUrl: './page-five.component.html',
  styleUrls: ['./page-five.component.css']
})
export class PageFiveComponent implements OnInit {
  public hoverMenuData: hoverMenuObject[] = hoverMenuData;

  constructor() { }

  ngOnInit(): void {
  }

}
