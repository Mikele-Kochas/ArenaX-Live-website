import './Navigation.css'

function Navigation({ currentSection, scrollToSection }) {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="ArenaX Live Logo" className="logo-image" />
        </div>
        <ul className="nav-links">
          <li>
            <button
              className={currentSection === 'hero' ? 'active' : ''}
              onClick={() => scrollToSection('hero')}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={currentSection === 'about' ? 'active' : ''}
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={currentSection === 'champions' ? 'active' : ''}
              onClick={() => scrollToSection('champions')}
            >
              Champions
            </button>
          </li>
          <li>
            <button
              className={currentSection === 'announcements' ? 'active' : ''}
              onClick={() => scrollToSection('announcements')}
            >
              News
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

