import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-reactive',
  templateUrl: './signup-reactive.component.html',
  styleUrls: ['./signup-reactive.component.scss']
})
export class SignupReactiveComponent implements OnInit {
  signup:FormGroup;
  constructor(private _fb:FormBuilder) {
    // this.signup = new FormGroup({
    //   fullname : new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    //   email : new FormControl("",[Validators.required])
    // });

    this.signup = this._fb.group({
      fullname : ["",[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      email : ["",[Validators.required,Validators.minLength(5),Validators.maxLength(20)]]
    })
  }
  onSubmit(val:any){
console.log(val);
  }
  ngOnInit(): void {
  }

}
