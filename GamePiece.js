class GamePiece{

    static ctx= Canvas.ctx
    static x=0;
    static y=innerHeight/2;
    static color="#916e80"

    static clear(){

        GamePiece.ctx.fillStyle=GamePiece.color
        GamePiece.ctx.fillRect(this.x,this.y,40,40);
    }

    static createGamePiece(){

         this.ctx.fillStyle=GamePiece.color
         this.ctx.fillRect(this.x,this.y,100,100)

    }
    static controls(e){
        let  nx=GamePiece.x
        let ny=GamePiece .y


        if(e.keyCode===87){
            if(GamePiece.y>=0) {
                ny -= 10;
                GamePiece.color="#916e7e"

            }
        }
        if(e.keyCode===83){
            if(GamePiece.y<innerHeight) {
                ny += 10;
                GamePiece.color="#916e7e"
            }
        }
        if(e.keyCode===65){
            if(GamePiece.x>0) {
                nx -= 10;
                GamePiece.color="#916e7e"
            }
        }
        if(e.keyCode===68 && GamePiece.x<innerWidth){
              nx+=10;
            GamePiece.color="#916e7e"
        }

        GamePiece.x=nx;
        GamePiece.y=ny;
       e.preventDefault()
    }
    static crashedObstacle(objs){
        if(objs[0]){
        if(objs[0].x<0){
            objs.shift()
            objs.shift()
        }
        for(let i=0;i<objs.length;i+=2){
            objs[i].x-=1
            objs[i+1].x-=1

           if(GamePiece.x+40>=objs[i].x && GamePiece.x<=objs[i].x+10){
                 if(GamePiece.y<=objs[i].height || GamePiece.y+40>=objs[i].height+objs[i].gap){
                     console.log(`${objs[i].height}+${objs[i].gap}<=${GamePiece.y}<${objs[i].height}`)
                     Canvas.stop()}
            }
           else {}
        }



}}
}