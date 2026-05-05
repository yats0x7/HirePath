# 📋 Job Application Tracker - Work Distribution Plan

## Project Overview
A beginner-friendly React application to track job applications with kanban board visualization, interview reminders, and statistics dashboard. Built with React, useState, and useEffect only.

---

## Team Members & Task Distribution

### 👨‍💻 **MEMBER 1: Core Components & Data Management**
**Primary Focus:** Core UI components and state management structure

#### Tasks:
1. **JobCard Component** (`components/JobCard.jsx`)
   - Display individual job application card
   - Show: Company name, Role, Status badge, Interview date (if available)
   - Show: Days since applied
   - Simple styling with tailored CSS
   - Props: `job`, `onStatusChange`, `onDelete`, `onEdit`
   
2. **JobForm Component** (`components/JobForm.jsx`)
   - Form to add new job applications
   - Fields: Company name, Job role, Interview date (optional), Status dropdown
   - Simple input fields (no complex validation yet)
   - Props: `onAddJob`
   - Features: Reset form after submission

3. **Update App.jsx Main Logic**
   - Set up state management for jobs array
   - Create functions: `addJob`, `updateJobStatus`, `deleteJob`, `updateJob`
   - Pass props correctly to all child components
   - Add localStorage support for persistence (useEffect hook)

**Deliverables:**
- 3 complete components with proper prop drilling
- LocalStorage persistence working
- Basic error handling

**Difficulty:** ⭐⭐ (Beginner-friendly, uses useState & useEffect basics)

---

### 🎨 **MEMBER 2: Kanban Board (Drag-and-Drop)**
**Primary Focus:** Kanban board visualization and drag-and-drop functionality

#### Tasks:
1. **KanbanBoard Component** (`components/KanbanBoard.jsx`)
   - Display 4 columns: "Applied", "Interviewed", "Offer", "Rejected"
   - Show job cards in respective status columns
   - Implement drag-and-drop using HTML5 Drag and Drop API (NO external libraries)
   - Handle: `onDragStart`, `onDragOver`, `onDrop` events
   - Props: `jobs`, `onUpdateStatus`
   
2. **Kanban Styling** (`App.css` or separate CSS)
   - Column layout (flex or grid)
   - Drag visual feedback (opacity, border changes)
   - Card styling within columns
   - Responsive design
   
3. **Helper Function for Status Management**
   - Create utility function to get jobs by status
   - Keep this in `utils/jobUtils.js`

**Features:**
- Smooth drag-and-drop experience
- Visual feedback during dragging
- Auto-update parent state on drop

**Deliverables:**
- Fully functional kanban board
- Working drag-and-drop
- Organized CSS
- Utility functions

**Difficulty:** ⭐⭐⭐ (Medium - requires understanding of drag-drop events)

---

### 📊 **MEMBER 3: Statistics & Interview Reminders**
**Primary Focus:** Dashboard analytics and reminder functionality

#### Tasks:
1. **StatsDashboard Component** (`components/StatsDashboard.jsx`)
   - Display 4 stat cards:
     * Total applications
     * Interview count
     * Offer count
     * Success rate (%) = (offers / total) * 100
   - Funnel chart (simple bar visualization)
     * Applied → Interviewed → Offer (bar heights)
   - Using Canvas API or simple SVG for chart (no external charting libraries)
   - Props: `jobs`

2. **Interview Reminders Section** (in StatsDashboard or separate)
   - List upcoming interviews (within next 7 days)
   - Show: Company name, Role, Interview date, Days remaining
   - useEffect hook to check for reminders periodically
   - Optional: Browser notifications (Notification API)
   
3. **Date Utility Functions** (`utils/dateUtils.js`)
   - `getDaysUntilInterview(date)` 
   - `getUpcomingInterviews(jobs)` - filter interviews within 7 days
   - `formatDate(date)`
   - `isToday(date)`, `isTomorrow(date)`

**Deliverables:**
- Statistics dashboard with 4 stats
- Simple funnel chart visualization
- Interview reminder list
- Date utility functions
- useEffect for periodic checks

**Difficulty:** ⭐⭐ (Beginner-friendly, mostly calculations and useEffect practice)

---

## 📁 File Structure (Complete)

```
src/
├── components/
│   ├── JobCard.jsx              [MEMBER 1]
│   ├── JobForm.jsx              [MEMBER 1]
│   ├── KanbanBoard.jsx          [MEMBER 2]
│   └── StatsDashboard.jsx       [MEMBER 3]
├── utils/
│   ├── jobUtils.js              [MEMBER 2]
│   └── dateUtils.js             [MEMBER 3]
├── App.jsx                      [MEMBER 1 - Main orchestration]
├── App.css                      [Shared - All members contribute]
├── index.css                    [Shared - Setup]
└── main.jsx                     [Existing]
```

---

## 🔄 Data Flow Architecture

```
App.jsx (Main State)
├── jobs: Array of job objects
├── activeTab: 'kanban' | 'stats'
└── Functions:
    ├── addJob(jobData)
    ├── updateJobStatus(jobId, newStatus)
    ├── deleteJob(jobId)
    └── updateJob(jobId, newData)

Job Object Structure:
{
  id: number (timestamp),
  company: string,
  role: string,
  status: 'Applied' | 'Interviewed' | 'Offer' | 'Rejected',
  interviewDate: string (optional), // Format: YYYY-MM-DD
  createdAt: string (date)
}
```

---

## 📝 Implementation Checklist

### Phase 1: Foundation (Week 1)
- [ ] MEMBER 1: Set up JobCard component (basic display)
- [ ] MEMBER 1: Set up JobForm component (basic form)
- [ ] MEMBER 1: Update App.jsx with state & functions
- [ ] MEMBER 1: Implement localStorage (useEffect)
- [ ] ALL: Test basic add/update/delete functionality

### Phase 2: Kanban Board (Week 1-2)
- [ ] MEMBER 2: Create KanbanBoard layout (4 columns)
- [ ] MEMBER 2: Implement HTML5 drag-and-drop
- [ ] MEMBER 2: Add visual feedback for dragging
- [ ] MEMBER 2: Test status updates via drag-drop
- [ ] ALL: Integrate with existing components

### Phase 3: Stats & Reminders (Week 2)
- [ ] MEMBER 3: Create StatsDashboard component
- [ ] MEMBER 3: Build statistics calculations
- [ ] MEMBER 3: Create simple funnel chart
- [ ] MEMBER 3: Build interview reminders section
- [ ] MEMBER 3: Implement date utilities
- [ ] ALL: Test all features

### Phase 4: Polish (Week 2-3)
- [ ] ALL: CSS refinement & responsiveness
- [ ] ALL: Bug fixes & edge cases
- [ ] ALL: Testing & final review

---

## 💡 Key Learning Points (Beginner-Friendly!)

### For Everyone:
- React hooks: useState, useEffect
- Component composition & prop drilling
- Array methods: map, filter, find, some
- Date handling in JavaScript
- Basic CSS flexbox/grid

### MEMBER 1 Learns:
- State management patterns
- Form handling in React
- localStorage API
- Component lifecycle with useEffect

### MEMBER 2 Learns:
- HTML5 Drag and Drop API
- Event handling in React
- CSS positioning & transforms
- Performance considerations

### MEMBER 3 Learns:
- Data calculations & filtering
- Date utilities & formatting
- Simple canvas/SVG visualization
- useEffect for side effects (notifications)

---

## 🚀 Getting Started

1. **Clone/Pull** the project
2. **Read this document** as a team
3. **Assign members** to their sections
4. **Create branches** per feature (optional):
   ```bash
   git checkout -b feature/member1-components
   git checkout -b feature/member2-kanban
   git checkout -b feature/member3-dashboard
   ```
5. **Daily standup**: 15 min sync on progress/blockers
6. **Code review**: Before merging, other members review

---

## 📚 Helpful Resources (No External Libraries!)

- **Drag & Drop**: MDN - HTML Drag and Drop API
- **useEffect**: React Docs - Effect Hook
- **localStorage**: MDN - Window.localStorage
- **Date Utilities**: MDN - Date object, date-fns is not needed
- **Canvas/SVG**: MDN - Canvas API / SVG basics

---

## ✅ Definition of Done

- [ ] Code works without errors
- [ ] Components are reusable & clean
- [ ] Comments explain complex logic
- [ ] Tested with sample data
- [ ] CSS is organized
- [ ] No console warnings/errors
- [ ] Team review completed

---

**Good luck! Start with MEMBER 1's tasks first, as others depend on it. 🎯**
