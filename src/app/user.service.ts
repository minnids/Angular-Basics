import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {retry, shareReplay, takeUntil, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private data :any ;
  blogDatasets = new Subject();
  constructor(private http :HttpClient) { }

  getAllUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      tap(data=>{
        this.data = data;
        this.blogDatasets.next(data);
      }),
      retry(2),
      shareReplay(1)
    );
  }

  deleteUser(){
    this.data.pop();
  }
}
