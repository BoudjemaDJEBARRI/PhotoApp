import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-indexed-dbphoto',
  templateUrl: './indexed-dbphoto.page.html',
  styleUrls: ['./indexed-dbphoto.page.scss'],
})
export class IndexedDBPhotoPage implements OnInit {

  imageSource: string | undefined;
  constructor() { }

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Base64, // Use Base64 result type
      source: CameraSource.Prompt
    });

    this.imageSource = 'data:image/jpeg;base64,' + image.base64String;
    this.storeImageInIndexedDB(image.base64String);
  }

  storeImageInIndexedDB(imageData: string | undefined) {
    const request = indexedDB.open('imageDatabase', 1);

    request.onupgradeneeded = (event: any) => {
      const db: IDBDatabase = event.target.result;
      if (!db.objectStoreNames.contains('images')) {
        db.createObjectStore('images', { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = (event: any) => {
      const db: IDBDatabase = event.target.result;
      const transaction = db.transaction('images', 'readwrite');
      const objectStore = transaction.objectStore('images');
      const imageDataObj = { imageData, timestamp: new Date().getTime() };
      const request = objectStore.add(imageDataObj);

      request.onsuccess = () => {
        console.log('Image stored successfully');
      };

      request.onerror = () => {
        console.error('Error storing image');
      };
    };

    request.onerror = () => {
      console.error('Failed to open database');
    };
  }

  ngOnInit() {
  }

}

