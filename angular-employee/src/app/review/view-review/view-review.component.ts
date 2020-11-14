import { Component, OnInit, Input } from '@angular/core';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css'],
})
export class ViewReviewComponent implements OnInit {
  @Input() id: number;
  reviews: any;

  constructor(private rservice: ReviewService) {}

  ngOnInit(): void {
    console.log(this.id);
    this.rservice.getUserReviews(this.id).subscribe(
      (res) => {
        this.reviews = res.obj;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
