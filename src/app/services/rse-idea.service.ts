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
    return this.http.post<DefectiveMateriel>(environment.backendHost+"/defective_materiel",defectiveMat);
  }
  public saveGoodPractice(goodPractice:GoodPractice):Observable<GoodPractice>{

    return this.http.post<GoodPractice>(environment.backendHost+"/good_practice",goodPractice);
  }
  public saveOther(other:Other):Observable<Other>{
    return this.http.post<Other>(environment.backendHost+"/other",other);
  }

  getGoodPractices():Observable<Array<GoodPractice>> {
    return  this.http.get<Array<GoodPractice>>(environment.backendHost+"/good_practice");
  }

  getDefectiveMateriels():Observable<Array<DefectiveMateriel>> {
    return  this.http.get<Array<DefectiveMateriel>>(environment.backendHost+"/defective_materiel");
  }

  getOthers():Observable<Array<Other>> {
    return  this.http.get<Array<Other>>(environment.backendHost+"/Other");
  }
}
