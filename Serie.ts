export class Serie {

    num:number;
    name:string;
    channel:string;
    seasons:number;
    link:string;
    desc:string;
    photo:string;

    constructor(num:number, name:string, channel:string, seasons:number, link:string, desc:string, photo:string) {
        this.num = num;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.link = link;
        this.desc = desc;
        this.photo = photo;
    }

    getnum():number { return this.num; }
    getname():string { return this.name; }    
    getchannel():string { return this.channel; }  
    getseasons():number { return this.seasons; } 
    getlink():string { return this.link; }

    setnum(num:number) { this.num = num; }
    setname(name:string) { return this.name = name; }
    setseasons(seasons:number) { return this.seasons = seasons; }
    setlink(link:string) { return this.link = link; }
    
}