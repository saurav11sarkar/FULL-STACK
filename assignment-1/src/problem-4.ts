{
    // problem-4
    // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    type Circle = {
        shape: 'circle';
        radius: number;
    }
    type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number;
    }
    type Shape = Circle | Rectangle;

    function calculateShapeArea(shape: Shape) {
        if (shape.shape === "circle") {
            const calculateCilcle = (Math.PI * shape.radius * shape.radius).toFixed(2);
            return calculateCilcle
        } else if (shape.shape === 'rectangle') {
            return shape.width * shape.height;
        }
    }

    // const myCicle:Circle = {shape:"circle",radius:5};
    // const myRectangle:Rectangle = {shape:"rectangle",width:4,height:6};

    // console.log(calculateShapeArea(myCicle));
    // console.log(calculateShapeArea(myRectangle));

}