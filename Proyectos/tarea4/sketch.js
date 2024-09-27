let maxLevel = 3;  // Nivel máximo de recursión
let baseRadius = 100;  // Radio base para la figura más grande
let numShapes = 5;  // Número de sub-figuras por nivel

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  angleMode(DEGREES);
  
  background(0, 15);   // Fondo semitransparente para crear el efecto de desvanecimiento

  translate(width / 2, height / 2);  // Centrar el origen en el canvas

  // Usar la posición del cursor para cambiar el comportamiento del fractal
  let t = map(mouseX, 0, width, 0, 360);  // Relacionar el movimiento del mouse con el ángulo
  let scaleFactor = map(mouseY, 0, height, 0.5, 1.5);  // Controlar el tamaño con el mouseY

  fractalShape(baseRadius * scaleFactor, maxLevel, t, 0);  // Iniciar fractal con interacción
}

// Función recursiva para dibujar los fractales de forma geométrica (cuadrados)
function fractalShape(radius, level, t, rotation) {
  // Color celeste claro, más claro a niveles más bajos
  let r = map(level, 0, maxLevel, 150, 200);  
  let g = map(level, 0, maxLevel, 220, 240);  
  let b = map(level, 0, maxLevel, 255, 255);  

  stroke(r, g, b);  // Celeste claro para el borde
  strokeWeight(2);

  // Dibujar la forma principal (cuadrado)
  push();
  rotate(t + rotation);
  polygon(0, 0, radius, 4);  // Dibujar un cuadrado
  pop();

  if (level > 0) {
    let angle = 360 / numShapes;  // Dividir el espacio en sub-formas
    let newRadius = radius * 0.6;  // Reducir el tamaño de las sub-formas

    for (let i = 0; i < numShapes; i++) {
      let x = cos(angle * i + t + rotation) * (radius + newRadius);
      let y = sin(angle * i + t + rotation) * (radius + newRadius);
      push();
      translate(x, y);  // Moverse a la posición de la sub-forma
      fractalShape(newRadius, level - 1, t, rotation + 10);  // Rotación acumulativa
      pop();
    }
  }
}

// Función para dibujar polígonos con un número variable de lados
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
