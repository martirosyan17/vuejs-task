import priceService from './../../services/price'

export default {
    name: 'Home',
    data () {
    return {
        msg: 'Welcome',
        data: {
            currency1: 'USD',
            currency2: 'EUR'
        },
        currencies: [
            { text: 'USD', value: 'USD' },
            { text: 'EUR', value: 'EUR' },
            { text: 'BTC', value: 'BTC' },
            { text: 'ETH', value: 'ETH' }
        ]
    }
},
mounted () {

},
methods: {
    calculate: function () {
      priceService.getPrice(this)
    }
}
}
