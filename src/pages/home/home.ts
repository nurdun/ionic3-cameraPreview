import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@ionic-native/camera-preview';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private cameraPreview: CameraPreview) {

  }

  startCamera() {
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 40,
      y: 40,
      width: window.screen.width-1,
      height: window.screen.height-1,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: false,
      alpha: 1
    };

    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        // alert('message');
        console.log(res);
      },
      (err) => {
        // alert('Failed');
        console.log(err);
    });
  }

  showCamera(){
    this.cameraPreview.show();
  }

  stopCamera(){
    this.cameraPreview.stopCamera();
  }

  takePicture(){
    const pictureOpts: CameraPreviewPictureOptions = {
      width: 1280,
      height: 1280,
      quality: 85
    }

    this.cameraPreview.takePicture(pictureOpts).then(function(imgData){
      console.log('Picture taken');
      (<HTMLInputElement>document.getElementById('previewPicture')).src = 'data:image/jpeg;base64,' + imgData;
    }, (err) => {
      console.log(err);
    });
  }
}
