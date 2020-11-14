import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css'],
})
export class NewReviewComponent implements OnInit {
  myForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      adaptability: new FormControl(null, Validators.required),
      communication: new FormControl(null, Validators.required),
      punctuality: new FormControl(null, Validators.required),
      quality_of_work: new FormControl(null, Validators.required),
      comment: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {}
}
