import React from 'react';
import axios from 'axios';

//use helper function get QuarterNumber
import { roundToNearestQuarter} from '../../../../helpers/helpers.js';

export default class SingleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category : 'CATEGORY',
      name : 'NAME',
      default_price : 0,
      //if discount_price is null or zero means there's no discount
      discount_price : null,
      //default url image used to test
      img : 'https://cdn.pixabay.com/photo/2015/01/21/13/21/sale-606687__340.png',
      rate : 0
    };

    this.fetchCategoryAndName = this.fetchCategoryAndName.bind(this);
    this.fetchPriceAndImage = this.fetchPriceAndImage.bind(this);
    this.fetchRateAndChangeToUse = this.fetchRateAndChangeToUse.bind(this);
  }
  relatedProductCompare() {

  }

  deleteOutfitProcuct() {

  }
  componentDidMount() {
   this.fetchCategoryAndName();
   this.fetchPriceAndImage();
   this.fetchRateAndChangeToUse();

  }

  fetchCategoryAndName() {
    axios({
      method : 'get',
      url : `/products/${this.props.id}`
    })
    .then((response) => {
      this.setState({
        category : response.data.category,
        name : response.data.name
      })
    })
    .catch((err) => { console.log('Fetch Category And Name ERROR', err);
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
      //console.log(this.state)
    })
    .catch((err) => { console.log('Fetch Price And Image ERROR', err);
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
      // console.log(this.state);
    })
    .catch((err) => { console.log('Fetch Rates And Change to use ERROR', err);
    });
  }
  render() {
    return (
      // when client click card, it will redirect page to detail product page
      <div class="card" onClick={()=> { window.location.href = `http://localhost:3000/?id=${this.props.id}`}}>

        <img class="card-img" src={this.state.img} alt="Product image"
        // onError={ event => {
        //   event.target.src= "https://cdn.pixabay.com/photo/2015/01/21/13/21/sale-606687__340.png"
        //   event.onerror = null
        // }}
        />

        <div class="product-info">
          {/* icon is not designed */}
          {<p>{this.props.icon}</p>}

          <span class="category">{this.state.category}</span>
          <br></br>
          <span class="name">{this.state.name}</span>

          {(this.state.discount_price) ? <p class="discount-price">${this.state.discount_price}</p> : null}
          <p class="default-price" style={(this.state.discount_price) ? {"text-decoration": "line-through"} : null}>${this.state.default_price}</p>

          {/* rate is not designed */}
          {(this.state.rate) ? <p>{this.state.rate}</p> : null}

        </div>
      </div>
    )
  }
}