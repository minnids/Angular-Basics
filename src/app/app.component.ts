import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string = "From the component";
  random : number = 1.2534535345;
  currentDate:number = Date.now();
  showDiv:boolean = false;
  randowArra:string[] = ['one','one','one'];
  data:any;

  constructor(private _http:HttpClient){
  }

  handleGetData(e:any){
    console.log(e);
  }

  handleClickData(e:any){
    console.log(e);
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.showDiv = true;
    },3000)
    this.getAllPosts();
  }

  getAllPosts(){
    this._http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
      console.log(data);
      this.data = data;
    })
  }
}
