import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'custom-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() title :string = "";
  @Input() description:string = "";
  @Input() templateHeader!:TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
