import { Component, OnInit } from '@angular/core';
import hoverMenuData from '../../assets/JSON/hoverMenu.json';
import pageFourData from '../../assets/JSON/pageFour.json';

interface HoverMenuObject {
  serial: string,
  title: string,
  description: string,
}

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.css']
})
export class PageFourComponent implements OnInit {
  public hoverMenuData: HoverMenuObject[] = hoverMenuData;
  public pageFourData = pageFourData;

  constructor() { }

  ngOnInit(): void {
  }

}
