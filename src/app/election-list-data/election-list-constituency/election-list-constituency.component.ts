import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ToastrService } from 'ngx-toastr';
import { ElectionListDataStoreService } from '../election-list-data-store.service';

@Component({
  selector: 'app-election-list-constituency',
  templateUrl: './election-list-constituency.component.html',
  styleUrls: ['./election-list-constituency.component.css']
})
export class ElectionListConstituencyComponent implements OnInit {

  constituency:any
  totalVotes = new Map();
  candidateList : string[] = ["Donald Trump", "Hillary Clinton", "Joe Biden", "John F. Kennedy", "Jack Randall"];
  @ViewChild(MatAccordion) accordion: MatAccordion = new MatAccordion();
  
  constructor(private electionService: ElectionListDataStoreService, private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.constituency = this.electionService.csvFileData;

    for(let i=0; i<this.candidateList.length; i++) {
      this.getCandidatePercentage(this.candidateList[i]);
    }
  }

  getCandidatePercentage(candidate: string){
    var totalVotes = 0;
    for(let i=0; i<this.constituency.length; i++){
      for(let j= 0; j<this.constituency[i].candidateDetails.length; j++){
        if(this.constituency[i].candidateDetails[j].candidate == candidate){
          totalVotes += Number(this.constituency[i].candidateDetails[j].votes);
        }
      }      
    }
    this.totalVotes.set(candidate, totalVotes);
  }

  getPercentage(candidate: string, currentVotes: number){
    var percentage = 0;
    switch(candidate){
      case "Donald Trump":
        percentage = (currentVotes/this.totalVotes.get("Donald Trump"))*100;
        break;
      case "Hillary Clinton":
        percentage = (currentVotes/this.totalVotes.get("Hillary Clinton"))*100;
        break;
      case "Joe Biden":
        percentage = (currentVotes/this.totalVotes.get("Joe Biden"))*100;
        break;
      case "John F. Kennedy":
        percentage = (currentVotes/this.totalVotes.get("John F. Kennedy"))*100;
        break;
      case "Jack Randall":
        percentage = (currentVotes/this.totalVotes.get("Jack Randall"))*100;
        break;
    }
    return Math.round(percentage);
  }

}
