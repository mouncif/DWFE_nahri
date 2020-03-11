import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = {
   
    dateCreation: null,
    dateFin:null,
    photo: '',
    email: '',
    profil: '',
    identifiant: '',
  };
  addOperation = true;

  constructor(private userService: UserService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    if (id == undefined) {
      this.addOperation = true;
    } else {
      this.addOperation = false;
      this.buildUserInfo(id);
    }
  }

  buildUserInfo(id){
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

  addUser() {
    this.userService.addUser(this.user).subscribe(res => {
      this.router.navigate(['/users']);
    });
  }

  editUser() {
    this.userService.updateUser(this.user).subscribe(res => {
      this.router.navigate(['/users']);
    });
  }
}
