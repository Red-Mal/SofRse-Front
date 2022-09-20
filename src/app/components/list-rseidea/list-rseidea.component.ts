import { Component, OnInit } from '@angular/core';
import {GoodPractice} from "../../models/GoodPractice";
import {RseIdeaService} from "../../services/rse-idea.service";

import {DefectiveMateriel} from "../../models/DefectiveMateriel";
import {Other} from "../../models/Other";

@Component({
  selector: 'app-list-rseidea',
  templateUrl: './list-rseidea.component.html',
  styleUrls: ['./list-rseidea.component.css']
})
export class ListRseideaComponent implements OnInit {
  goodPractice:boolean=true;
  defectiveMateriel:boolean=false;
  otheridea:boolean=false;

  goodPractices!:Array<GoodPractice> ;
  defectiveMateriels!:Array<DefectiveMateriel> ;
  otherideas!:Array<Other> ;

  totalRecords!: number;
  cols!: any[];
  loading!: boolean;
  //representatives: Representative[];
  selectAll: boolean = false;
  selectedGoodPractices!: Array<GoodPractice> ;
  constructor(private rseIdeaService: RseIdeaService) { }

  ngOnInit(): void {
    this.loading = true;
    this.loadGoodPractices();
  }
  loadIdeas(){

  }

  loadGoodPractices() {
    this.loading = true;
    setTimeout(() => {
      this.rseIdeaService.getGoodPractices().subscribe(res => {
        this.goodPractices = res;
        console.log(this.goodPractices)
        this.totalRecords = 3;
        this.loading = false;
      })
    }, 1000);
  }

  loadDefectiveMateriels() {
    this.loading = true;

    setTimeout(() => {
      this.rseIdeaService.getDefectiveMateriels().subscribe(res => {
        this.defectiveMateriels = res;
        console.log(this.defectiveMateriels)
        this.totalRecords = 5;
        this.loading = false;
      })
    }, 1000);
  }


  onSelectionChange(value = []) {
    this.selectAll = value.length === this.totalRecords;
    this.selectedGoodPractices = value;
  }

  onSelectAllChange(event:any) {
    const checked = event.checked;

    if (checked) {
      this.rseIdeaService.getGoodPractices().subscribe(res => {
        this.selectedGoodPractices = res;
        this.selectAll = true;
        console.log("onselectAllchange"+res)
      });
    }
    else {
      this.selectedGoodPractices = [];
      this.selectAll = false;
    }
  }

  isGoodPractice() {
    this.goodPractice=true;
    this.defectiveMateriel=false;
    this.otheridea=false;

    return this.goodPractice;
  }

  isDefectiveMat() {
    this.defectiveMateriel=true;
    this.otheridea=false;
    this.goodPractice=false;
    return this.defectiveMateriel;
  }

  isOther() {
    this.otheridea=true;
    this.goodPractice=false;
    this.defectiveMateriel=false;
    return this.otheridea;
  }

}
