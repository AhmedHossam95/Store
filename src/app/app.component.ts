import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showLoader = false;
  constructor(public loaderService: LoaderService) {}
  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((data) => {
      this.showLoader = data;
    });
  }
}
