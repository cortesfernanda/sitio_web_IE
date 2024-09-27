function setup() {
  createCanvas(windowWidth, windowHeight); // Crea un lienzo que cubre toda la pantalla
  angleMode(DEGREES); // Establece el modo de ángulo en grados en lugar de radianes
  rectMode(CENTER); // Define que las coordenadas (x, y) de los rectángulos serán el centro del rectángulo
  noFill(); // No aplica relleno a las formas dibujadas, solo dibuja sus bordes
}

function draw() {
  background(0); // Establece el fondo en color negro
  translate(width / 2, height / 2); // Traslada el origen de coordenadas al centro del lienzo

  // Bucle que dibuja 200 rectángulos con diferentes rotaciones y tamaños
  for (let i = 0; i < 200; i++) {
    push(); // Guarda el estado actual del sistema de coordenadas y estilos
    
    // Calcula un desplazamiento dinámico en la posición
    let offsetX = sin(frameCount * 0.2 + i) * 150; // Aumenta la velocidad en X y la amplitud
    let offsetY = cos(frameCount * 0.2 + i) * 150; // Aumenta la velocidad en Y y la amplitud
    
    translate(offsetX, offsetY); // Aplica el desplazamiento antes de rotar

    // Rota el sistema de coordenadas de forma dinámica
    rotate(sin(frameCount * 4 + i * 6) * 100); // Aumenta la velocidad de rotación (factor 4 y 6)

    // Cambia a tonalidades de azul variando solo el canal B (RGB)
    let r = 0; // Rojo en 0
    let g = 0; // Verde en 0
    let b = map(sin(frameCount * 0.1 + i), -1, 1, 100, 255); // Aumenta la variación en azul

    let col = color(r, g, b); // Color con tonalidades de azul

    // Calcula un factor de desvanecimiento
    let alpha = map(i, 0, 200, 255, 50); // De 255 (opaco) a 50 (translúcido)
    col.setAlpha(alpha); // Establece la transparencia del color

    stroke(col); // Establece el color del trazo

    // Dibuja un rectángulo con un tamaño que varía más dinámicamente
    let size = map(sin(frameCount * 1 + i), -1, 1, 50, 200); // Aumenta la variación en el tamaño
    rect(0, 0, size, size, 20); // Dibuja el rectángulo con esquinas redondeadas
    
    pop(); // Restaura el estado guardado del sistema de coordenadas y estilos antes del push()
  }
}
