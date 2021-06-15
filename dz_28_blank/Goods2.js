class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count);
        this.sale = sale
    }
    draw(out) {
        super.draw(out)
        document.querySelector(out).innerHTML += ` ${this.sale}`
    }
}