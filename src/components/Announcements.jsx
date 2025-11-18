import ParticleBackground from './ParticleBackground'
import './Announcements.css'

const announcements = [
  {
    id: 1,
    type: 'champion',
    title: 'New Champion: Void Walker',
    date: '2024-12-15',
    description: 'Master of void and dark energy joins the arena. Pre-order now to get exclusive Void Walker skin!',
    image: '🔮',
  },
  {
    id: 2,
    type: 'event',
    title: 'Winter Championship 2024',
    date: '2024-12-20',
    description: 'Join the biggest tournament of the year! $100,000 prize pool. Registration opens December 10th.',
    image: '🏆',
  },
  {
    id: 3,
    type: 'champion',
    title: 'Champion Rework: Phoenix',
    date: '2024-12-08',
    description: 'Phoenix gets a complete visual and gameplay overhaul. New abilities and ultimate coming soon!',
    image: '🔥',
  },
  {
    id: 4,
    type: 'event',
    title: 'Double XP Weekend',
    date: '2024-12-05',
    description: 'Earn double experience points this weekend! Perfect time to level up your favorite champions.',
    image: '⚡',
  },
  {
    id: 5,
    type: 'champion',
    title: 'Upcoming: Crystal Sage',
    date: '2024-12-25',
    description: 'The wise protector will join the roster on Christmas Day. Crystal Sage brings powerful support abilities.',
    image: '💎',
  },
  {
    id: 6,
    type: 'event',
    title: 'Season 3 Battle Pass',
    date: '2024-12-01',
    description: 'New season, new rewards! Unlock exclusive skins, emotes, and cosmetics in Season 3 Battle Pass.',
    image: '🎁',
  },
]

function Announcements() {
  const upcomingChampions = announcements.filter(a => a.type === 'champion')
  const upcomingEvents = announcements.filter(a => a.type === 'event')

  return (
    <section id="announcements" className="announcements">
      <ParticleBackground intensity="subtle" particleCount={35} />
      <div className="announcements-container">
        <h2 className="section-title">Announcements</h2>
        <div className="announcements-grid">
          <div className="announcements-section">
            <h3 className="subsection-title">
              <span className="title-icon">⭐</span>
              New Champions
            </h3>
            <div className="announcements-list">
              {upcomingChampions.map(announcement => (
                <div key={announcement.id} className="announcement-card" data-type={announcement.type}>
                  <div className="announcement-image">{announcement.image}</div>
                  <div className="announcement-content">
                    <span className="announcement-date">{announcement.date}</span>
                    <h4 className="announcement-title">{announcement.title}</h4>
                    <p className="announcement-description">{announcement.description}</p>
                  </div>
                  <div className="announcement-badge">NEW</div>
                </div>
              ))}
            </div>
          </div>
          <div className="announcements-section">
            <h3 className="subsection-title">
              <span className="title-icon">🎪</span>
              Upcoming Events
            </h3>
            <div className="announcements-list">
              {upcomingEvents.map(announcement => (
                <div key={announcement.id} className="announcement-card" data-type={announcement.type}>
                  <div className="announcement-image">{announcement.image}</div>
                  <div className="announcement-content">
                    <span className="announcement-date">{announcement.date}</span>
                    <h4 className="announcement-title">{announcement.title}</h4>
                    <p className="announcement-description">{announcement.description}</p>
                  </div>
                  <div className="announcement-badge event">EVENT</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Announcements

