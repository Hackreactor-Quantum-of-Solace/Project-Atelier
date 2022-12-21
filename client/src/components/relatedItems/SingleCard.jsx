import React from 'react';
import axios from 'axios';

import ComparisonModal from './ComparisonModal.jsx';
import Modal from './Modal.jsx'
//use helper function get QuarterNumber
import { roundToNearestQuarter} from '../../../../helpers/helpers.js';

export default class SingleCard extends React.Component {
  constructor(props) {
    super(props);
    // console.log('before',this.props)
    this.state = {
      category : 'CATEGORY',
      name : 'NAME',
      features: [],
      default_price : 0,
      //if discount_price is null or zero means there's no discount
      discount_price : null,
      //default url image used to test
      img : 'https://cdn.pixabay.com/photo/2015/01/21/13/21/sale-606687__340.png',
      rate : 0,
      isCompareOn: false
    };

    this.fetchCategoryNameAndFeatures = this.fetchCategoryNameAndFeatures.bind(this);
    this.fetchPriceAndImage = this.fetchPriceAndImage.bind(this);
    this.fetchRateAndChangeToUse = this.fetchRateAndChangeToUse.bind(this);
    this.onCompare = this.onCompare.bind(this);
  }

  onCompare (input) {
    this.setState({isCompareOn : input});
  }

  deleteOutfitProcuct() {

  }
  componentDidMount() {
   this.fetchCategoryNameAndFeatures();
   this.fetchPriceAndImage();
   this.fetchRateAndChangeToUse();
  }

  fetchCategoryNameAndFeatures() {
    axios({
      method : 'get',
      url : `/products/${this.props.id}`
    })
    .then((response) => {
      this.setState({
        category : response.data.category,
        name : response.data.name,
        features : response.data.features
      })

    })
    .catch((err) => {
      console.log('Fetch Category, Name And Features ERROR', err);
    });

  }
  fetchPriceAndImage() {
    axios({
      method : 'get',
      url : `/products/${this.props.id}/styles`
    })
    .then((response) => {
      var results = response.data.results;

      //getDefault function: find the default parameter which is the required image and price
      var getDefault = (arr) => {
        // in case no default parameter
        var priceAndImgObj = {
          default_price : arr[0]['original_price'],
          discount_price : arr[0]['sale_price'],
          img : arr[0]['photos'][0]['url'] ? arr[0]['photos'][0]['url'] : 'https://cdn.pixabay.com/photo/2015/01/21/13/21/sale-606687__340.png'
        };
        for (var i = 0; i < arr.length; i ++) {
          if (arr[i]['default?'] === true) {
            priceAndImgObj = {
              default_price : arr[i]['original_price'],
              discount_price : arr[i]['sale_price'],
              img : arr[i]['photos'][0]['url'] ? arr[i]['photos'][0]['url'] : 'https://cdn.pixabay.com/photo/2015/01/21/13/21/sale-606687__340.png'
            };
            break;
          }
        }
        return priceAndImgObj;
      };

      this.setState(getDefault(results));
    })
    .catch((err) => {
      console.log('Fetch Price And Image ERROR', err);
    });
  }
  fetchRateAndChangeToUse() {
    axios({
      url : `/reviews/meta?product_id=${this.props.id}`,
      method : 'get'
    })
    .then((response) => {
      var rates = response.data.ratings;

      var getAvgRate = (rates) => {
        var totalRates = 0;
        var totalCounts = 0;
        var avgRealRate = 0;
        for (var key in rates) {
          totalRates += key * rates[key];
          totalCounts += rates[key] * 1;
        }
        if (totalCounts === 0) {
          avgRealRate = 0;
        } else {
          avgRealRate = totalRates / totalCounts;
        }
       return avgRealRate;
      };

      var avgRate = getAvgRate(rates);

      //use helper function roundToNearestQuarter make QuarterNumber
      var rate = roundToNearestQuarter(avgRate);

      this.setState({rate});
    })
    .catch((err) => {
      console.log('Fetch Rates And Change to use ERROR', err);
    });
  }
  render() {
    return (

      <div className="card" >

        <div className="img-container">
        {/* when client click card image, it will redirect page to detail product page */}
          <img className="card-img" src={this.state.img} alt="Product image" onClick={()=> { window.location.href = `http://localhost:3000/?id=${this.props.id}`}}
          // onError={ event => {
          //   event.target.src= "https://cdn.pixabay.com/photo/2015/01/21/13/21/sale-606687__340.png"
          //   event.onerror = null
          // }}
          />

          {/* icon is star now */}
          {this.props.icon === 'star' ?
            <div className="icon-star" >
              {/* click on star then comparsion modal will appear */}
              <button onClick={() => {this.setState({isCompareOn : true})}}><span className="star">&#9733;</span></button>

              {/* comparisonMedal appear or not */}
              { this.state.isCompareOn ?
              <Modal className="modal">
                < ComparisonModal onCompare={this.onCompare} currentProductFeature={this.props.currentProductFeature} relatedProductFeature={this.state.features} relatedProductName={this.state.name} currentProductName={this.props.currentProductName} />
              </Modal>
                : null}

            </div>

            : null
          }


        </div>




        <div className="product-info">

          <span>{this.state.category}</span>
          <br></br>
          <span className="product-name">{this.state.name}</span>

          {/* origin price or discount price */}
          {(this.state.discount_price) ? <p className="discount-price">${this.state.discount_price}</p> : null}
          <p style={(this.state.discount_price) ? {"text-decoration": "line-through"} : null}>${this.state.default_price}</p>

          {/* rate is not designed */}
          {(this.state.rate) ? <p>{this.state.rate}</p> : null}

        </div>
      </div>
    )
  }
}