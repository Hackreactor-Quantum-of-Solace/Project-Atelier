import React from 'react';

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.changeMainImage = this.changeMainImage.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.scrollThumbnailIntoView = this.scrollThumbnailIntoView.bind(this);
  }

  changeMainImage(index) {
    this.props.changeCurrentImageIndex(index);
    this.scrollThumbnailIntoView(index);
  }

  handleThumbnailClick(e) {
    if (e.target.className === 'thumbnails-container') return;
    if (e.target.className === 'thumbnail-img') {
      console.log(e.target.parentElement.dataset.index);
      this.changeMainImage(e.target.parentElement.dataset.index);
    } else {
      console.log(e.target.dataset.index);
      this.changeMainImage(e.target.dataset.index);
    }
  }

  handleArrowClick(direction) {
    if (direction === 'back') {
      let index = parseInt(this.props.currentImageIndex) - 1;
      this.props.changeCurrentImageIndex(index);
      this.scrollThumbnailIntoView(index);
    } else if (direction === 'next') {
      let index = parseInt(this.props.currentImageIndex) + 1;
      this.props.changeCurrentImageIndex(index);
      this.scrollThumbnailIntoView(index)
    }
  }

  scrollThumbnailIntoView(index) {
    let thumbnails = document.querySelectorAll('.img-gallery-thumbnail');
    let thumbnailContainer = document.querySelector('.thumbnails-container');
    let slider = document.querySelector('.thumbnails-slider');
    let thRect = thumbnails[index].getBoundingClientRect();
    let sliderRect = slider.getBoundingClientRect();
    let containerRect = thumbnailContainer.getBoundingClientRect();
    if (thRect.top > containerRect.bottom) {
      console.log('scrolling up');
      console.log(`sliderRect: ${sliderRect.y}`);
      // slider.style.position = 'absolute';
      // slider.style.top = `${parseInt(sliderRect.top) - 85}px`;
    } else if (thRect.bottom < containerRect.top) {
      console.log('scrolling down');
      // slider.style.position = 'absolute';
      // slider.style.top = `${parseInt(sliderRect.top) + 85}px`;
    }
  }

  render() {
    let currentImage = this.props.currentStyle.photos ? this.props.currentStyle.photos[this.props.currentImageIndex] : {};
    let leftArrowHidden = this.props.currentImageIndex == 0;
    let rightArrowHidden = this.props.currentStyle.photos ? this.props.currentImageIndex == this.props.currentStyle.photos.length - 1 : true;
    return (
      <div className="image-gallery">
        <div className="main-image-container">
          <img src={currentImage.url} alt={this.props.currentStyle.name}></img>
          <div className="img-expand-icon img-icon" onClick={this.props.toggleView}>&#x26F6;</div>
          <div
            className="img-left-arrow img-icon"
            hidden={leftArrowHidden}
            onClick={() => this.handleArrowClick('back')}
          >&#706;</div>
          <div
            className="img-right-arrow img-icon"
            hidden={rightArrowHidden}
            onClick={() => this.handleArrowClick('next')}
          >&#707;</div>

          <div className="thumbnails-container" onClick={this.handleThumbnailClick}>
            <div className="thumbnails-slider">
              {this.props.currentStyle.photos && this.props.currentStyle.photos.map((photo, i) => {
                if (i == this.props.currentImageIndex) {
                  return (
                    <div className="img-gallery-thumbnail selected-thumbnail"
                      key={i}
                      data-index={i}
                      style={{ backgroundImage: `url(${photo.thumbnail_url})` }}
                    >
                      {/* <img className="thumbnail-img" src={photo.thumbnail_url}></img> */}
                    </div>
                  );
                } else {
                  return (
                    <div className="img-gallery-thumbnail"
                      key={i}
                      data-index={i}
                      style={{ backgroundImage: `url(${photo.thumbnail_url})` }}
                    >
                      {/* <img className="thumbnail-img" src={photo.thumbnail_url}></img> */}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  }