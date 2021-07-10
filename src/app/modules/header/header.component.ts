import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public success: boolean;
  public showFiller = false;

  public scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  constructor() {

    this.success = false;
   }

  ngOnInit(): void {
  }


  mostrarMenu() {
    this.success = true
  }

}
