import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}
  closeModal() {
    this.modalCtrl.dismiss();
  }
}
