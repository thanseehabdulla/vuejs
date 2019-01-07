<template>
  <div>
  <div id="nav">
      <router-link to="/login">Login</router-link>
    </div>
  <h1> NRM </h1>
  <p> Please login here </p>
  <Row>
        <Col span="24" class="top10"><Input v-model="name" placeholder="Name" style="width: 300px" /></Col>
        <Col span="24" class="top10"><Input type="password" v-model="password" placeholder="Password" style="width: 300px" /></Col>
        <Col span="24" class="top10"><Button v-on:click="login(name,password)" type="primary">Login</Button></Col>
    </Row>
</div>
</template>


<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import router from '../router'

export default {
  name: 'login',
   beforeCreate() {
    console.log('Nothing gets called before me!')
    if(localStorage.status === "loggedin"){
      router.push({ name: "home" });
    }
  },
  methods: {                                   // Add this:
    ...mapMutations([
      
    ]),
    ...mapActions([                  // Add this
      ]),
    
    login: function (name,password) {
       if(name === "admin" && password === "admin123"){
        this.$Notice.open({
                    title: 'Login Success',
                    desc: 'Welcome'
                });
        router.push({ name: "home" });
        localStorage.status ="loggedin"
       }else{
        this.$Notice.open({
                    title: 'Login Failed',
                    desc: 'Please try again'
                });
       }
    },
  }
  }
</script>

<style scoped>
.top10{
  margin-top:10px;
}

</style>