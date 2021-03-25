import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Feedback} from "../feedback/model/feedback";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private feedbacksUrl = 'api/feedback';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    /**
     * messageService maybe?
     */
  ) { }

  getFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.feedbacksUrl}/all`)
  }

  saveFeedback(feedback: Feedback): Observable<Feedback> {
    console.log("posting")
    console.log(feedback)
    return this.http.post<Feedback>(this.feedbacksUrl, feedback, this.httpOptions);
  }
}
