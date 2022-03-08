import { Component, OnInit } from '@angular/core';
import hoverMenuData from '../../assets/JSON/hoverMenu.json';
import pageFourData from '../../assets/JSON/pageFour.json';
import companiesLogoData from '../../assets/JSON/brandLogo.json';

interface HoverMenuObject {
  serial: string,
  title: string,
  description: string,
}

interface logoObject {
  brandName: string;
  brandLogo: string;
}

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.css']
})
export class PageFourComponent implements OnInit {
  public pageFourData = pageFourData;
  public dropMenu = ['アウトドア・旅行用品', 'アウトドア・旅行用品'];
  public hoverMenuData: HoverMenuObject[] = hoverMenuData;
  public companiesLogoData: logoObject[] = companiesLogoData;

  constructor() { }

  ngOnInit(): void {
  }

}
