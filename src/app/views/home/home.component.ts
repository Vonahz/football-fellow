import { Component } from '@angular/core';
import { MainLayout } from '../../layouts/main/main.layout';
import { CommonModule } from '@angular/common';
import { MainApiService } from '../../services/main-api/main-api.service';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'ff-home',
  standalone: true,
  imports: [MainLayout, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [MainApiService]
})
export class HomeComponent {
  leagues$: any;

  constructor(
    private mainApiService: MainApiService
  ) { }

  ngOnInit() {
    this.leagues$ = this.mainApiService.getAllLeagues().pipe(map((res: any) => res.response));
  }
}
