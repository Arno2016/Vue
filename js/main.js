new Vue({
	el:'#app',
	data:{
		message:'hello world !'
	}
})

var app2=new Vue({
	el:'#app2',
	data:{
		message:'hello app2 ! And now is '+new Date().toLocaleString()
	}
})

var app3=new Vue({
	el:'#app3',
	data:{
		message:'Now,you can see me!',
		flag:true,
		users:[
			{name:'harvey1',age:12},
			{name:'harvey2',age:13},
			{name:'harvey3',age:14}
		]
	},
	methods:{
		showOrNot:function(){
			this.flag=!this.flag;
		}
	}

})

var app4=new Vue({
	el:'#app4',
	data:{
		message:'default content'
	}
})
app4.$watch('message',function(newValue,oldValue){
		console.log('new value='+newValue,"   old value="+oldValue);
	})


Vue.component('my-component', {
	props:['todo'],
	template: '<div>A custom component!==&gt;{{todo}}</div>'
})
new Vue({
	el:'#app5',
	data:{
		users:[
			{name:'harvey1',age:12},
			{name:'harvey2',age:13},
			{name:'harvey3',age:14}
		]
	}

})