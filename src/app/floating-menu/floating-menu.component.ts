import { Component, OnInit } from '@angular/core';
import data from '../../assets/JSON/hoverMenu.json';

interface dataObject {
  serial: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-floating-menu',
  templateUrl: './floating-menu.component.html',
  styleUrls: ['./floating-menu.component.css']
})
export class FloatingMenuComponent implements OnInit {
  public hoverMenuData: dataObject[] = data;

  constructor() { }

  ngOnInit(): void {
  }

}
