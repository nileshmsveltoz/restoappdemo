import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public auth:WebService) { }

  ngOnInit() {
    
  }

}
