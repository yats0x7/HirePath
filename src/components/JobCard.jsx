
export default function JobCard({ job, onDelete }) {
  return (
    <div className="job-card">
      <div className="card-header">
        <h3>{job.company}</h3>
        <button className="delete-btn" onClick={() => onDelete(job.id)}>×</button>
      </div>
      <p className="role"><strong>Role:</strong> {job.role}</p>
      <p className="status"><strong>Status:</strong> <span className={`status-badge ${job.status.toLowerCase()}`}>{job.status}</span></p>
      
      {job.interviewDate && (
        <p className="date"><strong>Interview:</strong> {job.interviewDate}</p>
      )}
    </div>
  );
}
