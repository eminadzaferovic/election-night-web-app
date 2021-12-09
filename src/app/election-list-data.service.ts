import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { apiUrlRoot } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectionListDataService {

  constructor(private http : HttpClient) {
  }

  public getApiUrl(){
    return `${apiUrlRoot}/`;
  }

  getConstituencyData(fileUploadStatus: number){
    return this.http.get(this.getApiUrl() + `ConstituencyVotes/getVotes/${fileUploadStatus}`);
  }

  postFile(file: File) : Observable<Object>{
    const data: FormData = new FormData();
    data.append('file', file);
    console.log(data);
    return this.http.post(this.getApiUrl() + `ConstituencyVotes/uploadFile`, data);  
  }
}
