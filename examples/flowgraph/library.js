/* Copyright 2015 Teem2 LLC. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  
   You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, 
   software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, 
   either express or implied. See the License for the specific language governing permissions and limitations under the License.*/

define.class('$ui/view', function(require, $ui$, view, icon, treeview, cadgrid, label, button, $$, ballbutton){
	
	define.class(this, "classlibclass", view, function($ui$, view, label, icon){
		this.attributes = {
			classdesc: Config({type:Object, value: undefined}),
			col1: Config({value:vec4("#454545"), persist:true, meta:"color", motion:"linear", duration:0.1}),
			col2: Config({value:vec4("#454545"), persist:true, meta:"color", motion:"linear", duration:0.2})
		}
		
		this.bg = {
			color: function(){
				var fill = mix(view.col1, view.col2,  (mesh.y)/0.8)
				return fill;
			}			
		}
		
		console.log(this.name)
		this.bg = 1
		this.margin = vec4(2,2,2,0)
		this.justifycontent = "flex-start"
		this.alignitems = "center"
		///this.aligncontent = "center"
		this.render = function(){
			return [
				//view({bgcolor:"#707070", width:30, height:30, borderwidth:1, borderradius:2, bordercolor:"#505050", margin:2, justifycontent:"center" }
				//	,icon({icon:"cube", fgcolor:this.fgcolor,margin:0,alignself:"center", fontsize:20})
				//)
				//,
				label({text:this.classdesc.name, margin:3,fgcolor:this.fgcolor, bg:0})
			]
		}
	})

	
	define.class(this, "libraryfolder", view, function($ui$, view, foldcontainer){
		
		this.attributes = {
			dataset:Config({type:Object}),
			//fontsize:Config({type:float, meta:"fontsize", value: 15})
		}
		this.flexwrap  = "nowrap" 
		
		this.flexdirection = "column" 
		this.fgcolor = "#f0f0f0"
		this.bgcolor = "#3a3a3a"

		this.render =function(){
			var data = this.dataset

			if (!this.dataset) return [];
					
			var res = [];
			for(var a  in data.children){
				var ds = data.children[a];
				if (!ds.children || ds.children.length == 0){
					res.push(this.outer.classlibclass({classdesc: ds, fgcolor:this.fgcolor}));
				}
			}
			
			return foldcontainer({title:data.name, basecolor:vec4("#303030"),padding:0,bordercolor:vec4("#3b3b3b"),icon:undefined},view({bg:0, flex:1,flexdirection:"column"},res));
		}
	})
	
	this.flex = 1;
	this.attributes = {
		dataset:{},
//			fontsize:Config({type:float, meta:"fontsize", value: 15})
	}
	this.overflow = "scroll" 
	this.flexdirection = "column" 
	this.fgcolor = "#f0f0f0"
	this.bgcolor = "#3a3a3a"
	this.render =function(){
		var data = this.dataset.data
		if (!this.dataset) return [];
		
		var res = [];
		for(var a  in data.children){
			var ds = data.children[a];
			if (ds.children && ds.children.length > 0){			
					res.push(this.libraryfolder({dataset: ds, fgcolor:this.fgcolor}));
				}
			}
		
		return res;
	}

})