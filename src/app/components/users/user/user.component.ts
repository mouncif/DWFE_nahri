import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  export class UserComponent implements OnInit {

    private user: User = {
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      
    };
    users :User[] = [];
  
    constructor(private service:UserService) { }
  
    departments = [
      {id: 1 , value:'Dep1'},
      {id: 2, value:'Dep2'},
      {id: 3, value:'Dep3'}
    ];
  
    onClear(){
      this.service.initializeFormGroup();
      this.service.form.reset();
    }
  
    ngOnInit() {
      this.service.findAll();
    }
  
    add(){
      this.service.add(this.user)
      .subscribe((user)=>{
        this.users = [user, ...this.users];
      });
    }
  
    update(){
      this.service.update(this.user).subscribe(()=>this.router.navigateByUrl("/list"));
    }
  
  
   onSubmit()
   {
     if(this.service.form.valid){
       this.user = this.service.form.value;
       if(this.service.form.value.id==null){
         console.log(this.user);
         this.add();
         this.service.form.reset();
  
       } else {
         console.log(this.user);
         this.update();
         this.service.form.reset();
       }
       this.service.initializeFormGroup();
     }
   }
  
  
  }
}
