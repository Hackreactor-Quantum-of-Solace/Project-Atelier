import React from 'react';

import RelatedProductsList from './relatedItems/RelatedProductsList.jsx';
import OutfitList from './relatedItems/OutfitList.jsx';

export default class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = "relatedItems">
        < RelatedProductsList />
        < OutfitList />
      </div>
    )
  }
}