import React from 'react';
import axios from 'axios';

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
      'discount_price': 0,
      // default image used to test,'https://cdn.pixabay.com/photo/2015/01/21/13/21/sale-606687__340.png'
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
              img:results[i]['photos'][0]['url']
            };
          }
        }
      };
      var discountAndImgObj = getDefault(results);
      this.setState(discountAndImgObj);
      //console.log(this.state)
    })
  }
  fetchRateAndChangeToUse() {
    axios({
      url: `/reviews/meta?product_id=${this.props.id}`,
      method: 'get'
    })
    .then((response) => {
      var rates = response.data.ratings;
      //console.log(rates)
      var getAvgRateAndChangeTOOneQuarter = (rates) => {
        var totalRates = 0;
        var totalCounts = 0;
        var avgRealRate = 0;
        for(var key in rates) {
          totalRates += key * rates[key];
          totalCounts += rates[key] * 1;
        }
        //console.log(totalRates, totalCounts)
        if (totalCounts === 0) {
          avgRealRate = 0;
        } else {
          avgRealRate = totalRates / totalCounts;
        }
        var simpleAvgRate = 0;
        var intPart = Math.floor(avgRealRate);
        var decPart = avgRealRate - intPart;
        if (decPart === 0) {
          simpleAvgRate = intPart;
        } else if (decPart > 0 && decPart <= 0.25) {
          simpleAvgRate = intPart + 0.25;
        } else if (decPart > 0.25 && decPart <= 0.5) {
          simpleAvgRate = intPart + 0.5;
        } else if (decPart > 0.5 && decPart <= 0.75) {
          simpleAvgRate = intPart + 0.75;
        } else {
          simpleAvgRate = intPart + 1;
        }
        return {rate: simpleAvgRate};
      }
      var rateObj = getAvgRateAndChangeTOOneQuarter(rates);
      this.setState(rateObj);
      console.log(this.state)

    })
  }
  render() {
    return (
      <div className = "singleCard">
        <h2>singleCard</h2>
        <p>{this.state.category}</p>
        <p>{this.state.name}</p>
        <p>{this.state.default_price}</p>
        <p>{this.state.discount_price}</p>
        <p>{this.state.img}</p>
        <p>{this.state.rate}</p>
      </div>
    )
  }
}