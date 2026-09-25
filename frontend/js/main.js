Pagiflow('#responsiveRail', {
  direction: 'horizontal',
  itemsPerSlide: 2,
  slidesToScroll: 1,
  gap: 18,
  speed: 420,
  loop: true,
  centerMode: true,
  centerPadding: 36,
  keyboard: true,
  paginate: true,
  navigation: {
    prev: '.pagiflow-prev',
    next: '.pagiflow-next'
  },
  responsive: {
    0: { itemsPerSlide: 1, centerMode: false, centerPadding: 0 },
    768: { itemsPerSlide: 2, centerMode: true, centerPadding: 36 }
  }
});
