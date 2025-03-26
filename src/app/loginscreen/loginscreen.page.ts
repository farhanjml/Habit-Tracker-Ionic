import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from  '@angular/fire/compat/auth';
import { LoadingController, ToastController, NavController } from  '@ionic/angular';
import { User } from  '../models/user.mode';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {
  user = {} as User;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private nav: NavController
  ) { }

  ngOnInit() {
  }
  gotoSignuppage(){
    this.nav.navigateForward(['signup']);
  }

  async login(user: User){
      if(this.formValidation()) {
      //show loader
      const loader = this.loadingCtrl.create({
       message: 'Please wait...'
      });
      (await loader).present();

      try {
       await this.afAuth
       .signInWithEmailAndPassword(user.email, user.password)
       .then (data => {
         console.log(data);
       //redirect to home page
       this.navCtrl.navigateRoot('slides');
       });
      } catch (e) {
       this.showToast(e);
      }

      //dismis loader
      (await loader).dismiss();
  }
 }

 formValidation(){
  if(!this.user.email){
   this.showToast('Please enter the correct email');
   return false;
  }
  if(!this.user.password){
   this.showToast('Please enter the correct password');
   return false;
  }
  return true;
 }
 showToast(message: string){
  this.toastCtrl.create({
   message,
   duration: 3000
  }).then(toastData => toastData.present());
 }
}
