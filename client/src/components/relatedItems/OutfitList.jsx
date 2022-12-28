import React from 'react';
import SingleCard from './SingleCard.jsx';
import {addOutfitListToCookie} from '../../../../helpers/helpers.js';
import {getOutfitListInCookie} from '../../../../helpers/helpers.js';

export default class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'delete',
      outfitList: getOutfitListInCookie(),
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    //use helper function to save customer specific outfitList into cookie
    addOutfitListToCookie(this.props.currentProductId);
    this.setState({outfitList: getOutfitListInCookie()});
  }

  render() {
    return (
      <div className="outfit-list">
        <h2>YOUR OUTFIT</h2>
        <div className="outfit-container">

          <div className="card" onClick={this.handleClick}>
           <h1>Add to Outfit</h1>
           <button >&#43;</button>
          </div>

          <div>
            {(this.state.outfitList !== undefined) ?
            this.state.outfitList.map((item, index) => (
              <SingleCard icon={this.state.icon} id={item} key={index}/>
            ))
            : null}

          </div>
        </div>
      </div>
    )
  }
}