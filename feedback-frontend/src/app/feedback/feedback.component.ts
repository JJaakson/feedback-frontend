import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Feedback} from "./model/feedback";
import {FeedbackService} from "../service/feedback.service";
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class FeedbackComponent implements OnInit {

  feedbacks: Feedback[] = [];
  email = new FormControl('', [Validators.required, Validators.email])
  displayedColumns: string[] = ['id', 'authorName', 'authorEmail', 'categories', 'content'];
  dataSource = this.feedbacks;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.getFeedbacks();
  }

  getFeedbacks(): void {
    this.feedbackService.getFeedbacks()
      .subscribe(feedbacks => this.feedbacks = feedbacks);
  }

  getErrorMessage() {
    return this.email.hasError('required') ? "Enter an email address":
      this.email.hasError('email') ? "This is not a valid email address":
        '';
  }

  addFeedback(authorName: String, authorEmail: String, content: String, categories: String[]): void {
    authorName = authorName.trim();
    authorEmail = authorEmail.trim();
    content = content.trim();
    if (!authorName || !authorEmail || !content || !categories) {
      alert("Please fill out all fields!")
      return;
    }
    this.feedbackService.saveFeedback({authorName, authorEmail, content, categories} as Feedback).subscribe()
    this.getFeedbacks()
  }

  getCategories(categories: String[]): String {
    let result = "";
    for (let i in categories) {
        result = result + categories[i]
        if (parseInt(i) != categories.length - 1) {
          result = result + ", "
        }
    }
    return result;
  }

}
