<template>
  <section id="showcase" class="content has-title">
    <h1 class="default">Najbolj zaželene knjige</h1>
    <div
      class="grid"
      v-if="!loading"
      id="fav-books-grid"
    >
      <div
        v-for="(book, i) in books"
        :key="book.id"
        class="card"
      >
        <img :src="'images/covers/' + book.img" alt="Ovitek">
        <div class="text">
          <h2>{{ book.title }}</h2>
          <span class="promo">- 30 % s kodo BOZICVOKTOBRU30</span>
          <p v-if="!book.expanded" @click="expand(i)">
            {{ book.description | trimToMaxLength(150) }}
            <span class="more">VEČ</span>
          </p>
          <p v-else @click="expand(i)" class="expanded">
            {{ book.description }}
          </p>
          <div class="bottom">
            <span class="price">{{ book.price }}</span>
            <div class="btn empty">
              <span>Prelistaj</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn blue-gray">
      <span>Ostale knjige</span>
    </div>
  </section>
</template>

<script>

import FavoriteBooks from '../assets/json/favorite-books.json'
import textFilters from '../mixins/textFilters.js'

export default {
  name: 'showcase',
  mixins: [textFilters],
  data() {
    return {
      loading: true,
      books: undefined
    }
  },
  mounted() {
    this.books = FavoriteBooks;
    
    this.books.forEach((el) => {
      el.expanded = false;
    });

    this.loading = false;
  },
  methods: {
    expand(i) {
      this.books[i].expanded = !this.books[i].expanded;
      this.$forceUpdate(); // TODO: maybe do dynamic style instead of forceUpdate
    }
  }
}

</script>

<style lang="scss">

#showcase {

  .grid {
    visibility: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: left;

    &.animate {
      visibility: visible;
      -webkit-animation: scroll-up 0.5s;
      animation: scroll-up 0.5s;
    }

    .card {
      width: 380px;
      height: -webkit-fit-content;
      height: -moz-fit-content;
      height: fit-content;
      min-height: 613px;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      margin: 20px;
      padding: 20px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      -moz-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

      @media (min-width: 2000px) {
        min-height: 717px;
      }

      @include breakpoint(xs-only) {
        max-width: 380px;
        width: 100%;
      }

      img {
        width: 350px;
        margin: auto;
        padding-top: 10px;

        @include breakpoint(xs-only) {
          width: 100%;
        }
      }

      .text {
        padding: 0 15px 30px;

        .promo {
          color: #fa8072;
          font-weight: 600;
        }

        p {
          cursor: pointer;
          line-height: 1.7rem;

          .more {
            color: $salmon;
            font-weight: 600;
          }

          &:not(.expanded) {
            max-height: 180px;
          }

          &.expanded {
            transition: max-height 0.4s ease;
            max-height: 400px;
            overflow: hidden;
          }
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;

          .price {
            font-size: 1.3rem;
            color: $salmon;
          }

          .btn {
            margin: 0;

            @include breakpoint(xs-only) {
              padding: 0 20px;
            }

            span {
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  }

  .btn.blue-gray {
    margin-top: 30px;
  }
}

</style>
