"use strict";
{
    function calculateShapeArea(shape) {
        if (shape.shape === "circle") {
            const calculateCilcle = (Math.PI * shape.radius * shape.radius).toFixed(2);
            return calculateCilcle;
        }
        else if (shape.shape === 'rectangle') {
            return shape.width * shape.height;
        }
    }
    // const myCicle:Circle = {shape:"circle",radius:5};
    // const myRectangle:Rectangle = {shape:"rectangle",width:4,height:6};
    // console.log(calculateShapeArea(myCicle));
    // console.log(calculateShapeArea(myRectangle));
}
