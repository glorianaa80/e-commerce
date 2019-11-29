import React from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';
import BuyModal from '../buyModal/buyModal';

class BuyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      total: ''
    }
  }

  render() {
    return (
      <StripeProvider apiKey="pk_test_oC05FR918WMa1PLXrI5IyKiU00NVBGpndz">
        <Elements>
          <BuyModal />
        </Elements>
      </StripeProvider>
    )
  }

}

export default BuyCard;