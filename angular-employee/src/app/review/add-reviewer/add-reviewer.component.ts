import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-reviewer',
  templateUrl: './add-reviewer.component.html',
  styleUrls: ['./add-reviewer.component.css'],
})
export class AddReviewerComponent implements OnInit {
  @Input() review_of: any;
  disable_review_of: boolean = false;
  myForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    const { id, firstname } = this.review_of;
    if (this.review_of) this.disable_review_of = true;
    this.myForm = new FormGroup({
      review_by: new FormControl(null, Validators.required),
      review_by_id: new FormControl(null, Validators.required),

      review_of: new FormControl(
        {
          value: this.review_of ? firstname : null,
          disabled: this.disable_review_of,
        },

        Validators.required
      ),
      review_of_id: new FormControl(
        { value: this.review_of ? id : null, disabled: this.disable_review_of },

        Validators.required
      ),
    });
  }
  onSubmit() {}
}
