const app = new Vue({
    el: "#app",
    data: {
        message: "购物车",
        books: [
            {id: 1, name: "《python算法》", data: "2000-09-16", price: 86.00, count: 1},
            {id: 2, name: "《java笔记》", data: "2000-10-17", price: 50.89, count: 1},
            {id: 3, name: "《php是怎么练成的》", data: "2000-11-19", price: 60.89, count: 1},
            {id: 4, name: "《goLang学习》", data: "2000-05-18", price: 70.89, count: 1},
        ]
    },
    methods: {
        reduce(index) {
            return this.books[index].count--
        },
        add(index) {
            return this.books[index].count++
        },
        remove(index) {
            return this.books.splice(index, 1)
        }
    },
    computed: {
        totalPrice() {
            let totalPrice = 0
            for (let i=0; i < this.books.length; i++){
                totalPrice += this.books[i].price * this.books[i].count
            }
            return totalPrice
        },
        totalPrice_2() {
            let totalPrice_2 = 0
            // for j of this.books，j的值为books内的对象
            for (let j of this.books) {
                totalPrice_2 += j.price * j.count
            }
            return totalPrice_2
        }
    },
    // 过滤器
    filters: {
        showPrice(price) {
            return "￥" + price.toFixed(2)
        }
    }
})