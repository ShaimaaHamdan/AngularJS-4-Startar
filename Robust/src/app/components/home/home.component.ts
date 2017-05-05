import { Component, OnInit } from '@angular/core';
import { User } from '../../models/models';
import { CommonService, NotificationService } from '../../services/services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  list : object[]= []
  loading = false;
  constructor(private commonService: CommonService,
    private notificationService: NotificationService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  testApiWithToken() {
    this.loading = true;
    this.commonService.getAllValues()
      .subscribe(
      data => {
        console.log(data)
        this.list = data;
      },
      error => {
        this.notificationService.error(error);
        this.loading = false;
      });
  }

}
