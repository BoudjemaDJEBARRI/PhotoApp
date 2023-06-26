// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class ImageStorageService {
//   storeImage(imageUrl: string): Promise<void> {
//     return new Promise<void>((resolve, reject) => {
//       const request = indexedDB.open('myDatabase', 1);

//       request.onsuccess = (event) => {
//         const db: IDBDatabase = (event.target as any).result;
//         const transaction = db.transaction('images', 'readwrite');
//         const objectStore = transaction.objectStore('images');
//         const request = objectStore.add({ imageUrl });

//         request.onsuccess = () => {
//           resolve();
//         };

//         request.onerror = () => {
//           reject('Error storing image.');
//         };
//       };

//       request.onerror = () => {
//         reject('Failed to open database.');
//       };
//     });
//   }
// }


import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})

export class ImageStorageService {
  private storageKey = 'storedImage';
  private storage1: Storage | null = null;

  constructor(private storage: Storage) {
  }

  storeImage(imageUrl: string | undefined): Promise<void> {
    return this.storage.set(this.storageKey, imageUrl);
  }

  getImage(): Promise<string | null> {
    return this.storage.get(this.storageKey);
  }

  clearImage(): Promise<void> {
    return this.storage.remove(this.storageKey);
  }
}
