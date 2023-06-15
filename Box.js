AFRAME.registerComponent('box' , {
    schema:{
        moveX : {type : "number" , default : 1}
    },
    init:function(){
        this.data.moveX-=0.1
    },
    tick:function(){

        window.addEventListener("click" , (e)=>{
            this.data.moveX = this.data.moveX - 0.1;
          })
        
        var pos = this.el.getAttribute("position")
        pos.x = this.data.moveX
        this.el.setAttribute("position" , {x:pos.x, y:pos.y , z:pos.z})
    }
})

AFRAME.registerComponent('garage' , {
    schema:{
        moveY : {type : "number" , default : -0.9}
    },
    init:function(){
        this.data.moveY-=0.01
    },
    tick:function(){
        window.addEventListener("click" , (e)=>{
            this.data.moveY = this.data.moveY - 0.01;
          })
        
        var pos = this.el.getAttribute("position")
        pos.y = this.data.moveY
        this.el.setAttribute("position" , {x:pos.x, y:pos.y , z:pos.z})
    }
})