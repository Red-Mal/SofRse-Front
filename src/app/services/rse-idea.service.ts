import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DefectiveMateriel} from "../models/DefectiveMateriel";
import {environment} from "../../environments/environment";
import {GoodPractice} from "../models/GoodPractice";
import {Other} from "../models/Other";

@Injectable({
  providedIn: 'root'
})
export class RseIdeaService {

  constructor(private http:HttpClient) { }

  public saveDefectiveMateriel(defectiveMat:DefectiveMateriel):Observable<DefectiveMateriel>{
    return this.http.post<DefectiveMateriel>(environment.backendHost+"/rse/defective-materiel",defectiveMat);
  }
  public saveGoodPractice(goodPractice:GoodPractice):Observable<GoodPractice>{
    console.log("gp"+goodPractice);
    return this.http.post<GoodPractice>(environment.backendHost+"/rse/good-practice",goodPractice);
  }
  public saveOther(other:Other):Observable<Other>{
    return this.http.post<Other>(environment.backendHost+"/rse/other",other);
  }

}
