// create a little stamp based button with hover anim
define.class('$base/stamp', function(){

	define.class(this, 'Background', '$shaders/rectshader', function(){
		this.color = 'red'
	})

	define.class(this, 'Label', '$shaders/fontshader', function(){
	})

	this.align = float.CENTER
	this.padding = 5
	//this.w = float.width('25%')
	this.margin = 1
	this.props = {
		text:'BUTTON',
		fontsize:15
	}

	this.states = {
		default:{
			duration:1,
			Background:{
				color: 'gray'
			},
			Label:{
			}
		},
		mousedown:{
			duration:1,
			w:150,
			h:150,
			Background:{
				cornerradius:vec4(50),
				borderwidth:vec4(10),
				color: 'orange',
			}
		},
		down:{
			Background:{
				color: 'red'
			}
		}
	}

	this.onpointerhover = function(event){
		//this.state = this.states.hover
	}

	this.onpointerout = function(event){
		//this.setState(this.states.default)
	}

	this.onpointerstart = function(){
		this.state = this.states.mousedown 
		//this.state = {duration:2,w:50,h:50, Background:{cornerradius:vec4(0,20,20,0)}}
		//this.canvas.view.redraw()
	}

	this.onpointerend = function(event){
		//this.setState(event.isover?this.states.hover:this.states.default)
	}

	this.draw = function(){
		var c = this.canvas
		c.beginBackground(this)
		if(this.text){
			c.drawLabel({
				text:this.text
			})
		}
		c.endBackground()
		/*
		c.beginBackground(this)

		if(this.text){
			c.drawLabel({text:'WHO'+this.text})
			if(state.icon) c.align.x += 5
		}

		// lets check what kind of icon we have, if its an image we need to draw an image
		if(typeof state.icon === 'string'){
			c.drawIcon()
		}
		else if(state.icon){
			c.drawImage()
		}
		c.endBackground()*/
	}

	this.canvasverbs = {
		draw: function(overload){
			this.STAMPPROPS()
			this.DRAWSTAMP()
		}
	}
})