import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        //console.log(this.props);
        let summary = <Redirect to="/" />

        if (this.props.ingds) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
            summary = (
                < div >
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ingds}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler} />

                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div >
            );
        }

        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ingds: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    };
};

export default connect(mapStateToProps)(Checkout);
//if i don't have mapStateToProps but have mapDispatchToProps
//connect(null, mapStateToProps)