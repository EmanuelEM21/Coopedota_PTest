import { Component } from '@angular/core';
import { User } from '../../interfaces/user';

import { SharedModule } from '../../shared/shared.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {

  constructor(
    private _snackBar: MatSnackBar,
    private _userService: UserService,
  ) {}

  columns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource = new MatTableDataSource<User>();
  loadingData = false;

  //method that automatically execute when the component is called
  ngOnInit(): void {
    this.getUsers();
  }

  //method that use the service responsible for the communication between frontend and backend in order to delete the selected user
  deleteUser(id: number) {
    this.loadingData = true;
    this._userService.deleteUser(id).subscribe(() => {
      this._snackBar.open('The user was deleted', '', {
        duration: 3000,
      });
      this.loadingData = false;
      this.getUsers();
    });
  }

  //method to get all the users stored in the database
  getUsers() {
    this.loadingData = true;
    this._userService.getUsers().subscribe(data => {
      this.loadingData=false;
      this.dataSource.data = data;
    });
  }
}
