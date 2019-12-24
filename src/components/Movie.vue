<template>
    <div class="column is-">
        <div class="movie-card">
            <figure class="poster">
                <img :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movie.poster_path" alt="">
            </figure>
            <div class="movie-details">
                <h5 class="title">{{ movie.title }}</h5>
                <div class="genre-list"><span class="genre" v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}, </span></div>
                <div class="tags">
                    <span class="imdb tag">{{ movie.vote_average }}</span>
                    <span class="tag is-primary">{{ rating }}</span>
                <span class="tag date is-info">2019-02-12</span>

                <span class="tag is-danger is-small"> {{ saying }}... </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            movie: null,
        }
    },
    computed:{
        saying(){
            let arrRev = this.review.split(' ');
            return arrRev.slice(0, 5).join(' ');
        }
    },
    props: ['id', 'rating', 'review'],
    mounted(){
        axios.get('https://api.themoviedb.org/3/movie/' + this.id +'?api_key=25d38efe44b241699eb994275cafff06&language=en-US')
             .then( movie => {
                 this.movie = movie.data
             }).catch(err => {
                 console.log(err)
             })
    }
}
</script>

<style scoped>
    .movie-card{
        max-width: 280px;
        min-height: 400px;
        border: 1px solid rgba(0,0,0,0.07);
        border-radius: 14px;
        overflow: hidden;
    }
    .movie-card .poster{
        width: 100%;
        height: 300px;
        position: relative;
        overflow: hidden;
    }
    .movie-card .poster img{
        position:absolute;
        left: 0;
        top:0;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .movie-card .movie-details{
        padding: 12px 10px;
    }
    .movie-card .movie-details .title{
        font-size: 20px;
        margin-bottom: 0;
        letter-spacing: 1px;
    }
    .movie-details .genre-list{
        font-size: 12px;
        color: #444;
    }
    .movie-details .tags{
        margin-top: 10px;
    }
</style>