import { Component, OnInit } from '@angular/core';
import hoverMenuData from '../../assets/JSON/hoverMenu.json';

interface hoverMenuObject {
  serial: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-page-six',
  templateUrl: './page-six.component.html',
  styleUrls: ['./page-six.component.css']
})
export class PageSixComponent implements OnInit {
  public hoverMenuData: hoverMenuObject[] = hoverMenuData;

  constructor() { }

  ngOnInit(): void {
  }

}
