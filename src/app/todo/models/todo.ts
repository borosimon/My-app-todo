
export class Todo{
    id : Number;
    title :String;
    comment:String;
    enabled:boolean;

    constructor(id:Number,title:String,comment:String,enabled:boolean){
        this.id=id;
        this.title=title;
        this.comment=comment;
        this.enabled=enabled;
    }
}