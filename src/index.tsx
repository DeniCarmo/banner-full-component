import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { bannerDataProp } from './types/types';
import './styles/styles.css';

interface BannerFullProps {
  bannerData: bannerDataProp;
  placeholder: string;
  sliderConfig: Object;
}

export const BannerFull : React.FC<BannerFullProps> = ({bannerData, placeholder, sliderConfig}) => {

  return (
    <section className="banner-full">
      <Slider {...sliderConfig}>
        {bannerData.items.map((banner, i) => {
          return banner.link ? (
            <>
              <a href={banner.link || '#'} className="banner-full__wrapper" key={i}>
                <img
                  src={window.innerWidth >= 768 ? banner.desk || placeholder : banner.mob || placeholder}
                  alt={banner.alt || ''}
                  className="banner-full__img"
                />
                {banner.title && (
                  <div className="banner-full__title--container">
                    <h3 className="banner-full__title">{banner.title}</h3>
                  </div>
                )}
              </a>
            </>
          ) : (
            <>
              <div className="banner-full__wrapper" key={i}>
                {window.innerWidth >= 768 ? (
                  <img
                    src={banner.desk ? banner.desk : placeholder}
                    alt={banner.alt && banner.alt}
                    className="banner-full__img"
                  />
                ) : (
                  <img
                    src={banner.mob ? banner.mob : placeholder}
                    alt={banner.alt && banner.alt}
                    className="banner-full__img"
                  />
                )}
                {banner.title && (<div className="banner-full__title--container">
                  <h3 className="banner-full__title">{banner.title}</h3>
                </div>)}
              </div>
            </>
          );
        })}
      </Slider>
    </section>
  )
}
