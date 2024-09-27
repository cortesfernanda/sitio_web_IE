let amplitudBase = 150; // Altura base de la onda.
let frecuencia = 0.05; // Controla la cantidad de ciclos de la onda.

function setup() {
  createCanvas(windowWidth, windowHeight); // Crea un lienzo que cubre toda la pantalla
}

function draw() {
  background(0); // Establece el fondo en color negro
  let velocidad = frameCount * 0.05; // Velocidad de la onda.

  // *** ANIMACIÓN PRINCIPAL: Círculos en forma de ondas ***
  for (let i = 0; i < 5; i++) { // Dibujamos 5 "ondas" de círculos.
    let offset = i * 10; // Desfase entre ondas.

    // La amplitud varía con el tiempo para cada onda.
    let amplitud = amplitudBase + sin(frameCount * 0.03 + i) * 30;

    // Color celeste con cambio gradual.
    let r = map(sin(frameCount * 0.01 + i), -1, 1, 173, 0);
    let g = map(sin(frameCount * 0.02 + i), -1, 1, 216, 191);
    let b = map(sin(frameCount * 0.03 + i), -1, 1, 230, 255);

    fill(r, g, b, 150); // Color con transparencia.
    noStroke(); // Sin contorno.

    // Dibujar círculos a lo largo de una onda.
    for (let x = 0; x < width; x += 20) {
      let y = height / 2 + sin(x * frecuencia + velocidad + offset) * amplitud; // Movimiento en forma de onda.
      let tamano = map(sin(x * 0.05 + frameCount * 0.1), -1, 1, 10, 30); // Tamaño variable.
      ellipse(x, y, tamano, tamano); // Círculos en la onda.
    }
  }

  // *** ANIMACIÓN SECUNDARIA: Círculos más grandes en el fondo ***
  for (let x = 0; x < width; x += 40) {
    let y = height / 2 + cos(x * frecuencia + velocidad) * amplitudBase;
    let tamanoFondo = map(cos(x * 0.1 + frameCount * 0.05), -1, 1, 15, 35);
    let alpha = map(sin(x * frecuencia + velocidad), -1, 1, 50, 150); // Transparencia variable.

    fill(173, 216, 230, alpha);
    noStroke();
    ellipse(x, y + 50, tamanoFondo, tamanoFondo); // Círculos en el fondo.
  }
}
