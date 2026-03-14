import React, { useRef, useEffect, useState } from "react";

// Petal class for floating elements
class Petal {
  constructor(canvasWidth, canvasHeight) {
    this.reset(canvasWidth, canvasHeight);
  }

  reset(canvasWidth) {
    // Random starting position at top
    this.x = Math.random() * canvasWidth;
    this.y = -20 - Math.random() * 100;

    // Size variation
    this.size = 15 + Math.random() * 30;

    // Type of petal/leaf
    const types = ["rose", "lavender", "leaf", "petal"];
    this.type = types[Math.floor(Math.random() * types.length)];

    // Color based on type
    switch (this.type) {
      case "rose":
        this.color = this.getRoseColor();
        break;
      case "lavender":
        this.color = this.getLavenderColor();
        break;
      case "leaf":
        this.color = this.getLeafColor();
        break;
      default:
        this.color = this.getPetalColor();
    }

    // Movement physics
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    this.floatSpeed = 0.5 + Math.random() * 1.5;
    this.driftSpeed = (Math.random() - 0.5) * 0.5;
    this.wobble = Math.random() * Math.PI * 2;
    this.wobbleSpeed = 0.01 + Math.random() * 0.02;

    // Opacity variation
    this.opacity = 0.6 + Math.random() * 0.4;
  }

  getRoseColor() {
    const roses = [
      "#FFB7C5", // Light pink
      "#FF69B4", // Hot pink
      "#FFC0CB", // Pink
      "#FFA07A", // Light salmon
      "#FF6B8B", // Rose pink
      "#FF1493", // Deep pink
      "#F08080", // Light coral
    ];
    return roses[Math.floor(Math.random() * roses.length)];
  }

  getLavenderColor() {
    const lavenders = [
      "#E6E6FA", // Lavender
      "#D8BFD8", // Thistle
      "#DDA0DD", // Plum
      "#EE82EE", // Violet
      "#DA70D6", // Orchid
      "#C8A2C8", // Lilac
      "#B57EDC", // Medium purple
    ];
    return lavenders[Math.floor(Math.random() * lavenders.length)];
  }

  getLeafColor() {
    const leaves = [
      "#90EE90", // Light green
      "#98FB98", // Pale green
      "#32CD32", // Lime green
      "#3CB371", // Medium sea green
      "#2E8B57", // Sea green
      "#228B22", // Forest green
      "#6B8E23", // Olive drab
    ];
    return leaves[Math.floor(Math.random() * leaves.length)];
  }

  getPetalColor() {
    const petals = [
      "#FFFACD", // Lemon chiffon
      "#FAFAD2", // Light goldenrod
      "#FFE4B5", // Moccasin
      "#FFDAB9", // Peach puff
      "#FFE4E1", // Misty rose
      "#FFC0CB", // Pink
      "#E0FFFF", // Light cyan
    ];
    return petals[Math.floor(Math.random() * petals.length)];
  }

  update(canvasWidth, canvasHeight) {
    // Float downward
    this.y += this.floatSpeed;

    // Drift sideways with wobble
    this.wobble += this.wobbleSpeed;
    this.x += this.driftSpeed + Math.sin(this.wobble) * 0.3;

    // Rotate
    this.rotation += this.rotationSpeed;

    // Reset if out of bounds
    if (
      this.y > canvasHeight + 50 ||
      this.x < -50 ||
      this.x > canvasWidth + 50
    ) {
      this.reset(canvasWidth, canvasHeight);
    }

    // Bounce off edges gently
    if (this.x < 0) {
      this.x = 0;
      this.driftSpeed *= -0.5;
    }
    if (this.x > canvasWidth) {
      this.x = canvasWidth;
      this.driftSpeed *= -0.5;
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha = this.opacity;

    // Draw different shapes based on type
    switch (this.type) {
      case "rose":
        this.drawRose(ctx);
        break;
      case "lavender":
        this.drawLavender(ctx);
        break;
      case "leaf":
        this.drawLeaf(ctx);
        break;
      default:
        this.drawPetal(ctx);
    }

    ctx.restore();
  }

  drawRose(ctx) {
    const size = this.size;

    // Draw multiple layers for rose effect
    ctx.beginPath();
    ctx.ellipse(0, 0, size * 0.4, size * 0.3, 0, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();

    // Inner petals
    ctx.beginPath();
    ctx.ellipse(
      -size * 0.2,
      -size * 0.1,
      size * 0.25,
      size * 0.2,
      0.2,
      0,
      Math.PI * 2,
    );
    ctx.fillStyle = this.adjustColor(this.color, 20);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(
      size * 0.2,
      size * 0.1,
      size * 0.25,
      size * 0.2,
      -0.1,
      0,
      Math.PI * 2,
    );
    ctx.fillStyle = this.adjustColor(this.color, 20);
    ctx.fill();

    // Center
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.15, 0, Math.PI * 2);
    ctx.fillStyle = this.adjustColor(this.color, -20);
    ctx.fill();
  }

  drawLavender(ctx) {
    const size = this.size;

    // Draw lavender spike
    for (let i = 0; i < 5; i++) {
      const offset = (i - 2) * size * 0.15;
      ctx.beginPath();
      ctx.ellipse(
        offset,
        -size * 0.2,
        size * 0.1,
        size * 0.25,
        0,
        0,
        Math.PI * 2,
      );
      ctx.fillStyle = this.adjustColor(this.color, i * 5);
      ctx.fill();
    }

    // Stem
    ctx.beginPath();
    ctx.moveTo(-size * 0.1, size * 0.1);
    ctx.lineTo(0, size * 0.3);
    ctx.lineTo(size * 0.1, size * 0.1);
    ctx.fillStyle = "#90EE90";
    ctx.globalAlpha = this.opacity * 0.7;
    ctx.fill();
  }

  drawLeaf(ctx) {
    const size = this.size;

    ctx.beginPath();
    ctx.moveTo(0, -size * 0.3);
    ctx.quadraticCurveTo(size * 0.4, 0, 0, size * 0.3);
    ctx.quadraticCurveTo(-size * 0.4, 0, 0, -size * 0.3);
    ctx.fillStyle = this.color;
    ctx.fill();

    // Vein
    ctx.beginPath();
    ctx.moveTo(0, -size * 0.3);
    ctx.lineTo(0, size * 0.3);
    ctx.strokeStyle = this.adjustColor(this.color, -30);
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  drawPetal(ctx) {
    const size = this.size;

    ctx.beginPath();
    ctx.moveTo(0, -size * 0.2);
    ctx.quadraticCurveTo(size * 0.4, 0, 0, size * 0.4);
    ctx.quadraticCurveTo(-size * 0.4, 0, 0, -size * 0.2);
    ctx.fillStyle = this.color;
    ctx.fill();

    // Highlight
    ctx.beginPath();
    ctx.ellipse(
      -size * 0.1,
      -size * 0.1,
      size * 0.1,
      size * 0.05,
      0,
      0,
      Math.PI * 2,
    );
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.fill();
  }

  adjustColor(color, percent) {
    // Simple color adjustment for variations
    if (color.startsWith("#")) {
      const num = parseInt(color.slice(1), 16);
      const r = Math.min(255, Math.max(0, ((num >> 16) & 0xff) + percent));
      const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + percent));
      const b = Math.min(255, Math.max(0, (num & 0xff) + percent));
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }
    return color;
  }
}

const PetalCanvas = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const petalsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setDimensions({ width, height });
      canvas.width = width;
      canvas.height = height;

      // Reinitialize petals with new dimensions
      const petalCount = Math.min(50, Math.floor((width * height) / 20000));
      petalsRef.current = Array.from(
        { length: petalCount },
        () => new Petal(width, height),
      );
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#87CEEB"); // Sky blue
      gradient.addColorStop(0.5, "#E0F6FF"); // Light blue
      gradient.addColorStop(1, "#F5F5DC"); // Beige
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw soft clouds
      ctx.globalAlpha = 0.2;
      ctx.fillStyle = "white";
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(
          canvas.width * (0.1 + i * 0.2),
          canvas.height * 0.2,
          80,
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Update and draw petals
      petalsRef.current.forEach((petal) => {
        petal.update(canvas.width, canvas.height);
        petal.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "block",
        zIndex: -1,
      }}
      width={dimensions.width}
      height={dimensions.height}
    />
  );
};

export default PetalCanvas;
