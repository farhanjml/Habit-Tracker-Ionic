import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  constructor() { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  option = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 5,


    autoplay: {
    delay: 4500,
    disableOnInteraction: false,
    },

    pagination : {
      el: '.swiper-pagination',
      type: 'progressbar',

    },

  };

  ngOnInit() {
  }

}
