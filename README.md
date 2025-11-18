# ArenaX Live - Game Website

A flashy, advanced purple-themed React web page for ArenaX Live, a cross-platform online action-strategy game.

## Features

- **Animated Hero Section** - Particle system background with smooth animations
- **About Section** - Game features and modes showcase
- **Champions Section** - 20 unique champions with role filtering
- **Announcements Section** - News about new champions and upcoming events
- **Smooth Navigation** - Fixed navigation bar with scroll detection
- **Purple Theme** - Advanced purple color scheme with glowing effects
- **Responsive Design** - Works on desktop and mobile devices

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Hero section with particle animation
│   ├── About.jsx         # Game information section
│   ├── Champions.jsx     # Champions showcase (20 champions)
│   ├── Announcements.jsx # News and events section
│   └── Navigation.jsx    # Fixed navigation bar
├── App.jsx               # Main app component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## Technologies

- React 18
- Vite
- CSS3 Animations
- Canvas API (for particle effects)

