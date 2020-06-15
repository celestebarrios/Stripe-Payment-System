let stripe = Stripe('pk_test_51GuK5SBBK2tZhlYFxNyVjFy561JZ52jOOo8Ksa7ugtuGpH4L56KXn6zWfeW74aPfOyyZVZocdeGJHuppwgMlb6Ik00vVodrmIR');
let elements = stripe.elements();
let style = {
    base: {
        color: '#32325d',
    }
}
let card = elements.create("card", {style: style});
card.mount("#card-element");