import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';

//routes to navigate between components, including the default route and the route for the non existing URL
export const routes: Routes = [
    {path: '', redirectTo: 'usersList', pathMatch: 'full'},
    {path: 'usersList', component: UsersListComponent},
    {path: 'addUser', component:AddUserComponent},
    {path: 'updateUser/:id', component:AddUserComponent},
    {path: '**', redirectTo: 'usersList', pathMatch: 'full'}
];
