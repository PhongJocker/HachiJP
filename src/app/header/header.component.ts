import { Component, OnInit } from '@angular/core';
import hoverMenuData from '../../assets/JSON/hoverMenu.json';

interface hoverMenuObject {
  serial: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public hoverMenuData: hoverMenuObject[] = hoverMenuData;

  constructor() { }

  ngOnInit(): void {
  }

}
