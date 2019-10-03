Vue.component('fu', {
    template:
    '<g @mouseover="mover()" @mouseleave="mleave()" @click="move"'+
	':transform="trans"><polygon  :points="points" stroke = "black" fill = "wheat"></polygon><text x="50" y="50" font-size="35">歩</text></g>',

    props: ["x","y","teban", "idx"],
    
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
	    this.$emit("moved", this.idx);
	},
	mover:function(){
	    this.$emit("hover", this.idx);
	},
	mleave:function(){
	    this.$emit("mleave", this.idx);
	}
    }
})

Vue.component('ban',{
    template: '<g transform = "translate(100,100)" >'+
	'<g v-for="(r,i) in masu"> <rect v-for="(c,j) in r" :x="100+100*j" :y="100+100*i" width="100" height="100" stroke="black" :fill="masu[j][i]==0? white:pink"></rect></g>'+
	'<fu v-for="(f,idx) in fu" @moved="move()" @hover="relocate" @mleave="mleave" :teban="f.teban" :x="f.x" :y="f.y" :idx=idx></fu>' +
	'<ou v-for="o in ou" :teban="o.teban" :x="o.x" :y="o.y"></ou>' +
	'<gin v-for="g in gin" :teban="g.teban" :x="g.x" :y="g.y"></gin></g>',
    data: function(){
	return {
	    fu:[{x:1,y:1,teban:0, nari:false},{x:3,y:3,teban:1,nari:false}],
	    ou:[{x:2,y:1,teban:0},{x:2,y:3,teban:1}],
	    gin:[{x:0,y:0,teban:0},{x:4,y:4,teban:1}],
	    masu:[[0,0,0],[0,0,0],[0,0,0]],
	    white:"white",
	    pink:"pink",
	};
    },
    methods:{
	possiblePositionsFu: function(i){
	    if (!this.fu[i].nari){
		if (this.fu[i].teban==0){
		    if (this.fu[i].y <= 1){
			return [{x:this.fu[i].x, y:this.fu[i].y+1}];
		    }
		    else {
			return [];
		    }
		}
		else{
		    if (this.fu[i].y >= 1){
			return [{x:this.fu[i].x, y:this.fu[i].y-1}];
		    }
		    else {
			return [];
		    }
		}
	    }
	    else{
		return [];
	    }
	},
	relocate: function(i){
	    for (let p of this.possiblePositionsFu(i)){
		console.log(p);
		this.masu[p.x-1].splice(p.y-1,1,1);
	    }
	},
	mleave: function(i){
	    this.masu = [[0,0,0],[0,0,0],[0,0,0]];
	},
	move: function(){
	    alert("abc");
	}
    }
})


Vue.component('ou', {
  template:
    '<g @click="move()":transform="trans"><polygon  :points="points" stroke = "black" fill = "wheat"></polygon><text x="50" y="50" font-size="35">玉</text></g>',
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
    move:function(event){

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
  '<g @click="move()":transform="trans"><polygon  :points="points" stroke = "black" fill = "wheat"></polygon><text x="27" y="70" font-size="45">銀</text></g>',
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
