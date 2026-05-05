export default function StatsDashboard({ jobs }) {
  return (
    <div className="stats-dashboard">
      <h2>Stats Dashboard</h2>
      <p>Total jobs: {jobs.length}</p>
    </div>
  )
}
