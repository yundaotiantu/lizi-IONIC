import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  products;

  pno =1 ;

  user:string;

  hasMoreData:boolean =true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams ,
    public httpClient:HttpClient,
    private storage:Storage) {

  }

  ionViewDidLoad() {
    let url = '/products/1';
    this.httpClient.get(url).subscribe(
      res=>{
        this.products = res;
      },
      err=>{
        console.log('err');
      }
    );
    this.storage.get('user').then(value=>{
      this.user = value;
      console.log(value,this.user);
    })
  }

   doInfinite(event):void{
     setTimeout(()=>{
       let url = `/products/${++this.pno}`;
       this.httpClient.get(url).subscribe(
         res=>{
           if(res['length']<20){
             this.hasMoreData = false;
           }else{
             this.products = this.products.concat(res);
           }
         },
         error=>{
           console.log('err');
         }
       )
       event.complete();
     },500)

   };
  productPage(productId):void{
    this.navCtrl.push('ProductPage',{productId:productId});
  }
}
