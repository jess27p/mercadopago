import { Component, OnInit } from '@angular/core';
import { Router, NavigationCancel } from '@angular/router';
import { URLSearchParams, } from '@angular/http';

@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.css']
})
export class FailComponent implements OnInit {

  id: any;

  constructor(private route: Router) {

  }

  ngOnInit() {

  }

}
