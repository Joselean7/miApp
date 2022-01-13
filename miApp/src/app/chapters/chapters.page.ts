import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.page.html',
  styleUrls: ['./chapters.page.scss'],
})
export class ChaptersPage {

  constructor(private platform: Platform, private file: File, private ft: FileTransfer, private fileOpener: FileOpener,
    private document: DocumentViewer) { }

  openLocalPdf(){
    let filePath = this.file.applicationDirectory + 'www/assets';

    if(this.platform.is('android')){
        let fakeName= Date.now();
        this.file.copyFile(filePath, 'archivo.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then( result => {
          this.fileOpener.open(result.nativeURL, 'aplication/pdf');
        })
    }else{
      const options: DocumentViewerOptions = {
        title: 'Mi Pdf'
      }
      this.document.viewDocument(`${filePath}/archivo.pdf`, 'aplication/pdf', options);
    }
  }
}
