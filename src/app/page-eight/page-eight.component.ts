import { Component, OnInit } from '@angular/core';
import hoverMenuData from '../../assets/JSON/hoverMenu.json';

interface hoverMenuObject {
  serial: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-page-eight',
  templateUrl: './page-eight.component.html',
  styleUrls: ['./page-eight.component.css']
})
export class PageEightComponent implements OnInit {
  public hoverMenuData: hoverMenuObject[] = hoverMenuData;

  constructor() { }

  ngOnInit(): void {
  }

}
