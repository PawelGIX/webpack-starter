
import $ from "cash-dom";
import {
    makeObservable,
    observable,
    autorun,
    action
} from "mobx"




class CartBoxClass{
    quantity = 1;
    constructor({el = null}={}) {
        this.$el = $(el);
        this.$input = $(el).find('input');
        this.$minusBtn = $(el).find('.btn-icon.minus');
        this.$plusBtn = $(el).find('.btn-icon.plus');
        makeObservable(this, {
            quantity: observable,
            increment: action,
            decrement: action
        });
        this.quantity = parseInt(this.$input.val());

        this.$input.on('change', this.onChange);
        this.$minusBtn.on('click', e => {
            this.decrement();
        });
        this.$plusBtn.on('click', e => {
            this.increment();
        });

        autorun(() => {
            this.$input.val( this.quantity );
            console.log('this.quantity :>> ', this.quantity);
        });
    }

    increment() {
        
        this.quantity+=1;
    }

    decrement() {
        if (this.quantity > 1) {
            this.quantity-=1;
        }
    }

    /**
     * 
     * @param {KeyboardEvent} e 
     */
    onChange = (e) => {
        this.quantity = parseInt(e.target.value);
    }
}

var $carts = $('.cart-box');
const CartBox = $carts.map((e, el) => {
    return new CartBoxClass({ el: el });
});

window.CartBox = CartBox;
 
export default CartBox;
