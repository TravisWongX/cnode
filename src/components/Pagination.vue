<template>
 <div class="pagination">
   <button @click="changeBtn">首页</button>
   <button @click="changeBtn">上一页</button>
   <button v-if="judge" class="pagebtn">...</button>
   <button v-for="btn in pagebtns"
   @click="changeBtn(btn)" :key="btn"
   :class="[{currentPage:btn === currentPage}, 'pagebtn']">{{btn}}</button>
   <button @click="changeBtn">下一页</button>
 </div>

</template>

<script>
export default {
name: "Pagination.vue",
  data(){
  return {
    pagebtns:[1,2,3,4,5,'...'],
    currentPage: 1,
    judge: false
  }
  },
  methods: {
    changeBtn(page) {
      if(typeof page!=='number') {
        const btn = document.querySelector('button.currentPage')
        switch (page.target.innerText) {
          case '上一页':
            btn.previousElementSibling.dispatchEvent(new Event('click'))
            break
          case '下一页':
            btn.nextElementSibling.dispatchEvent(new Event('click'))
            break
          case '首页':
            this.pagebtns = [1, 2, 3, 4, 5, '...']
            this.changeBtn(1)
            break
          default:
            break;
        }
        return
      }
      this.currentPage = page
      this.judge = page > 4;

      if (page === this.pagebtns[4]) {
        this.pagebtns.shift()
        this.pagebtns.splice(4,0,this.pagebtns[3]+1)
      } else if (page === this.pagebtns[0] && page !== 1){
        this.pagebtns.unshift(this.pagebtns[0]-1)
        this.pagebtns.splice(5, 1)
      }
      this.$emit('handleList', this.currentPage)
    }
  }
}
</script>

<style scoped>
 .pagination {
   margin-top: 5px;
   margin-bottom: 20px;
   background-color: white;
   padding: 6px 20px;
   border-radius: 5px;
   border: 1px solid #888888;
 }
 button {
   background-color: #fff;
   border: 1px solid #ddd;
   color: #778087;
   border-right: 3px;
   outline: none;
   cursor: pointer;
   padding: 0 2px;
   width: 55px;
   height: 29px;
 }

 .pagebtn {
   position: relative;
   bottom: 1px;
   width: 40px;
   margin: 0 4px;
 }
 .currentPage {
   color: white;
   background-color: #1f1b1b;
 }
</style>