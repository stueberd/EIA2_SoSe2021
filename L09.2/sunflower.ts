namespace BlumenwieseL09 {
    export class SunFlower { //damit blumenwiese09 darauf zureifen kann muss man die Datei exportieren
        color: string;
        position: Vector;
        size: number;
        velocity: Vector;

        constructor() {
            let x: number = 1000 * Math.random();
            let y: number = 150 * Math.random() + 800 * golden;
            this.position = new Vector(x, y);

            //Geschwindigkeit und Richtung
            this.velocity = new Vector(-0.3, 0);

            this.size = 5;
            this.color = "yellow";
    }

    move(_timeslice: number): void {
        this.position.add(this.velocity);

        if (this.position.x < 0)
        this.position.x += crc2.canvas.width;
        if (this.position.y > 900)
        this.position.y -= 500 * golden;
}

    drawSunflower(): void {    

        crc2.beginPath();
        crc2.rect(this.position.x, this.position.y, 5, 80); 
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        
        crc2.arc(this.position.x + 14, this.position.y + 40, 8, 0, 1 * Math.PI); 
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.closePath();

        //petals
        crc2.fillStyle = this.color;
        crc2.beginPath();
        crc2.ellipse(this.position.x, this.position.y + 10, this.size, 10, 0, 20, 40);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.ellipse(this.position.x + 10, this.position.y + 5, this.size, 10, 2, 20, 40);
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.ellipse(this.position.x + 10, this.position.y - 8, this.size, 10, 1, 20, 40);
        crc2.fill();
        crc2.closePath();
      
        crc2.beginPath();
        crc2.ellipse(this.position.x - 11, this.position.y - 5, this.size, 10, 5, 20, 40);
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.ellipse(this.position.x - 10, this.position.y + 6, this.size, 10, 7, 20, 40);
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.ellipse(this.position.x - 2, this.position.y - 11, this.size, 10, 0, 20, 40);
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y, 9, 0, 2 * Math.PI);
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();
        } 
    }
}
