import { useEffect, useRef } from 'react'
import './Hero.css'

function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 100

    const colors = [
      { r: 138, g: 43, b: 226 },   // Purple
      { r: 0, g: 212, b: 255 },    // Cyan
      { r: 255, g: 0, b: 255 },    // Pink
      { r: 255, g: 215, b: 0 },    // Gold
      { r: 0, g: 255, b: 136 },    // Green
      { r: 255, g: 107, b: 53 },   // Orange
    ]

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.opacity = Math.random() * 0.5 + 0.2
        this.color = colors[Math.floor(Math.random() * colors.length)]
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

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 120) {
            const avgR = Math.floor((p1.color.r + p2.color.r) / 2)
            const avgG = Math.floor((p1.color.g + p2.color.g) / 2)
            const avgB = Math.floor((p1.color.b + p2.color.b) / 2)
            ctx.strokeStyle = `rgba(${avgR}, ${avgG}, ${avgB}, ${0.2 * (1 - distance / 120)})`
            ctx.lineWidth = 1
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
  }, [])

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="particles-canvas"></canvas>
      <div className="hero-content">
        <div className="hero-title">
          <h1 className="title-main">ARENAX</h1>
          <h2 className="title-sub">LIVE</h2>
        </div>
        <p className="hero-tagline">Cross-Platform Action Strategy</p>
        <div className="hero-buttons">
          <button className="btn-primary">Play Now</button>
          <button className="btn-secondary">Watch Trailer</button>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero

