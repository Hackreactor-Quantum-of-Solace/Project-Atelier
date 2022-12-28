import React from 'react';
import SingleCard from './SingleCard.jsx';

export default class RelatedProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'star',
      arrowLeft: false,
      arrowRight:true
    };
    this.slider = React.createRef();
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);

  }
  goLeft() {
    //each card width is 208px, each time move 1 card
    this.slider.current.scrollLeft += 0.25 * this.slider.current.offsetWidth;
    this.setState({arrowLeft: true});
  }
  goRight() {
    this.slider.current.scrollLeft -= 0.25 * this.slider.current.offsetWidth;
    if (this.slider.current.scrollLeft === 0) {
      this.setState({arrowLeft: false})
    }

  }

  render() {
    return (
      <div className= "related-products-list">
        <h2>RELATED PRODUCTS</h2>
        <div className="related-carousel">
          <button style={this.state.arrowLeft ? {"visibility":"visible"} : {"visibility":"hidden"}} onClick={this.goRight}>
            <h1>&#8249;</h1>
          </button >
          <div className="related-items-container" ref={this.slider} >
            {this.props.relatedItemsId.map((id, index) => (
              <SingleCard key={index} id={id} icon={this.state.icon} currentProductFeature={this.props.currentProductFeature} currentProductName={this.props.currentProductName} />
            ))}
          </div>
          <button style={this.state.arrowRight ? {"visibility":"visible"} : {"visibility":"hidden"}} onClick={this.goLeft}>
            <h1>&#8250;</h1>
          </button>
        </div>

        {/* this div is used to contain Modal component. By default, it's empty, when customer click star icon, it will wrap modal component into it */}
        <div className="modal-container"></div>

      </div>
    )
  }
}