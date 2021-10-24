import Vue from 'vue'

const formatter = new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
});

export default () => {
  Vue.filter('currency', (value) => {
    if (value > 0.0) return formatter.format(value)
    return value
  })
}
