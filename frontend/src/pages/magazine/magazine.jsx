import React from 'react';
import './magazine.css';

const Magazine = () => {

  return (
    <div className='w-full sm:w-[561px] md:w-[761px] lg:w-[961px] xl:w-[1271px] mx-auto'>
      <h2 className="text-3xl font-bold inline-block my-10">Magazine</h2>
      <div className="flex flex-col md:flex-row gap-2 justify-center">
        <div className="flex flex-col lg:w-1/2 w-full sm:p-0 p-5">
          <figure className="magazine-figure rounded-lg">
            <div
              className="magazine-media"
              style={{
                backgroundImage: 'url(https://media.licdn.com/dms/image/D4D12AQFGfcHg5C-8iQ/article-cover_image-shrink_720_1280/0/1711225991007?e=2147483647&v=beta&t=vYqt6KIsTJ48wOTH-zKOw4skBB-a9g8P4yKn_R1hflA)',
              }}
            />
            <figcaption className="m-5">
              <svg className="magazine-svg relative" viewBox="0 0 200 200" version="1.1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <mask id="mask" x="0" y="0" width="100%" height="100%">
                    <rect id="alpha" x="0" y="0" width="100%" height="100%" />
                    <text className="magazine-title" dx="50%" dy="2em">
                      ENJOY
                    </text>
                    <text className="magazine-title" dx="50%" dy="3em">
                      EVERY
                    </text>
                    <text className="magazine-title" dx="50%" dy="4em">
                      MOMENT
                    </text>
                  </mask>
                </defs>
                <rect id="base" x="0" y="0" width="100%" height="100%" />
              </svg>
              <div className="magazine-body">
                <p>
                  Unique insights and expert reviews crafted for watch lovers.
                </p>
              </div>
            </figcaption>
            <a href="#" />
          </figure>
        </div>
        <div className="flex flex-col lg:w-1/2 w-full sm:p-0 p-5">
          <figure className="magazine-figure rounded-lg">
            <div
              className="magazine-media"
              style={{
                backgroundImage: 'url(https://www.creativefabrica.com/wp-content/uploads/2022/11/13/Seamless-Background-Wallpaper-Steampunk-Watches-Gears-High-Quality-Simple-Design-46472360-1.png)',
              }}
            />
            <figcaption className="m-5">
              <svg className="magazine-svg" viewBox="0 0 200 200" version="1.1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <mask id="mask" x="0" y="0" width="100%" height="100%">
                    <rect id="alpha" x="0" y="0" width="100%" height="100%" />
                    <text className="magazine-title" dx="50%" dy="2em">
                      ENJOY
                    </text>
                    <text className="magazine-title" dx="50%" dy="3em">
                      EVERY
                    </text>
                    <text className="magazine-title" dx="50%" dy="4em">
                      MOMENT
                    </text>
                  </mask>
                </defs>
                <rect id="base" x="0" y="0" width="100%" height="100%" />
              </svg>
              <div className="magazine-body">
                <p>
                  Discover watch history, technology, and design with our insightful articles.                </p>
              </div>
            </figcaption>
            <a href="#" />
          </figure>
        </div>
      </div>
      <h2 className="text-3xl font-bold inline-block mt-24">Latest Articles</h2>
      <div className='w-full sm:w-[561px] md:w-[761px] lg:w-[961px] xl:w-[1271px] mx-auto'>
        <div className="projcard-container sm:p-0 p-5">
          <div className="projcard projcard-blue">
            <a href="https://www.youtube.com/watch?v=6i4hfLtps7s" className="projcard-link">
              <div className="projcard-innerbox">
                <img className="projcard-img" src="https://magazine.chrono24.com/2021/12/Explorer-I-scaled.jpeg?_gl=1*120fgrt*FPAU*MTkxMDY3Mzg3NS4xNzE5OTI0MTU2*_ga*MTQ2MjQzMTA5OS4xNzE5OTI0MTU1*_ga_B8CPBTKGPW*MTcyMTMxMzI4MS4yMC4xLjE3MjEzMTQxMTYuMC4wLjE0MzYwMDc3MDg.*_fplc*eFZhNDQ4S2NsJTJGUm15QUdZVk5zdkdTMVduejFRcUcyeHFtSVN1NjVYVkRqT2hjdjlLRElETyUyRlglMkZXNHpWTnpXNVZuT2o5UTVzMyUyRjkxYXBXY3cycSUyQkRkQlo1YTJFNU9QMjJNJTJCRzNHbGpSaWZIOTVLR0Nadmx1VXNmMFlaMXJBJTNEJTNE" alt="Card Title" />
                <div className="projcard-textbox  flex flex-col items-center justify-center">
                  <div className="projcard-title">Rolex</div>
                  <div className="projcard-subtitle">Oyster Perpetual Explorer</div>
                  <div className="projcard-bar"></div>
                  <div className="projcard-description">
                    The Rolex Oyster Perpetual Explorer 214270 is encased in 39mm of stainless steel surrounding a black dial on a stainless steel Oyster bracelet. Features of this Rolex Explorer include hours.</div>
                </div>
              </div>
            </a>
          </div>

          <div className="projcard projcard-red">
            <a href="https://www.youtube.com/watch?v=eZIG45LN5ws" className="projcard-link">
              <div className="projcard-innerbox">
                <img className="projcard-img" src="https://bloombarwatches.com/wp-content/uploads/2024/03/2022-Cartier-Santos-WSSA0039-Black-DLC-2921-0008-scaled-1.jpg" alt="That's Another Card" />
                <div className="projcard-textbox  flex flex-col items-center justify-center">
                  <div className="projcard-title">Cartier</div>
                  <div className="projcard-subtitle">Santos De Cartier ADLC WSSA0039</div>
                  <div className="projcard-bar"></div>
                  <div className="projcard-description">
                    The Cartier Santos De Cartier ADLC WSSA0039 is encased in 39.8mm of black DLC stainless steel surrounding a black dial on a black rubber strap.</div>
                </div>
              </div>
            </a>
          </div>

          <div className="projcard projcard-green">
            <a href="https://www.youtube.com/watch?v=uLx_t3xdYLQ" className="projcard-link">
              <div className="projcard-innerbox">
                <img className="projcard-img" src="https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65,w=980/2024/04/DSC00319-1024x684.jpg" alt="And a Third Card" />
                <div className="projcard-textbox  flex flex-col items-center justify-center">
                  <div className="projcard-title">Hublot</div>
                  <div className="projcard-subtitle">Big Bang uinco orange ceramic</div>
                  <div className="projcard-bar"></div>
                  <div className="projcard-description">
                    Unveiling the first ever orange ceramic watch: Big Bang Unico Orange Ceramic. The timepiece features a stunning orange ceramic case and a skeleton design, with its iconic column wheel visible at 6 o'clock.</div>
                </div>
              </div>
            </a>
          </div>

          <div className="projcard projcard-customcolor" style={{ '--projcard-color': '#F5AF41' }}>
            <a href="https://www.youtube.com/watch?v=DY0Oa-jktiM" className="projcard-link">
              <div className="projcard-innerbox">
                <img className="projcard-img" src="https://i.ebayimg.com/images/g/6TMAAOSwvo9jN5Ti/s-l1600.jpg" alt="Last Card" />
                <div className="projcard-textbox  flex flex-col items-center justify-center">
                  <div className="projcard-title">Hamilton</div>
                  <div className="projcard-subtitle">Jazzmaster Viewmatic H32665131</div>
                  <div className="projcard-bar"></div>
                  <div className="projcard-description">
                    "The Hamilton Jazzmaster Viewmatic H32665131 blends traditional watchmaking with contemporary design, offering style, functionality, and precision."                    </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
