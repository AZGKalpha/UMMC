const mySlider = new Splide(`#mySlider`, {
    type   : 'loop',
    perPage: 2,
    perMove: 1,
    gap: `70px`,
    pagination: false
  })

mySlider.mount()