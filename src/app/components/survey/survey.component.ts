import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'survey',
  templateUrl: './survey.template.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  showSurvey: boolean;

  ngOnInit() {
    setTimeout(() => {
      // increase the threshold to 1
      // to see the survey always popup
      // disable the survey for this lesson
      if (Math.random() < 0) {
        this.showSurvey = true;
      }
    }, 20);
  }

  closeSurvey() {
    this.showSurvey = false;
  }
}
