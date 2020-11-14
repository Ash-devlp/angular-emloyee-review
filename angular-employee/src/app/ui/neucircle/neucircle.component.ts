import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-neucircle',
  template: `<div class="container">
    <div class="bar">
      <svg>
        <circle cx="50%" cy="50%" r="50%" [ngClass]="getClass(score)"></circle>
      </svg>
      <h1>{{ score }}</h1>
    </div>
  </div>`,
  styleUrls: ['./neucircle.component.css'],
})
export class NeucircleComponent implements OnInit {
  @Input() score: number;
  progress: string;
  constructor() {}

  ngOnInit(): void {
    // document.documentElement.style.setProperty('--percentage', this.progress);
  }
  getClass(score) {
    if (score === 1) return 'c1';
    if (score === 2) return 'c2';
    if (score === 3) return 'c3';
    if (score === 4) return 'c4';
    if (score === 5) return 'c5';
  }
}
