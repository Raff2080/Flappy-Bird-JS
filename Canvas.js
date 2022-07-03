class Canvas{
           static interval;
           static canvas=document.createElement("canvas")
           static ctx= this.canvas.getContext("2d")


    static AreaClear(){
        this.ctx.clearRect(0,0,innerWidth,innerHeight)
    }



   static start(){
       this.canvas.width=window.innerWidth
       this.canvas.height=window.innerHeight
       document.body.append(this.canvas)

       let objs=Obstacle.create()

           let temp=0


           this.interval=setInterval(()=>{
               if(temp%40===0)
                    GamePiece.y+=1
               temp+=10
               if(temp===2300){
                   objs.push(...Obstacle.create())
                   console.log(objs)
                   temp=0

               }

           this.AreaClear();
           GamePiece.clear(),
           Obstacle.clear(objs),
           GamePiece.crashedObstacle(objs)},
           10)

       GamePiece.createGamePiece()


    }
    static stop(){
               clearInterval(this.interval)

    }


}