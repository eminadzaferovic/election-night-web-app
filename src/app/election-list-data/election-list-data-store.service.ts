import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectionListDataStoreService {

  csvFileData: any;
  dataRetrieved: boolean = false;
  fileUploadCounter: number = 0;
  
  constructor() { }
}
