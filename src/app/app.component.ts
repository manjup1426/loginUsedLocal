import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
 ngOnInit(): void {
  const getLocalData=localStorage.getItem("signUpUsers");
  if(getLocalData!=null){
  this.signUpUsers=JSON.parse(getLocalData);
  }
// console.log(  this.signUpUsers) 
}
 signUpUsers:any[]=[];

 sighUpObj:any={
  userName:'',
  email:'',
  password:''
 };


 loginObj:any={
  userName:'',
  password:''
 };

 signUpData(){
  this.signUpUsers.push(this.sighUpObj);
  console.log(this.signUpUsers)
  localStorage.setItem("signUpUsers", JSON.stringify(this.signUpUsers))
  this.sighUpObj={
    userName:'',
    email:'',
    password:''
      };
 }

 login(){
  const checkData=this.signUpUsers.find(m=>m.userName==this.loginObj.userName && m.password==this.loginObj.password);
  console.log(checkData)
  if(checkData!=undefined){
    alert("Logged In Successfully")
  }else{
    alert("Please Enter The Valid Login Cred")
  }
  this. loginObj={
    userName:'',
    password:''
   };
  
 }
}
