import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})

export class AddUserComponent {
  form: FormGroup;
  id: number;

  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
    });

    //Get the id from the URL
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    //Get the selected user for modification
    if (this.id != 0) {
      this.getUser(this.id);
    }
  }

  //This method gets the users information in case the user is trying to do an update
  getUser(id: number) {
    this._userService.getUser(id).subscribe((data) => {
      this.form.patchValue({
        userName: data.name,
        email: data.email
      })
    });
  }

  //This method get the information about the user and call the service that will communicate with the backend to store the new user
  addUser() {
    const user: User = {
      name: this.form.value.userName,
      email: this.form.value.email,
    };

    //If the case is 0, that means that the user selected the option to add a new user
    if (this.id == 0) {
    this._userService.addUser(user).subscribe((data) => {
      this._snackBar.open('The user was added', '', {
        duration: 3000,
      });
    });
  } else {
    user.id = this.id;
    this._userService.updateUser(this.id, user).subscribe(() => {
      this._snackBar.open('The user was updated', '', {
        duration: 3000,
      });
    })
  }

  //Time out to wait for the user to be saved correctly in the database
    setTimeout(() => {
      this.router.navigate(['/usersList']);
    }, 500);
  }
}
