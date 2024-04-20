# React Banner Slider Component

A responsive banner slider component for React, built with TypeScript. It allows you to easily create and manage a slideshow of banners with titles and links.

## Installation

You can install the component via npm:


npm @denicarmo/banner-full

## Usage

```
import React from 'react';
import BannerSlider from 'your-package-name';

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const bannersData = [
  title: 'Example',
  items: [
    {
      id: '1',
      title: 'Banner 1',
      link: 'https://example.com',
      desk: 'image-url-desktop.jpg',
      mob: 'image-url-mobile.jpg',
      alt: 'Banner 1 Image',
    },
    // Add more banner items as needed
  ]
];

const placeholderImage = 'placeholder-image-url.jpg';

const App = () => {
  return (
    <div>
      <BannerSlider banners={banners} placeholder={placeholderImage} sliderConfig={sliderSettings} />
    </div>
  );
};

export default App;
```

## Banner Attributes

* `id`: Unique identifier for the banner.
* `title`: Title of the banner.
* `link`: URL link for the banner.
* `desk`: Image URL for desktop resolution.
* `mob`: Image URL for mobile resolution.
* `alt`: Alt text for the banner image.
* `placeholder`: URL for the placeholder image to be displayed if a banner does not have an image provided.

## Configuration

The banner slider component uses the Slick Slider library for the slideshow functionality. For detailed configuration options and documentation, refer to the <a href="https://kenwheeler.github.io/slick/" target="_blank">Slick Slider documentation</a>.