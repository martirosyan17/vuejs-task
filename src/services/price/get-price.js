import Axios from 'axios'

export default (context) => {
  Axios.get('https://min-api.cryptocompare.com/data/price?fsym=' + context.data.currency1 + '&tsyms=' + context.data.currency2)
    .then(function (response) {
      console.log(response.data)
      alert(response.data[context.data.currency2])
    })
    .catch(function (error) {
      console.log(error)
    })
}
