import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slide',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './slide.html',
  styleUrl: './slide.css',
})
export class Slide implements AfterViewInit, OnDestroy {
  autoSlide: NodeJS.Timeout | undefined;
  

  currentIndex = 0;
  interval: any;

  slides = [
    {
      image: 'assets/images/adoration.png',
      title: 'Bienvenue dans la présence de Dieu',
      subtitle: 'Une communauté de foi, d’amour et d’espérance'
    },
    {
      image: 'assets/images/foi.png',
      title: 'Adoration & Louange',
      subtitle: 'Venez célébrer avec nous'
    },
    {
      image: 'assets/images/saintebible.png',
      title: 'Enseignement Biblique',
      subtitle: 'Grandir dans la parole de Dieu'
    }
  ];

  ngAfterViewInit(): void {
    this.startAutoSlide();
  }

 startAutoSlide(): void {

    this.autoSlide = setInterval(() => {

      this.currentIndex =
        (this.currentIndex + 1) % this.slides.length;

    }, 3000);

  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

 

  nextSlide() {
    this.currentIndex =
      (this.currentIndex + 1) % this.slides.length;
  }

 prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  
  
}
