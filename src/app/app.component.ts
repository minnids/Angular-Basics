import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "From the component";
  handleGetData(e:any){
    console.log(e);
  }
  handleClickData(e:any){
    console.log(e);
  }
}
