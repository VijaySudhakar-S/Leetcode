/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let width = Math.floor(Math.sqrt(area))
    while(area%width !=0){
        width--
    }
    length = area/width
    return [length,width]
};