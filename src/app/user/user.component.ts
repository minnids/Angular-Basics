import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,OnDestroy {

  constructor(private userService:UserService) { }

  subscribe = new Subject<boolean>()
  subscription:Subscription = new Subscription();

  ngOnInit(): void {
    this.subscribe.next(true);
    this.subscription = this.userService.blogDatasets.pipe(takeUntil(this.subscribe)).subscribe(data=>{
      console.log(data,'From the subsription');
    })
  }

  ngOnDestroy(): void {
    this.subscribe.next(false);
    this.subscription.unsubscribe()
  }
}
