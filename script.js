function drawStar() {
    const canvas = document.getElementById("myCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Limpiamos el canvas antes de dibujar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const width = canvas.width;
    const height = canvas.height;
    
    // Centro del canvas (Origen 0,0 del plano cartesiano)
    const centerX = width / 2;
    const centerY = height / 2;

    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;

    // Cantidad de hilos/líneas por cuadrante (Aumenta para mayor densidad)
    const totalLines = 25; 
    
    const stepX = centerX / totalLines;
    const stepY = centerY / totalLines;

    // Dibujar los ejes principales X e Y
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();

    // Bucle para tejer las líneas curvas
    for (let i = 0; i <= totalLines; i++) {
        const dX = i * stepX;
        const dY = i * stepY;
        const invDX = (totalLines - i) * stepX;
        const invDY = (totalLines - i) * stepY;

        ctx.beginPath();

        // Cuadrante Superior Derecho
        ctx.moveTo(centerX, centerY - invDY);
        ctx.lineTo(centerX + dX, centerY);

        // Cuadrante Superior Izquierdo
        ctx.moveTo(centerX, centerY - invDY);
        ctx.lineTo(centerX - dX, centerY);

        // Cuadrante Inferior Derecho
        ctx.moveTo(centerX, centerY + invDY);
        ctx.lineTo(centerX + dX, centerY);

        // Cuadrante Inferior Izquierdo
        ctx.moveTo(centerX, centerY + invDY);
        ctx.lineTo(centerX - dX, centerY);

        ctx.stroke();
    }
}

// ==========================================
// FUNCIONES BASE (Estructuras vacías para tus otros botones)
// ==========================================

function drawPoint(x, y) {
    const ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, 4, 4);
}

function drawLine(x1, y1, x2, y2) {
    const ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawRectangle(x, y, w, h) {
    const ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.strokeRect(x, y, w, h);
}

function drawCircle(x, y, r, color) {
    const ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function drawTriangle(x1, y1, x2, y2, x3, y3, fillColor, strokeColor, lineWidth) {
    const ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeColor;
    ctx.stroke();
}

function drawPolygon(points, fillColor, strokeColor) {
    const ctx = document.getElementById("myCanvas").getContext("2d");
    if (points.length < 3) return;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.stroke();
}

function drawText(text, x, y) {
    const ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(text, x, y);
}

function drawImage(x, y, w, h) {
    const ctx = document.getElementById("myCanvas").getContext("2d");
    // Colocamos un rectángulo temporal simulando la imagen
    ctx.fillStyle = "#ccc";
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    ctx.fillText("Espacio de Imagen", x + 10, y + h/2);
}

function clearCanvas() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function dibujarPlanoCartesiano() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#aaa";
    ctx.lineWidth = 1;
    // Ejes
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2); ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.moveTo(canvas.width / 2, 0); ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
}

// Stubs para el reloj y herramientas personalizadas
function dibujarRelojAnalogico() { alert("Función de reloj por implementar"); }
function setHoraManual() { alert("Hora fijada"); }
function drawLineFromAtoB() {
    const x1 = parseFloat(document.getElementById("x1").value) || 0;
    const y1 = parseFloat(document.getElementById("y1").value) || 0;
    const x2 = parseFloat(document.getElementById("x2").value) || 0;
    const y2 = parseFloat(document.getElementById("y2").value) || 0;
    drawLine(x1, y1, x2, y2);
}
function drawCircleWithMath() {
    const x = parseFloat(document.getElementById("x").value) || 0;
    const y = parseFloat(document.getElementById("y").value) || 0;
    const r = parseFloat(document.getElementById("radius").value) || 50;
    // Trasladar al centro para que actúe como plano cartesiano matemático
    const canvas = document.getElementById("myCanvas");
    drawCircle(canvas.width/2 + x, canvas.height/2 - y, r, "blue");
}