import { useState } from 'react'
import ParticleBackground from './ParticleBackground'
import './Champions.css'

const champions = [
  { id: 1, name: 'Zephyr', role: 'Assassin', description: 'Swift shadow warrior with wind-based abilities' },
  { id: 2, name: 'Titanforge', role: 'Tank', description: 'Massive stone guardian with earth-shattering power' },
  { id: 3, name: 'Nyx', role: 'Mage', description: 'Dark sorceress wielding forbidden shadow magic' },
  { id: 4, name: 'Aurora', role: 'Support', description: 'Radiant healer blessed with celestial light' },
  { id: 5, name: 'Blade Dancer', role: 'Fighter', description: 'Elegant warrior with deadly dual blades' },
  { id: 6, name: 'Vortex', role: 'Mage', description: 'Master of chaos magic and dimensional rifts' },
  { id: 7, name: 'Ironclad', role: 'Tank', description: 'Heavy armor warrior with unbreakable defense' },
  { id: 8, name: 'Shadow Stalker', role: 'Assassin', description: 'Stealthy killer from the shadows' },
  { id: 9, name: 'Phoenix', role: 'Mage', description: 'Fire mage reborn from ashes' },
  { id: 10, name: 'Crystal Sage', role: 'Support', description: 'Wise protector using crystal magic' },
  { id: 11, name: 'Thunder Lord', role: 'Fighter', description: 'Lightning-wielding berserker' },
  { id: 12, name: 'Frost Queen', role: 'Mage', description: 'Ice sorceress freezing enemies solid' },
  { id: 13, name: 'Blood Reaper', role: 'Assassin', description: 'Ruthless killer draining life force' },
  { id: 14, name: 'Guardian Angel', role: 'Support', description: 'Divine protector with healing wings' },
  { id: 15, name: 'War Machine', role: 'Tank', description: 'Mechanical behemoth of destruction' },
  { id: 16, name: 'Storm Rider', role: 'Fighter', description: 'Warrior commanding the tempest' },
  { id: 17, name: 'Void Walker', role: 'Mage', description: 'Master of void and dark energy' },
  { id: 18, name: 'Dragon Knight', role: 'Fighter', description: 'Legendary warrior with draconic power' },
  { id: 19, name: 'Soul Weaver', role: 'Support', description: 'Mystic controlling life and death' },
  { id: 20, name: 'Night Blade', role: 'Assassin', description: 'Elite assassin of the dark order' },
]

function Champions() {
  const [selectedChampion, setSelectedChampion] = useState(null)
  const [filterRole, setFilterRole] = useState('All')

  const roles = ['All', 'Assassin', 'Tank', 'Mage', 'Support', 'Fighter']
  const filteredChampions = filterRole === 'All' 
    ? champions 
    : champions.filter(ch => ch.role === filterRole)

  return (
    <section id="champions" className="champions">
      <ParticleBackground intensity="subtle" particleCount={45} />
      <div className="champions-container">
        <h2 className="section-title">Champions</h2>
        <div className="role-filters">
          {roles.map(role => (
            <button
              key={role}
              className={`role-filter ${filterRole === role ? 'active' : ''}`}
              onClick={() => setFilterRole(role)}
            >
              {role}
            </button>
          ))}
        </div>
        <div className="champions-grid">
          {filteredChampions.map(champion => (
            <div
              key={champion.id}
              className={`champion-card champion-${champion.role.toLowerCase()}`}
              onMouseEnter={() => setSelectedChampion(champion.id)}
              onMouseLeave={() => setSelectedChampion(null)}
            >
              <div className="champion-avatar">
                <div className="avatar-glow"></div>
                <span className="champion-initial">{champion.name[0]}</span>
              </div>
              <div className="champion-info">
                <h3 className="champion-name">{champion.name}</h3>
                <span className="champion-role">{champion.role}</span>
                <p className="champion-description">{champion.description}</p>
              </div>
              {selectedChampion === champion.id && (
                <div className="champion-hover-effect"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Champions

