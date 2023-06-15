import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-take-photo',
  templateUrl: './take-photo.page.html',
  styleUrls: ['./take-photo.page.scss'],
})
export class TakePhotoPage implements OnInit {
  
  constructor() { }
  ngOnInit() { }

  imageSource : any;
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source : CameraSource.Prompt
    });

    this.imageSource = image.webPath;
  } 
}

// resultType: CameraResultType.DataUrl,
    // resultType: CameraResultType.Base64,
    // this.imageSource = image.dataUrl;
    // this.imageSource = image.base64String;
    // console.log(this.imageSource)