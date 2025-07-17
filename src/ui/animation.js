document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('soundwave');
  const ctx = canvas.getContext('2d');
  
  // Set canvas size to match display size
  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  
  // Initial resize
  resizeCanvas();
  
  // Handle window resizing
  window.addEventListener('resize', () => {
    resizeCanvas();
    drawDots(); // Redraw dots after resize
  });
  
  const dotCount = 3;
  let time = 0;
  
  function drawDots() {
    const centerY = canvas.height / 2;
    const spacing = canvas.width / (dotCount + 1);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set dot color (Gruvbox yellow)
    ctx.fillStyle = '#fabd2f';
    
    // Draw three dots with pulsating animation
    for (let i = 0; i < dotCount; i++) {
      const x = spacing * (i + 1);
      // Create offset timing for each dot
      const pulse = Math.sin(time + i * 0.5) * 0.5 + 0.5;
      const radius = 2 + pulse * 3; // Radius between 2-5px
      
      ctx.beginPath();
      ctx.arc(x, centerY, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
function animate() {
  time += 0.05;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fabd2f';
  
  const centerY = canvas.height / 2;
  const spacing = canvas.width / (dotCount + 0.5); // Adjusted spacing
  
  for (let i = 0; i < dotCount; i++) {
    const x = spacing * (i + 1);
    const pulse = Math.sin(time + i * 0.5) * 0.5 + 0.5;
    const radius = 6 + pulse * 9; // 3x larger dots
    
    ctx.beginPath();
    ctx.arc(x, centerY, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  
  requestAnimationFrame(animate);
}
  // Start animation
  animate();
});