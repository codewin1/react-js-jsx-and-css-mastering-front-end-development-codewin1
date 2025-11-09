# Lock-in - Focus & Productivity Timer

A beautiful, minimalist productivity application designed to help you stay focused and track your deep work sessions. Built with modern web technologies and featuring smooth animations, dark/light theme support, and a clean, distraction-free interface.

## Features

- **Pomodoro Timer**: 25-minute focus sessions with visual progress tracking
- **Statistics Dashboard**: Track daily focus time, streaks, and weekly progress
- **Dark/Light Mode**: Seamless theme switching with smooth transitions
- **Beautiful Design**: Modern gradient effects and smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Lightning Fast**: Built with Vite for optimal performance
- **Accessible**: Semantic HTML and ARIA labels for screen readers

## Tech Stack

- **Framework**: [React 18](https://react.dev/) with TypeScript
- **Build Tool**: [Vite](https://vitejs.dev/) for blazing fast development
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design system
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) for consistent, accessible components
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful, customizable icons
- **State Management**: React Hooks (useState, useEffect)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Animations**: Custom CSS animations with Tailwind utilities

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-codewin1.git
cd react-js-jsx-and-css-mastering-front-end-development-codewin1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## How to Use

1. **Start a Focus Session**: Click the "Start" button on the timer to begin your 25-minute focus session
2. **Track Progress**: Watch the visual progress indicator fill up as you work
3. **Pause/Resume**: Need a quick break? Hit pause and resume when ready
4. **Reset Timer**: Start fresh with the reset button
5. **Toggle Theme**: Switch between light and dark modes with the theme toggle in the header
6. **View Stats**: Monitor your productivity with the stats cards showing daily focus time, streaks, and weekly totals

## Design System

The app uses a comprehensive design system with:
- **Semantic color tokens**: Primary, secondary, accent, muted variants
- **Custom gradients**: Smooth gradient effects for visual appeal
- **Consistent spacing**: Using Tailwind's spacing scale
- **Smooth transitions**: All interactions have polished animations
- **Responsive typography**: Scales beautifully across all screen sizes

Colors and design tokens are defined in `src/index.css` and can be easily customized to match your brand.

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── FocusTimer.tsx   # Main timer component
│   ├── StatsCard.tsx    # Statistics display card
│   ├── ThemeToggle.tsx  # Dark/light mode toggle
│   └── NavLink.tsx      # Navigation link component
├── pages/
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 page
├── lib/
│   └── utils.ts         # Utility functions
├── hooks/               # Custom React hooks
├── App.tsx              # Main app component with routing
├── index.css            # Global styles and design system
└── main.tsx             # App entry point
```

## Future Improvements

### Planned Features
- [ ] **Session History**: Track and visualize all completed focus sessions
- [ ] **Custom Timer Durations**: Set custom focus and break intervals
- [ ] **Sound Notifications**: Audio alerts when sessions complete
- [ ] **Task Management**: Attach tasks to focus sessions
- [ ] **Goals & Achievements**: Gamification with badges and milestones
- [ ] **Analytics Dashboard**: Detailed productivity insights and graphs
- [ ] **User Accounts**: Save progress across devices with authentication
- [ ] **Break Reminders**: Automated short and long break timers
- [ ] **Ambient Sounds**: Focus-enhancing background sounds
- [ ] **Export Data**: Download your productivity data as CSV/JSON
- [ ] **Mobile App**: Native iOS and Android apps
- [ ] **Browser Extension**: Quick access from any tab

### Technical Improvements
- [ ] Add unit and integration tests
- [ ] Implement PWA features for offline use
- [ ] Add keyboard shortcuts
- [ ] Optimize performance with code splitting
- [ ] Add Storybook for component documentation
- [ ] Implement proper state management (Zustand/Redux)
