const HeroBanner = () => {
  const heroBanner = document.querySelector('.hero-image .image');

  return {
    rotateImages: (interval, numOfPics) => {
      let imageSelection = 0
      setInterval(() => {
        if (imageSelection > 4) {
          imageSelection = 0
        }
        heroBanner.style.backgroundImage = `url("./images/hero-image-${(imageSelection++) % (numOfPics - 1)}.jpg")`
      }, interval)
    }
  }

}

document.addEventListener("DOMContentLoaded", () => {
  let heroBanner = HeroBanner()
  heroBanner.rotateImages(1500, 4)
})

