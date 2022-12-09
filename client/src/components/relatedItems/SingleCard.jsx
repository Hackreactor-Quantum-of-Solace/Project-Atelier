import React from 'react';
import axios from 'axios';
//use helper function get QuarterNumber
import { roundToNearestQuarter} from '../../../../helpers/helpers.js'
export default class SingleCard extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props)
    this.state = {
      // '' no category or a string
      category: '',
      // '' no name or a string
      name: '',
      'default_price': 0,
      // null or number, if discount_price is null means no discount
      'discount_price': null,
      // null, '' or url, default image used to test,'https://cdn.pixabay.com/photo/2015/01/21/13/21/sale-606687__340.png'
      img:'',
      rate: 0,
    };

    this.fetchCategoryAndName = this.fetchCategoryAndName.bind(this);
    this.fetchDiscountPriceAndImage = this.fetchDiscountPriceAndImage.bind(this);
    this.fetchRateAndChangeToUse = this.fetchRateAndChangeToUse.bind(this);
  }
  componentDidMount() {
   this.fetchCategoryAndName();
   this.fetchDiscountPriceAndImage();
   this.fetchRateAndChangeToUse();

  }

  fetchCategoryAndName() {
    axios({
      method: 'get',
      url: `/products/${this.props.id}`
    })
    .then((response) => {
      this.setState({
        category: response.data.category,
        name: response.data.name,
        'default_price': response.data['default_price']
      })
      //console.log(this.state);
    })
    .catch((err) => {console.log('fetchCategoryAndName ERROR', err)})

  }
  fetchDiscountPriceAndImage() {
    axios({
      method: 'get',
      url: `/products/${this.props.id}/styles`
    })
    .then((response) => {
      var results = response.data.results;
      //find default param is true which is the required img and price
      var getDefault = (arr) => {
        for(var i = 0; i < arr.length; i ++) {
          if (arr[i]['default?'] === true) {
            return {
              'discount_price':results[i]['sale_price'],
              img:results[i]['photos'][0]['url']? results[i]['photos'][0]['url'] : 'https://cdn.pixabay.com/photo/2015/01/21/13/21/sale-606687__340.png'
            };
          }
        }
      };
      var discountAndImgObj = getDefault(results);
      this.setState(discountAndImgObj);
      //console.log(this.state)
    })
    .catch((err) => {console.log('fetchDiscountPriceAndImage ERROR', err)})
  }
  fetchRateAndChangeToUse() {
    axios({
      url: `/reviews/meta?product_id=${this.props.id}`,
      method: 'get'
    })
    .then((response) => {
      var rates = response.data.ratings;
      //console.log(rates)
      var getAvgRate = (rates) => {
        var totalRates = 0;
        var totalCounts = 0;
        var avgRealRate = 0;
        for(var key in rates) {
          totalRates += key * rates[key];
          totalCounts += rates[key] * 1;
        }

        if (totalCounts === 0) {
          avgRealRate = 0;
        } else {
          avgRealRate = totalRates / totalCounts;
        }
       //console.log(avgRealRate);
       return avgRealRate;
      }
      var avgRate = getAvgRate(rates);
      //use helper function roundToNearestQuarter make QuarterNumber
      var rate = roundToNearestQuarter(avgRate);
      this.setState({rate});
      //console.log(this.state);
    })
  }
  render() {
    return (
      <div class="card">

        <img class="card-img" src={this.state.img} alt="Product image" onError={ event => {
          event.target.src= "https://cdn.pixabay.com/photo/2015/01/21/13/21/sale-606687__340.png"
          event.onerror = null
        }}/>

        <div class="product-info">

          <span class="category">{this.state.category}</span>
          <br></br>
          <span class="name">{this.state.name}</span>

          {(this.state.discount_price) ? <p class="discount-price">${this.state.discount_price}</p> : null}
          <p class="default-price" style={(this.state.discount_price) ? {"text-decoration": "line-through"} : null}>${this.state.default_price}</p>


          <p>{this.state.rate}</p>

        </div>
      </div>
    )
  }
}