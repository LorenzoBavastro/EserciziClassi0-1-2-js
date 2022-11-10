const GeometricShape = require('./GeometricShape');

let s1 = new GeometricShape("Gianni","square", 4, 3, 3);
let s2 = new GeometricShape("Bibo","square", 4, 2, 2);

//console.log(s1.getAltezza())
//console.log(s1.calculatePerimeter());
//console.log(s2.calculatePerimeter());
//console.log(s1.calculateAreas());
//console.log(s2.calculateAreas());
//console.log(s1.compareShapes(s1, s2))
s1.drawShape();