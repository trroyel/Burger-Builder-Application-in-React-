import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

class Orders extends Component {
    render() {
        return (
            <div>
                <Order />
                <Order />
            </div>
        );
    }
}

export default Orders;