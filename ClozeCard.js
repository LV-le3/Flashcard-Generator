clozeCard = function (text,cloze){
    this.cloze= cloze;
    this.text= text;    
    this.fulltext=(this.text + " "+this.cloze);

    this.printStats = function(){
        console.log("..." + this.cloze);
        console.log( this.text);
        console.log(this.fulltext);
        console.log("*----------*");
    };
}



module.exports = clozeCard;
