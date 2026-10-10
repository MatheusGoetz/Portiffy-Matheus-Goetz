
import { Component } from '@angular/core';

import { Navbar } from './shared/components/navbar/navbar';
import { Hero } from './features/home/components/hero/hero';
import { Skills } from './features/home/components/skills/skills';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
