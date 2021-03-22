import { Component, OnInit } from '@angular/core';
import {Feedback} from "./model/feedback";
import {FeedbackService} from "../service/feedback.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbacks!: Feedback[];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.getFeedbacks();
  }

  getFeedbacks(): void {
    this.feedbackService.getFeedbacks()
      .subscribe(feedbacks => this.feedbacks = feedbacks);
  }

}
