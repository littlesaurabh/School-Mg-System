import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MarksService {
  constructor(private http: HttpClient) { }
  getData() {
    console.log("GetData")
    return this.http.get("http://localhost:3010/marks");
 }
}
