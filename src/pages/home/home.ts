import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UDPService } from '../../providers/udp.provider';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private udpService: UDPService;

  constructor(public navCtrl: NavController, platform: Platform) {
    platform.ready().then(readySource => {
      console.log('Platform ready!');
      console.log(`Ready source ${readySource}`);
      if (readySource === 'cordova') {
        this.udpService = new UDPService();    
      }
    });
  }

  sendMulticast() {
    this.udpService.sendUDPMessage('Test', 5000, ['227.55.77.99'], 1000, 1000);
  }

}
