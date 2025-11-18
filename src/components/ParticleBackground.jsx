import { useEffect, useRef } from 'react'
import './ParticleBackground.css'

function ParticleBackground({ intensity = 'normal', particleCount = 50 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    
    // Adjust colors and opacity based on intensity
    const getColors = () => {
      if (intensity === 'subtle') {
        return [
          { r: 138, g: 43, b: 226, opacity: 0.15 },   // Purple - very subtle
          { r: 0, g: 212, b: 255, opacity: 0.12 },    // Cyan - very subtle
          { r: 255, g: 0, b: 255, opacity: 0.1 },      // Pink - very subtle
          { r: 255, g: 215, b: 0, opacity: 0.1 },      // Gold - very subtle
        ]
      } else {
        return [
          { r: 138, g: 43, b: 226, opacity: 0.3 },     // Purple
          { r: 0, g: 212, b: 255, opacity: 0.25 },     // Cyan
          { r: 255, g: 0, b: 255, opacity: 0.2 },      // Pink
          { r: 255, g: 215, b: 0, opacity: 0.2 },      // Gold
        ]
      }
    }

    const colors = getColors()

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = intensity === 'subtle' 
          ? Math.random() * 2 + 0.5 
          : Math.random() * 3 + 1
        this.speedX = (Math.random() * 2 - 1) * (intensity === 'subtle' ? 0.5 : 1)
        this.speedY = (Math.random() * 2 - 1) * (intensity === 'subtle' ? 0.5 : 1)
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.opacity = this.color.opacity * (Math.random() * 0.5 + 0.5)
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Connect nearby particles with lines
      const maxDistance = intensity === 'subtle' ? 80 : 120
      const lineOpacity = intensity === 'subtle' ? 0.08 : 0.15

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < maxDistance) {
            const avgR = Math.floor((p1.color.r + p2.color.r) / 2)
            const avgG = Math.floor((p1.color.g + p2.color.g) / 2)
            const avgB = Math.floor((p1.color.b + p2.color.b) / 2)
            ctx.strokeStyle = `rgba(${avgR}, ${avgG}, ${avgB}, ${lineOpacity * (1 - distance / maxDistance)})`
            ctx.lineWidth = intensity === 'subtle' ? 0.5 : 1
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [intensity, particleCount])

  return (
    <canvas 
      ref={canvasRef} 
      className={`particles-canvas particles-canvas-${intensity}`}
    />
  )
}

export default ParticleBackground

