import { useState } from 'react'
import './App.css'
import JobForm from './components/JobForm'
import JobCard from './components/JobCard'
import KanbanBoard from './components/KanbanBoard'
import StatsDashboard from './components/StatsDashboard'

export default function App() {
  // State to store job applications
  // Each job will have: id, company, role, status, interviewDate, appliedDate
  const [jobs, setJobs] = useState([])
  const [activeTab, setActiveTab] = useState('kanban')

  const addJob = (jobData) => {
    const newJob = {
      id: Date.now(),
      company: jobData.company,
      role: jobData.role,
      status: jobData.status || 'Applied',
      interviewDate: jobData.interviewDate || '',
      appliedDate: new Date().toLocaleDateString()
    }
    setJobs([...jobs, newJob])
  }

  const updateJobStatus = (jobId, newStatus) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, status: newStatus } : job
    ))
  }

  const deleteJob = (jobId) => {
    setJobs(jobs.filter(job => job.id !== jobId))
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📋 Job Application Tracker</h1>
        <p className="subtitle">Keep track of all your job applications in one place</p>
      </header>

      <nav className="nav-tabs">
        <button 
          className={`tab-btn ${activeTab === 'kanban' ? 'active' : ''}`}
          onClick={() => setActiveTab('kanban')}
        >
          📊 Kanban Board
        </button>
        <button 
          className={`tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          📈 Statistics
        </button>
        <button 
          className={`tab-btn ${activeTab === 'add' ? 'active' : ''}`}
          onClick={() => setActiveTab('add')}
        >
          ➕ Add Job
        </button>
      </nav>

      <main className="main-content">
        {activeTab === 'add' ? (
          <JobForm onAddJob={addJob} />
        ) : jobs.length === 0 ? (
          <div className="no-jobs-message">
            <h2>No jobs added yet!</h2>
            <p>Click on "Add Job" to start tracking your applications.</p>
          </div>
        ) : (
          <div className="view-container">
            {activeTab === 'kanban' && (
              <div className="jobs-list">
                <h2>All Applications</h2>
                <div className="jobs-grid">
                  {jobs.map(job => (
                    <JobCard 
                      key={job.id} 
                      job={job} 
                      onDelete={deleteJob} 
                    />
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'stats' && (
              <StatsDashboard jobs={jobs} />
            )}
          </div>
        )}
      </main>
    </div>
  )
}
