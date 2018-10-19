import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Noticia } from '../../model/Noticia';
import { NOTICIA } from '../../confi/api.config';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  noticia : Noticia[] = NOTICIA;

  constructor(public navCtrl: NavController) {
  
  }

  click(){
    this.navCtrl.setRoot('NoticiasPage');
  }

  navNoticias(noticia:Noticia){
    this.navCtrl.push("NoticiasPage",{noticia:noticia});
  }
}
