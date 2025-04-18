import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

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
      clickable: true,
    },

  };

  ngOnInit() {
  }

}
