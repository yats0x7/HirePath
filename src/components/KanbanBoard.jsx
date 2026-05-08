const columns = [
  { title: 'Applied', note: 'No jobs yet' },
  { title: 'Interviewed', note: 'No jobs yet' },
  { title: 'Offer', note: 'No jobs yet' },
  { title: 'Rejected', note: 'No jobs yet' }
]

export default function KanbanBoard() {
  return (
    <section className="kanban-board">
      <div className="kanban-board-header">
        <h2>Application Kanban Board</h2>
        <p>Track your application stages with a simple board layout.</p>
      </div>
      <div className="kanban-columns">
        {columns.map((column) => (
          <div key={column.title} className="kanban-column">
            <h3>{column.title}</h3>
            <div className="kanban-column-body">
              <p>{column.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
