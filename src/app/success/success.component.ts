import {Component, OnInit} from '@angular/core';
import {Router, NavigationCancel, ActivatedRoute} from '@angular/router';
import {URLSearchParams,} from '@angular/http';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  collection_id: any;
  collection_status: any;
  payment_type: any;
  order_id: any;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.collection_id = params['collection_id'];
        this.collection_status = params['collection_status'];
        this.payment_type = params['payment_type'];
        this.order_id = params['merchant_order_id'];
      });
  }
}
