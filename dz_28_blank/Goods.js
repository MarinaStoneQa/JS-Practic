class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }

    draw(out) {
        document.querySelector(out).innerHTML += `<img src="${this.image}"> ${this.name} ${this.amount} ${this.count}`

    }
}

