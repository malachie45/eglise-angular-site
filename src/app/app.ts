import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './pages/home/home';
import { Layout } from './layout/layout/layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Layout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pierredefaite');
}
