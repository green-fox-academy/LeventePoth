'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

class triangleSwarm {
  startX: number;
  startY: number;
  size: number;
  count: number;

  constructor (startX, startY, size, count) {
    this.startX = startX;
    this.startY = startY;
    this.size = size;
    this.count = count;
  }
  
   draw (startX, startY, size, count) {
    if (count === 1) {
      return;
    }
    ctx.beginPath();
    ctx.moveTo (startX,startY);
    ctx.lineTo (startX + size / 3, startY + size / 2);
    ctx.strokeStyle = `black`;
    ctx.stroke();
    ctx.lineTo (startX - size / 3, startY + size / 2);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.lineTo (startX,startY);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = `hsl(${10 - count * 20}, ${100 - count * 3}%, 50%)`
    ctx.fill();
    let self: triangleSwarm = this;
    setTimeout (function () {
      self.draw (startX + size / 3, startY, size / 2, count -800);
      self.draw (startX - size / 3, startY, size / 2, count -800);
      self.draw (startX, startY + size / 2, size / 2, count -800);
    }, 500)
  }
}
let swarm1 = new triangleSwarm (400, 50, 600, 10);
swarm1.draw(400, 50, 600, 10);