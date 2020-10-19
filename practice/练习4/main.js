const app = new Vue({
  el: "#app",
  data: {
    books: [
      {id: 001, name: "《老人与海》", date: '1995-6', price: 36.78, count: 1 },
      {id: 002, name: "《傲慢与偏见》", date: '1996-6', price: 40.5, count: 1 },
      {id: 003, name: "《小红帽》", date: '1997-6', price: 51.99, count: 1 },
      {id: 004, name: "《基督山伯爵》", date: '1998-6', price: 70.87, count: 1 },
    ]
  },
  methods: {
    add(index) {
      //console.log('增加')
      this.books[index].count++
    },
    reduce(index) {
      //console.log('减少')
      this.books[index].count--
    },
    remove(index) {
      this.books.splice(index, 1)
    }
  },
  // 过滤器
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0
      // let item of this.books，取到books里边的每一项的值
      for (let i of this.books) {
        console.log(i)
        totalPrice += i.price * i.count
      }
      return totalPrice
    }
  }
})