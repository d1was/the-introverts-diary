<template>
<div class="container">
  <h3 class="title">Movie Diary</h3>

  <section class="movies">
    <div class="columns is-multiline">
      <Movie v-for="mov in movie" :key="mov.movie_id" :id="mov.movie_id" :rating="getRating(mov.rating)" :review="mov.review" :date="mov.date" />
    </div>
  </section>
</div>
</template>

<script>
import Movie from './Movie'
import * as fb from '../firebase.config'
import {ratings} from '../ratings.js'

export default {
  name: 'HelloWorld',
  data(){
    return{
      movie: []
    }
  },
  props: {
    msg: String
  },
  components: {
    Movie
  },
  methods:{
    getRating(id){
      console.log(ratings)
      return ratings[id]
    }
  },
  mounted(){
    fb.moviesCollection.get().then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.data())
        this.movie.push(doc.data());
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
