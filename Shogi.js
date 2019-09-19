Vue.component('fu', {
  template:
  '<g @click="move()":transform="trans"><polygon  :points="points" stroke = "black" fill = "wheat"></polygon><text x="50" y="50" font-size="35">歩</text></g>',
  props: ["x","y","teban"],
    computed:{
	trans: function(){
	    return "translate(" + parseInt(this.x)*100 + "," + parseInt(this.y)*100 + ")";
	},
    points:function(){
	if (this.teban==0){
          return "5 0 10 70 50 100 90 70 95 0";
      }
      else {
          return "5 100 10 30 50 0 90 30 95 100";
      }
    }
  },

  methods:{
      move:function(){
	  console.log("move");
	  this.$emit("move");
      }
  }
})

Vue.component('ban',{
    template: '<g> </g>'
})


Vue.component('ou', {
  template:
  '<polygon @click="move($event)" :points="points" stroke = "black" fill = "wheat"></polygon>',
  // '<text x="0" y="30" fill="blue">本日は晴天なり</text>',
  props: ["x","y","teban"],
  computed:{
    points:function(){
      if (this.teban==0){
        pstr ="";
        pstr +=(5+parseInt(this.x)*100+" ");
        pstr +=(parseInt(this.y)*100+" ");
        pstr +=(10+parseInt(this.x)*100+" ");
        pstr +=(70+parseInt(this.y)*100+" ");
        pstr +=(50+parseInt(this.x)*100+" ");
        pstr +=(100+parseInt(this.y)*100+" ");
        pstr +=(90+parseInt(this.x)*100+" ");
        pstr +=(70+parseInt(this.y)*100+" ");
        pstr +=(95+parseInt(this.x)*100+" ");
        pstr +=(parseInt(this.y)*100+" ");
        // return "5 0 10 70 50 100 90 70 95 0";
        return pstr;
      }
      else {
        pstr ="";
        pstr +=(5+parseInt(this.x)*100+" ");
        pstr +=(100+parseInt(this.y)*100+" ");
        pstr +=(10+parseInt(this.x)*100+" ");
        pstr +=(30+parseInt(this.y)*100+" ");
        pstr +=(50+parseInt(this.x)*100+" ");
        pstr +=(parseInt(this.y)*100+" ");

        pstr +=(90+parseInt(this.x)*100+" ");
        pstr +=(30+parseInt(this.y)*100+" ");

        pstr +=(95+parseInt(this.x)*100+" ");
        pstr +=(100+parseInt(this.y)*100+" ");
        // return "5 100 10 30 50 0 90 30 95 100";
        return pstr;
      }
    }
  },
  methods:{
    move:function(event){
      //alert (event.offsetX);
      // this.searchBlock(event);
      currentX = parseInt(event.offsetX/100);
     currentY  = parseInt(event.offsetY/100);
      //alert (currentX + " " +currentY);
      number = (currentY - 1)*3 + currentX -1;
alert(number);
    }
    // searchBlock: function(event){
    //
    //    // alert (currentY);
    // }

  }

})


Vue.component('gin', {
  template:
  '<polygon @click="move($event)" :points="points" stroke = "black" fill = "wheat"></polygon>',
  // '<text x="0" y="30" fill="blue">本日は晴天なり</text>',
  props: ["x","y","teban"],
  computed:{
    points:function(){
      if (this.teban==0){
        pstr ="";
        pstr +=(5+parseInt(this.x)*100+" ");
        pstr +=(parseInt(this.y)*100+" ");
        pstr +=(10+parseInt(this.x)*100+" ");
        pstr +=(70+parseInt(this.y)*100+" ");
        pstr +=(50+parseInt(this.x)*100+" ");
        pstr +=(100+parseInt(this.y)*100+" ");
        pstr +=(90+parseInt(this.x)*100+" ");
        pstr +=(70+parseInt(this.y)*100+" ");
        pstr +=(95+parseInt(this.x)*100+" ");
        pstr +=(parseInt(this.y)*100+" ");
        // return "5 0 10 70 50 100 90 70 95 0";
        return pstr;
      }
      else {
        pstr ="";
        pstr +=(5+parseInt(this.x)*100+" ");
        pstr +=(100+parseInt(this.y)*100+" ");
        pstr +=(10+parseInt(this.x)*100+" ");
        pstr +=(30+parseInt(this.y)*100+" ");
        pstr +=(50+parseInt(this.x)*100+" ");
        pstr +=(parseInt(this.y)*100+" ");

        pstr +=(90+parseInt(this.x)*100+" ");
        pstr +=(30+parseInt(this.y)*100+" ");

        pstr +=(95+parseInt(this.x)*100+" ");
        pstr +=(100+parseInt(this.y)*100+" ");
        // return "5 100 10 30 50 0 90 30 95 100";
        return pstr;
      }
    }
  },

  methods:{
    move:function(event){
      //   alert("aiueo")
      // this.$emit('move2')
      currentX = parseInt(event.offsetX/100);
     currentY  = parseInt(event.offsetY/100);
        //alert (currentX + " " +currentY);

        number = (currentY - 1)*3 + currentX -1;
  alert(number);
    }

  }

})


new Vue({
  el:"#app",
  data:{
    fu:[{x:1,y:1,teban:0},{x:3,y:3,teban:1}],
    ou:[{x:2,y:1,teban:0},{x:2,y:3,teban:1}],
    gin:[{x:0,y:0,teban:0},{x:4,y:4,teban:1}]
  },
  methods:{
    move:function(){
	alert("abc")
    }
  }
})
