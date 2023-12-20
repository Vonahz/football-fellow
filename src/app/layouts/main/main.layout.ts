import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from '../../views/home/home.component';

@Component({
  selector: 'ff-main-layout',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, MatSidenavModule, HomeComponent],
  templateUrl: './main.layout.html',
  styleUrl: './main.layout.scss'
})
export class MainLayout {

}
