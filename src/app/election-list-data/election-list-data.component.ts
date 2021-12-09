import { ElectionListDataStoreService } from './election-list-data-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-election-list-data',
  templateUrl: './election-list-data.component.html',
  styleUrls: ['./election-list-data.component.css']
})
export class ElectionListDataComponent implements OnInit {

  constructor(public electionService: ElectionListDataStoreService) { }

  ngOnInit(): void {
  }

}
