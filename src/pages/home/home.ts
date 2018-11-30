import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IntrolibrasPage } from "../introlibras/introlibras";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


goToOtherPageIntrolibras(){ 
      this.navCtrl.push(IntrolibrasPage);
  }

}
