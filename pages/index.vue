<style lang="scss">
$co: #000;
h1{
  color: $co;
}
.add-btn{
  display: block;
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>
<template>
  <div>
    <h1>Hello 111112311!</h1>
    <router-link to="/help" data-ga="aaa">幫助</router-link>
    <span data-ga="aaa">幫助</span>
    <span>{{res.info}}</span>
    <span class="add-btn" @click="add(2)">+1</span>
    <span>{{showData()}}</span>
  </div>
</template>

<script>
import { Api } from "_CFG_/api";
import { mapActions,mapState } from "vuex";

export default {
  asyncData({params}){
    return Api.test().then((res) => {
      return {res}
    });
  },
  computed: {
    ...mapState([
      'todo'
    ])
  },
  methods: {
    ...mapActions({
      add: 'todo/add'
    }),
    showData() {
      return this.todo.list + '';
    }
  },
  data () {
    // console.log(req);
    return {
      // name: req ? 'server' : 'client'
    }
  },
  mounted(){
    console.log(this.res)
  }
}
</script>
