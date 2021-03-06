import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userForm: FormGroup;
  onSubmit(user: User) {
    let newCity = this.userForm.get('city').value;
    let i=0;
    while (i<this.usersService.users.length){
      if (this.usersService.users[i].address.city===newCity){
        return;
      }
      i++;
    }
    user.address.city = newCity;
    this.usersService.saveUser(user).subscribe(
      val => {
        console.log('PUT call successful value returned in body',
          val);
      },
      response => {
        console.log('PUT call in error', response);
      },
      () => {
        console.log('The PUT observable is now completed.');
      }
    );
  }

  private _user: User;
  get user(): User {
    return this._user;
  }
  @Input()
  set user(newUser: User) {
    this._user = newUser;
    if (newUser.name)
    this.buildUserForm(newUser);
  }

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {
  }

  buildUserForm(user: User) {
    this.userForm = this.formBuilder.group({
      'name': new FormControl(user.name),
      'email': new FormControl(user.email),
      'city': new FormControl(user.address.city, Validators.required)
    });
  }
}
