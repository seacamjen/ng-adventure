import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Answer } from '../answer.model';
import { AnswerService } from '../answer.service';
import { ANSWERS } from '../mock-answers';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [AnswerService]
})
export class FirstComponent implements OnInit {
  answerId: number;
  answerToDisplay: Answer;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private answerService: AnswerService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.answerId = parseInt(urlParameters['id']);
    });
    this.answerToDisplay = this.answerService.getAnswersById(this.answerId);
  }

}
