import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationService, UserService } from '../../services/services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent  {

  model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private notificationService: NotificationService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.notificationService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.notificationService.error(error);
                    this.loading = false;
                });
    }
}
