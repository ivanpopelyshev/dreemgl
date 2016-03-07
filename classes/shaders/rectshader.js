define.class('$shaders/pickshader', function(){

	this.mesh = vec2.array()
	this.mesh.pushQuad(0,0,1,0,0,1,1,1)

	this.position = function(){
		var pos = vec3(canvas.x + mesh.x * canvas.w, canvas.y + mesh.y * canvas.h, canvas.z)
		var res = vec4(pos, 1) * canvas.matrix * view.totalmatrix * state.viewmatrix
		return res + vertex_displace
	}

	this.color = function(){
		var col = canvas.color
		return vec4(col.rgb, col.a)
	}

	this.defaults = {
		x:'this.scope._layout?0:this.scope.x',
		y:'this.scope._layout?0:this.scope.y',
		w:'this.scope._layout?this.scope._layout.width:this.scope.w',
		h:'this.scope._layout?this.scope._layout.height:this.scope.h',
		color:'this.scope._layout?this.scope._bgcolor:this.scope.color'
	}

	this.canvas = {
		matrix:mat4,
		color:vec4,
		x:float,
		y:float,
		w:float,
		h:float,
		z:float
	}

	this.canvasverbs = {
		draw:function(x, y, w, h){
			// this processes the args and builds up a buffer
			this.drawINLINE()
		}
	}
})