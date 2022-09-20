import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RseIdeaService} from "../../services/rse-idea.service";
import {Router} from "@angular/router";
import {DefectiveMateriel} from "../../models/DefectiveMateriel";
import {GoodPractice} from "../../models/GoodPractice";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-rseideaform',
  templateUrl: './rseideaform.component.html',
  styleUrls: ['./rseideaform.component.css']
})
export class RseideaformComponent implements OnInit {
  newRseIdeaFormGroup!:FormGroup;
  goodPractice:boolean=true;
  defectiveMateriel:boolean=false;
  other:boolean=false;
  constructor(private fb:FormBuilder,private rseIdeaService:RseIdeaService,private router:Router,private http:HttpClient) {

  }

  ngOnInit(): void {


    this.newRseIdeaFormGroup=this.fb.group({
      "email":this.fb.control(""),
      "description":this.fb.control(""),
      "localisation":this.fb.control(""),
      "isParticipated":this.fb.control("")
    })
    console.log(this.goodPractice);
  }

  handleSaveRseIdea() {
    if(this.defectiveMateriel){
      let defectiveMateriel=new DefectiveMateriel();
      defectiveMateriel.email=this.newRseIdeaFormGroup.value.email;
      defectiveMateriel.description=this.newRseIdeaFormGroup.value.description;
      defectiveMateriel.localisation=this.newRseIdeaFormGroup.value.localisation;
      defectiveMateriel.isParticipated=this.newRseIdeaFormGroup.value.isParticipated;
      console.log(defectiveMateriel);
      this.rseIdeaService.saveDefectiveMateriel(defectiveMateriel).subscribe();
    }
    if(this.goodPractice){
      let goodPractice=new GoodPractice();
      goodPractice.email=this.newRseIdeaFormGroup.value.email;
      goodPractice.description=this.newRseIdeaFormGroup.value.description;
      goodPractice.isParticipated=this.newRseIdeaFormGroup.value.isParticipated;
      console.log(goodPractice);
      this.rseIdeaService.saveGoodPractice(goodPractice).subscribe();
    }




  }


  isGoodPractice() {
    this.goodPractice=true;
    this.defectiveMateriel=false;
    this.other=false;

    return this.goodPractice;
  }

  isDefectiveMat() {
    this.defectiveMateriel=true;
    this.other=false;
    this.goodPractice=false;
    return this.defectiveMateriel;
  }

  isOther() {
    this.other=true;
    this.goodPractice=false;
    this.defectiveMateriel=false;
    return this.other;
  }
}
