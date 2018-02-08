import { Component } from '@angular/core';
import {IonicPage ,  NavController } from 'ionic-angular';
import {HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {
    email:'',
    password:''
  }

  constructor(public navCtrl: NavController , public httpClient : HttpClient ,private storage:Storage) {

  }

  signIn():void{
    let url = '/signIn';
    this.httpClient.post(url,{user:this.user}).subscribe(
      (res)=>{
        if(res['status']==='OK'){
          this.storage.set('user',res['user']);
          this.navCtrl.push('IndexPage');
        }else{
          console.error('登录失败')
        }
      },
      (err)=>{}
      );
  }

  signUpPage():void{
    this.navCtrl.push('SignUpPage');
  }

}
