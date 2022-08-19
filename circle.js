class Circle {


    area(r) {
       return Math.PI * r * r;
    }

    circumference (r){
        return 2 * Math.PI * r;
    }

}

module.exports = Circle;

// exports.area = function(r){
    // return Math.PI * r * r;
    console.log('sono area del cerchio');
// }
// 
// 
// exports.raggio = function(){
    // console.log('io invece sono il raggio');
// }