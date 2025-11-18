import ParticleBackground from './ParticleBackground'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <ParticleBackground intensity="subtle" particleCount={40} />
      <div className="about-container">
        <h2 className="section-title">About ArenaX Live</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              ArenaX Live is a cross-platform online action-strategy game. Players control small teams of heroes 
              in fast-paced matches that combine real-time action with strategic decisions.
            </p>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⚔️</div>
                <h3>Real-Time Action</h3>
                <p>Skill shots, dodging, positioning</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🧠</div>
                <h3>Strategic Decisions</h3>
                <p>Team composition, roles, map control</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>Progression & Customization</h3>
                <p>Skins, emotes, unlockable cosmetics</p>
              </div>
            </div>
            <div className="game-modes">
              <h3>Game Modes</h3>
              <div className="modes-list">
                <div className="mode-item">
                  <span className="mode-icon">⚡</span>
                  <div>
                    <h4>Quick Casual Matches</h4>
                    <p>5-8 minutes of fast-paced action</p>
                  </div>
                </div>
                <div className="mode-item">
                  <span className="mode-icon">🏆</span>
                  <div>
                    <h4>Ranked Competitive Play</h4>
                    <p>Climb the leaderboards</p>
                  </div>
                </div>
                <div className="mode-item">
                  <span className="mode-icon">🎁</span>
                  <div>
                    <h4>Seasonal Battle Passes</h4>
                    <p>Unlock exclusive rewards</p>
                  </div>
                </div>
                <div className="mode-item">
                  <span className="mode-icon">🎪</span>
                  <div>
                    <h4>Tournaments & Events</h4>
                    <p>Special competitions and challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

