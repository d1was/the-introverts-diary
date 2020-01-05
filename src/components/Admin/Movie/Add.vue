<template>
    <section class="container">
        <h4 class="title">Add New Movie</h4>
       <b-field horizontal label="Find a Movie">
            <b-autocomplete
                v-model="searchQuery"
                :data="filteredData"
                placeholder="e.g. Taxi Driver"
                icon="magnify"
                @keyup="searchMovie"
                @select="option => selected = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
        <!-- <b-field horizontal label="From">
            <b-input name="name" placeholder="Name" expanded></b-input>
            <b-input name="email" type="email" placeholder="nobody@nowhere.com" expanded></b-input>
        </b-field> -->

        <b-field horizontal label="My Label">
            <b-select v-model="myRating" placeholder="My Rating">
                <option value="1">Don't ever watch it</option>
                <option value="2">Boring as Frog</option>
                <option value="3">Kind of watchable</option>
                <option value="4">Wow I like that</option>
                <option value="5">You should see this</option>
                <option value="6">Leave everything and watch this</option>
            </b-select>
        </b-field>

        <b-field horizontal label="Review Man" >
            <b-input type="textarea" v-model="review"></b-input>
        </b-field>
        <b-field horizontal label="Watched Date" >
            <b-input type="date" v-model="date"></b-input>
        </b-field>

        <b-field horizontal><!-- Label left empty for spacing -->
            <p class="control">
                <button @click="submitMovie" class="button is-primary">
                  Give up man !! Submit it
                </button>
            </p>
        </b-field>

    </section>
</template>


<script>
import * as fb from '../../../firebase.config.js'
import axios from 'axios'
export default {
    data(){
        return{
            searchQuery: '',
            movies: [],
            selected: null,
            myRating: '',
            review: '',
            date: ''
        }
    },
    watch: {
        searchQuery(){
            this.searchMovie();
        }
    },
    computed: {
        filteredData(){
        let filter =  this.movies.map( mov => {
                return mov.title;
            })
            return filter
        }
    },
    methods:{
        searchMovie(){
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=25d38efe44b241699eb994275cafff06&language=en-US&query=' + this.searchQuery + '&page=1&include_adult=false')
                .then( data => {
                    this.movies = data.data.results
                }).catch(err => {
                    console.log(err)
                })
        },
        submitMovie(){
            fb.moviesCollection.add({
                movie_id: this.movies[0].id,
                rating: this.myRating,
                review: this.review,
                date: this.date
            }).then( () => {
                this.review = '',
                this.searchQuery = '',
                this.myRating = ''
            }).catch(err => {
                console.log(err)
            })
        }
    },
}
</script>