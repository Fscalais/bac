import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarComponent} from "./pages/toolbar/toolbar.component";
import{HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'login';
}
