<template>
  <section id="showcase" class="content">
    <h1 class="default">Najbolj zaželene knjige</h1>
    <div
        class="grid"
        v-if="!loading"
        ref="grid"
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
            <div class="btn red">
              <span>Prelistaj</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import FavoriteBooks from '../assets/json/favorite-books.json'
import textFilters from '../mixins/textFilters.js'
import scrollIntoView from '../mixins/scrollIntoView.js'
import _ from 'lodash';

export default {
  name: 'showcase',
  mixins: [textFilters, scrollIntoView],
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
    this.setupScroll();
  },
  methods: {
    expand(i) {
      this.books[i].expanded = !this.books[i].expanded;
      this.$forceUpdate();
    },
    setupScroll() {
      setTimeout(() => {
        const vh = window.innerHeight;
        const child = this.$refs.grid;

        if (document.documentElement.scrollTop + vh / 1.5 >= child.offsetTop) {
          this.scroll("grid", "scroll-up 0.5s");
          return;
        }

        document.addEventListener('scroll', _.debounce(() => {
          this.scroll("grid", "scroll-up 0.5s");
        }, 50));
      }, 1000);
    }
  }
}

</script>

<style lang="scss">

#showcase {
  margin-top: 140px;

  @include breakpoint(xs-only) {
    margin: 140px 0 50px;
  }

  .grid {
    //transform: translateY(300px);
    visibility: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .card {
      width: 380px;
      height: -webkit-fit-content;
      height: -moz-fit-content;
      height: fit-content;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      margin: 20px;
      padding: 20px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      -moz-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

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
}

</style>
