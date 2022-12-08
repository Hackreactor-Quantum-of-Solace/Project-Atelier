import React from 'react'

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props) (
      this.state = {
        review: []
      }
    )
  }

  handleSubmit () {
    //will new review go into API?
  }

  render () {
    return(
      <h3>this will be a form to input reviews</h3>
    )
  }
}

/**
 * NOTES/QUESTIONS/CONFIRM:
 *
 * Add A Review button can be rendered here
 *
 */