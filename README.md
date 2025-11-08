# The Lock-In

**A smart, motivational to-do list app that tracks your productivity and keeps you locked in on your goals.**

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=flat&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite)


---

## Table of Contents

- [Description](#-description)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [How to Run](#-how-to-run)
- [Project Structure](#-project-structure)
- [How It Works](#-how-it-works)
- [API Documentation](#-api-documentation)
- [Insights & Analytics](#-insights--analytics)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)

---

## Description

**The Lock-In** is a productivity-focused task management application inspired by Todoist, designed to help users stay focused and motivated. Unlike traditional to-do apps, The Lock-In provides:

- **Real-time performance tracking** with weekly analytics
- **Motivational feedback** when completing tasks
- **Beautiful visualizations** of your productivity trends
- **Smart categorization** for better task organization
- **Dark mode support** for comfortable use any time of day

Perfect for students, professionals, and anyone looking to build better habits and track their progress over time.

---

## Features

### Core Functionality
- **Task Management**: Create, edit, delete, and complete tasks
- **Rich Task Details**: Add descriptions, due dates, and categories
- **Smart Filtering**: View all, active, or completed tasks
- **Persistent Storage**: All data saved automatically to localStorage

### Analytics & Insights

- **Weekly Performance Dashboard**: Visualize your productivity trends
- **Completion Rate Tracking**: See your success percentage
- **Daily Completion Charts**: Bar and line charts powered by Recharts
- **Real-time Statistics**: Track active vs completed tasks

### User Experience
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Motivational Messages**: Random encouraging quotes on task completion
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Delightful transitions and interactions
- **Color-Coded Categories**: Visual organization (Work, Personal, Health, Learning, Other)

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18.x** | UI framework with hooks (useState, useEffect, useContext) |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **Recharts** | Declarative charts library for data visualization |
| **Lucide React** | Beautiful icon library |
| **LocalStorage API** | Client-side data persistence |

---

## How to Run

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/the-lock-in.git
   cd the-lock-in
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## Project Structure

```
the-lock-in/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Navbar.jsx       # Navigation with theme toggle
│   │   ├── TaskCard.jsx     # Individual task display/edit
│   │   ├── AddTaskForm.jsx  # Task creation form
│   │   ├── WeeklyReport.jsx # Analytics dashboard
│   │   └── MotivationPopup.jsx # Success messages
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── useLocalStorage.js  # Persistent state management
│   │   ├── useTheme.js         # Theme context and toggle
│   │   └── useWeeklyStats.js   # Analytics calculations
│   │
│   ├── utils/                # Helper functions
│   │   ├── dateHelpers.js   # Date formatting utilities
│   │   └── motivationalMessages.js # Quote collection
│   │
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles and Tailwind imports
│
├── public/                  # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # This file
```

---

## How It Works

### Application Architecture

The Lock-In follows a component-based architecture with centralized state management:

```
┌─────────────────────────────────────┐
│           App Component             │
│  (Main State & Business Logic)      │
└─────────────────┬───────────────────┘
                  │
        ┌─────────┴─────────┐
        │                   │
┌───────▼────────┐  ┌──────▼──────────┐
│  Tasks View    │  │  Reports View   │
│                │  │                 │
│ - AddTaskForm  │  │ - WeeklyReport  │
│ - TaskCard[]   │  │ - Stats Cards   │
│ - Filter Tabs  │  │ - Charts        │
└────────────────┘  └─────────────────┘
```

### Data Flow

1. **Task Creation**
   ```
   User Input → AddTaskForm → App State → LocalStorage → UI Update
   ```

2. **Task Completion**
   ```
   Task Toggle → State Update → LocalStorage → Motivation Popup → Charts Update
   ```

3. **Analytics Calculation**
   ```
   Tasks Array → useWeeklyStats Hook → Aggregate by Date → Chart Data
   ```

### State Management

**Task Structure:**
```javascript
{
  id: '1234567890',           // Unique timestamp-based ID
  title: 'Complete project',  // Task name
  description: 'Details...',  // Optional description
  dueDate: '2025-11-15',     // ISO date string
  category: 'Work',           // Work/Personal/Health/Learning/Other
  completed: false,           // Completion status
  createdAt: '2025-11-08T...',  // Creation timestamp
  completedAt: null           // Completion timestamp
}
```

**Storage Keys:**
- `lock-in-tasks`: Array of all tasks
- `lock-in-theme`: Current theme preference ('light' or 'dark')

---

## API Documentation

### Custom Hooks API

#### `useLocalStorage(key, initialValue)`

Syncs state with localStorage for persistent data.

**Parameters:**
- `key` (string): localStorage key name
- `initialValue` (any): Default value if key doesn't exist

**Returns:**
- `[storedValue, setValue]`: Similar to useState

**Example:**
```javascript
const [tasks, setTasks] = useLocalStorage('my-tasks', []);
```

---

#### `useTheme()`

Provides theme state and toggle function via Context API.

**Returns:**
- `{ theme, toggleTheme }`
  - `theme` (string): 'light' or 'dark'
  - `toggleTheme` (function): Switches between themes

**Example:**
```javascript
const { theme, toggleTheme } = useTheme();
```

---

#### `useWeeklyStats(tasks)`

Calculates weekly performance metrics from tasks array.

**Parameters:**
- `tasks` (array): Array of task objects

**Returns:**
- `{ weeklyData, completionRate }`
  - `weeklyData` (array): 7-day data for charts
  - `completionRate` (number): Percentage (0-100)

**Example:**
```javascript
const { weeklyData, completionRate } = useWeeklyStats(tasks);
```

---

### Component Props API

#### `<TaskCard>`

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `task` | object | Task data object |
| `onToggle` | function | Callback when completion toggled |
| `onDelete` | function | Callback when task deleted |
| `onEdit` | function | Callback when task edited |

---

#### `<WeeklyReport>`

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `tasks` | array | Full tasks array for analytics |

---

#### `<MotivationPopup>`

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `show` | boolean | Controls popup visibility |
| `onClose` | function | Callback to close popup |

### What Gets Tracked

1. **Daily Completion Count**: Tasks completed each day of the week
2. **Daily Creation Count**: New tasks created each day
3. **Completion Rate**: (Completed Tasks / Total Tasks) × 100
4. **Active vs Completed**: Real-time count of pending and done tasks

### Visualization Types

- **Bar Chart**: Daily completions for quick visual scanning
- **Line Chart**: Trend analysis comparing completions vs creations
- **Stat Cards**: High-level metrics with gradient backgrounds

### Date Handling

The app uses the past 7 days (including today) for weekly reports:
```javascript
// Example: If today is Friday
['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  ↑                                            ↑
 7 days ago                                  today
```

### Performance Optimization

- Charts only re-render when tasks array changes
- Uses `useMemo` internally for expensive calculations
- LocalStorage writes are debounced through React's batch updates

---

## Future Improvements

### Short-term Enhancements

- [ ] **Task Priority Levels**: High/Medium/Low priority with visual indicators
- [ ] **Recurring Tasks**: Daily, weekly, monthly repetition
- [ ] **Task Search**: Filter by title, description, or category
- [ ] **Bulk Actions**: Select multiple tasks for batch operations
- [ ] **Undo/Redo**: Action history with keyboard shortcuts
- [ ] **Keyboard Shortcuts**: Quick add (Ctrl+N), quick search (Ctrl+K)

### Medium-term Features

- [ ] **Subtasks**: Break down complex tasks into smaller steps
- [ ] **Tags System**: Multiple tags per task for flexible organization
- [ ] **Time Tracking**: Log time spent on each task
- [ ] **Pomodoro Timer**: Integrated focus timer
- [ ] **Collaboration**: Share tasks with team members
- [ ] **File Attachments**: Attach documents or images to tasks

### Long-term Vision

- [ ] **Backend Integration**: Replace localStorage with RESTful API
  - User authentication (JWT)
  - Cloud sync across devices
  - PostgreSQL or MongoDB database
  
- [ ] **Mobile Apps**: React Native iOS/Android apps

- [ ] **Advanced Analytics**:
  - Monthly/yearly performance reports
  - Category-based productivity insights
  - Habit streak tracking
  - Peak productivity hours analysis
  
- [ ] **AI Features**:
  - Smart task prioritization
  - Deadline suggestions based on workload
  - Automatic category detection
  - Productivity coaching insights

- [ ] **Integrations**:
  - Google Calendar sync
  - Slack/Discord notifications
  - Email reminders
  - Export to CSV/PDF

- [ ] **Gamification**:
  - Achievement badges
  - Streak counters
  - Leaderboards (optional social features)
  - XP and level system


### Motivational Messages

Add your own messages in `src/utils/motivationalMessages.js`:

```javascript
export const motivationalMessages = [
  "Nice work! You're crushing it 💪",
  "Your custom message here!",
  // Add more...
];
```

## Acknowledgments

- **Recharts** for beautiful, responsive charts
- **Lucide Icons** for clean, modern icons
- **Tailwind CSS** for rapid UI development
- **Todoist** for design inspiration

## Show Your Support

If you find this project helpful, please consider:

- Giving it a star on GitHub
- Sharing it with others
- Contributing to its development
  