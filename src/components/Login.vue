<template>
    <section>
        <div class="login-container">
        <b-field label="Username"
            :type="{ 'is-danger': hasError }"
            :message="{ 'Your supplied credentials doesn\'t match': hasError }">
            <b-input value="johnsilver" maxlength="30" v-model="username"></b-input>
        </b-field>

        <b-field label="Password"
            :type="{ 'is-danger': hasError }">
            <b-input value="123" type="password" maxlength="30" v-model="password"></b-input>
        </b-field>          

         <b-button type="is-primary" @click="submit" icon-left="github-circle">Login</b-button>
  
        </div>

    </section>
</template>


<script>
export default {
   data() {
        return {
            hasError: false,
            username: 'd1was',
            password: ''
            }
    },
    methods: {
        submit(){
            if(this.username == 'd1was' && this.password == 'fu6s0c13ty'){
                localStorage.setItem('d1wasLoggedPass', true);

                this.$router.replace({
                    path: '/'
                })
            }
            else{
                this.hasError = true;
            }
        }
    }    
}
</script>

<style scoped>

.login-container{
    width: 400px;
    margin: 0 auto;
}
.login-container label.label{
    text-align: left;
}
</style>