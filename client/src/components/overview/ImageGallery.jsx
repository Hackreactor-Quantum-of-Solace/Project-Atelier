import React from 'react';

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: {} // TO DO: Just keep track of the index of photo in currentStyle.photos
    }
    this.changeMainImage = this.changeMainImage.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
  }

  changeMainImage(image) {
    this.setState({ currentImage: image });
  }

  handleThumbnailClick(e) {
    if (e.target.className === 'thumbnails-container') return;
    if (e.target.className === 'thumbnail-img') {
      console.log(e.target.parentElement.dataset.index);
      this.changeMainImage(this.props.currentStyle.photos[e.target.parentElement.dataset.index]);
    } else {
      console.log(e.target.dataset.index);
      this.changeMainImage(this.props.currentStyle.photos[e.target.dataset.index]);
    }
  }

  render() {
    let currentImage = this.state.currentImage;
    if (!currentImage.url) {
      currentImage = this.props.currentStyle.photos ? this.props.currentStyle.photos[0] : {};
    }
    return (
      <div className="image-gallery">
        <div className="main-image-container">
          <img src={currentImage.url} alt={this.props.currentStyle.name}></img>
          <div className="img-expand-icon img-icon">&#x26F6;</div>
          <div className="img-left-arrow img-icon">&#706;</div>
          <div className="img-right-arrow img-icon">&#707;</div>

          <div className="thumbnails-container" onClick={this.handleThumbnailClick}>
            {this.props.currentStyle.photos && this.props.currentStyle.photos.map((photo, i) => {
              if (i === this.props.currentStyle.photos.indexOf(currentImage)) {
                return (
                  <div className="img-gallery-thumbnail selected-thumbnail" key={i} data-index={i}>
                    <img className="thumbnail-img" src={photo.thumbnail_url}></img>
                  </div>
                );
              } else {
                return (
                  <div className="img-gallery-thumbnail" key={i} data-index={i}>
                    <img className="thumbnail-img" src={photo.thumbnail_url}></img>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
  }