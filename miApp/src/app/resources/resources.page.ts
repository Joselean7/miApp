import { Component} from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})
export class ResourcesPage {

  constructor(private iab: InAppBrowser) { }

  openBlank(){
    this.iab.create('http://www.easl.eu/research/our-contributions/clinical-practice-guidelines', '_blank');
    console.log("Se abre en blank");
  }

  openSystem(){
    this.iab.create('http://www.easl.eu/research/our-contributions/clinical-practice-guidelines', '_system');
    console.log("Se abre en System");
  }
}
