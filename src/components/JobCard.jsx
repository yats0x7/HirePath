
export default function JobCard({ job, onDelete, onStatusUpdate }) {
  return (
    <div className="job-card">
      <div className="card-header">
        <h3>{job.company}</h3>
        <button 
          className="delete-btn" 
          onClick={() => onDelete(job.id)}
        >
          ×
        </button>
      </div>
      
      <div className="card-body">
        <p className="role">Role: {job.role}</p>
        
        <div className="status-update">
          <span>Status:</span>
          <select 
            className={`status-select ${job.status.toLowerCase()}`}
            value={job.status} 
            onChange={(e) => onStatusUpdate(job.id, e.target.value)}
          >
            <option value="Applied">Applied</option>
            <option value="Interviewed">Interviewed</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        
        {job.interviewDate && (
          <p className="date">Interview: {job.interviewDate}</p>
        )}
        
        <p className="applied-date">Added on: {job.appliedDate}</p>
      </div>
    </div>
  );
}
