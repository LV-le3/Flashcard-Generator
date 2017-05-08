basic = function(front, back){
    this.front = front;
    this.back = back;

    this.printStats = function(){
        console.log(this.front);
        console.log(this.back);
        console.log("*----------*");
    }

}

module.exports = basic;
