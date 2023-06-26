// import { Component } from '@angular/core';
// import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {

//   constructor() {}

//   imageSource : any;

//   takePicture = async () => {
//     const image = await Camera.getPhoto({
//       quality: 100,
//       allowEditing: true,
//       resultType: CameraResultType.Uri,
//       source : CameraSource.Prompt
//     });

//     this.imageSource = image.webPath;
//   } 

// }

// Store the image with the ImageStorageService
// if (image && image.webPath) {
    // this.imageStorageService.storeImage(image.webPath);






import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ImageStorageService } from '../image-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imageSource: string | undefined;

  constructor(private imageStorageService: ImageStorageService) { }

  async takePhoto() {
    // Capture de la photo avec la caméra
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt
    });

    // await this.imageStorageService.storeImage(image.webPath);
    this.imageSource = image.webPath;

  }

  async storeImage(imageUrl: any) {
  try {
    await this.imageStorageService.storeImage(imageUrl);
    console.log('Image stored successfully.');
  } catch (error) {
    console.error('Error storing image:', error);
  }
}

}
