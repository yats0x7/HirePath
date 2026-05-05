export default function KanbanBoard({ jobs, onStatusChange, onDelete }) {
  return (
    <div className="kanban-board">
      <h2>Kanban Board</h2>
      <p>Jobs count: {jobs.length}</p>
    </div>
  )
}
