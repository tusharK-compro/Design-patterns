class Zombie{
    public color:string;
    public image:string;
    public cordX:number;
    public cordY:number;
    public width:number;
    public height:number;

    constructor(color:string, image:string){
        this.color=color;
        this.image=image;

    }

    public draw(){
        console.log('draw zombie');
    }
    public kill(){
        console.log('kill zombie');
    }
}