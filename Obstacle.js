class Obstacle{

    constructor(X,Y,W,H,P="UP",gap=0){
        this.x=X;
        this. y=Y;
        this.width=W;
        this.height=H;
        this.ctx=Canvas.ctx
        this.pos=P
        this.gap=gap
    }
    createObstacle(){
       this.ctx.fillStyle="green"
       this.ctx.fillRect(this.x,this.y,this.width,this.height)
    }
    static create(){
        let objs=[]

            let x = innerWidth;
            let minHeight = 20;
            let  maxHeight = innerHeight/2;
            let height = Math.floor(Math.random()*(maxHeight-minHeight+3)+minHeight);
            let minGap = 50;
            let maxGap = 150;
            let gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap)+10;

            let first=new Obstacle(innerWidth,0,10,height,"UP",gap)
            let second=new Obstacle(x,height+gap,10,x-height-gap,"DOWN",gap)

            first.createObstacle()
            second.createObstacle()

            objs.push(first);
            objs.push(second);

            return objs
        }

    static clear(objs){
        if(objs[0]){
            objs.forEach(obj=> {
                obj.ctx.fillStyle = "green"
                obj.ctx.fillRect(obj.x, obj.y, obj.width, obj.height)
            })
    }}


}


