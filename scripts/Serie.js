var Serie = /** @class */ (function () {
    function Serie(num, name, channel, seasons, desc, link, photo) {
        this.num = num;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.link = link;
        this.desc = desc;
        this.photo = photo;
    }
    Serie.prototype.getnum = function () { return this.num; };
    Serie.prototype.getname = function () { return this.name; };
    Serie.prototype.getchannel = function () { return this.channel; };
    Serie.prototype.getseasons = function () { return this.seasons; };
    Serie.prototype.getlink = function () { return this.link; };
    Serie.prototype.setnum = function (num) { this.num = num; };
    Serie.prototype.setname = function (name) { return this.name = name; };
    Serie.prototype.setseasons = function (seasons) { return this.seasons = seasons; };
    Serie.prototype.setlink = function (link) { return this.link = link; };
    return Serie;
}());
export { Serie };
