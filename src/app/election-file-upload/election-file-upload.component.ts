import { ElectionListDataStoreService } from './../election-list-data/election-list-data-store.service';
import { ElectionListDataService } from './../election-list-data.service';
import { Component, OnInit } from '@angular/core';
import { mergeMap, Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-election-file-upload',
  templateUrl: './election-file-upload.component.html',
  styleUrls: ['./election-file-upload.component.css']
})
export class ElectionFileUploadComponent implements OnInit {

  fileUploadStatus = this.electionDataStoreService.fileUploadCounter;
  destory$ = new Subject();

  constructor(private electionDataService: ElectionListDataService, 
    private electionDataStoreService : ElectionListDataStoreService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  getConstituencyData(fileData: any){
    if(fileData.target.files[0].name.includes(".csv")){
      this.fileUploadStatus += 1;
      this.electionDataService.postFile(fileData.target.files[0]).pipe(
        mergeMap(() => {
          this.toastr.info("Data is being processed!");
          return this.electionDataService.getConstituencyData(this.fileUploadStatus);
        }), takeUntil(this.destory$)).subscribe((data) => {
          this.electionDataStoreService.csvFileData = data;
          this.electionDataStoreService.dataRetrieved = true;
        });
    }
    else{
      this.toastr.error("Wrong file format. Uploaded file should be .csv!");
    }
     
      }
    
    

  ngOnDestroy(): void {
    this.destory$.unsubscribe();
  }


}
