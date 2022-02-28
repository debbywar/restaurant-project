<template>
  <div class="cart">
    <router-link to="/" class="cart--go-back" v-if="!isDesktop()"
      >←️ Voltar</router-link
    >
    <h2 class="cart--title">Seu pedido</h2>
    <div class="cart--content">
      <p v-if="hasNoItem">Seu carrinho ainda está vazio</p>
      <transition-group name="list">
        <CartItem v-for="item in cartList" :key="item.id" :item="item" />
      </transition-group>
    </div>
    <div class="cart--total" v-if="!hasNoItem">
      <span>Total: </span>
      <span class="price">{{ getCartTotal | currency }}</span>
    </div>
    <button
      class="primary-button payment-button"
      v-if="cartList.length && !isPaymentScreen"
      @click="goToPayment"
    >
      Finalizar compra
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "./CartItem";
import Mixin from "@/mixins/mixins";
import feather from "feather-icons";

export default {
  name: "Cart",
  mixins: [Mixin],
  components: {
    CartItem,
  },

  filters: {
    currency(value) {
      return `R$ ${value.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      })}`;
    },
  },

  computed: {
    ...mapGetters(["getCartTotal"]),
    cartList() {
      return this.$store.state.cartList;
    },
    hasNoItem() {
      return !this.cartList.length;
    },
    circleIcon() {
      return feather.icons.circle.toSvg();
    },
    isPaymentScreen() {
      return this.$route.name === "Payment";
    },
  },
  methods: {
    goToPayment() {
      this.$router.push({ name: "Payment" });
    },
  },
};
</script>

<style lang="less" scoped>
.cart .payment-button {
  width: 397px;
  margin: 20px auto;
}

.cart {
  background: white;
  width: 600px;
  height: 100vh;
  min-width: 600px;
  padding: 30px 30px 100px 30px;
  display: flex;
  flex-direction: column;

  &--go-back {
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
    color: black;
    display: none;
  }

  &--title {
    margin-top: 50px;
    font-weight: 600;
    font-size: 24px;
  }

  &--content {
    flex-grow: 1;
    overflow: auto;
  }

  &--total {
    font-weight: 600;
    font-size: 18px;
    text-align: right;
    margin-top: 30px;

    .price {
      color: @yellow;
      padding-left: 10px;
    }
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(-30px);
  }

  @media @small-desktops {
    width: 100%;
    max-width: 800px;
    margin: auto;
    min-width: unset;
    padding: 50px 20px 20px;
  }

  &--go-back {
    display: block;
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }

  .payment-button {
    max-width: 100%;
  }
}
</style>