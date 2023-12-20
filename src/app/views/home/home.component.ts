import { Component } from '@angular/core';
import { MainLayout } from '../../layouts/main/main.layout';

@Component({
  selector: 'ff-home',
  standalone: true,
  imports: [MainLayout],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
