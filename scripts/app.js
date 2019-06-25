const HeroBanner = (interval, numOfPics) => {
  const heroBanner = document.querySelector('.hero-image .image');
  let intervalHolder

  return {
    rotateImages: () => {
      let imageSelection = 0
      intervalHolder = setInterval(() => {
        setTimeout( () => {
          heroBanner.style.backgroundImage = `url("./images/hero-image-${(imageSelection++) % (numOfPics)}.jpg")`
        }, 0)
      }, interval)
    }
  }

}

document.addEventListener("DOMContentLoaded", () => {
  let heroBanner = HeroBanner(1500, 4)
  heroBanner.rotateImages()
})

