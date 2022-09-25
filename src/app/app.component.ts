import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today: number = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

  public dropdownLink(){
  var dropdown= document.querySelector(".dropdown-btn");
  var i;
  dropdown?.classList.toggle("active");
  dropdown?.nextElementSibling?.classList.toggle("d-block")
  }

}
