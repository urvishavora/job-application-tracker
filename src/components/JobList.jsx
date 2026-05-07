function JobList({ jobs, onDeleteJob, onEditJob }) {
  const getStatusClass = (status) => {
    if (status === "applied") return "bg-primary";
    if (status === "interview") return "bg-warning text-dark";
    if (status === "rejected") return "bg-danger";
    if (status === "offer") return "bg-success";
  };

  const formatText = (text) => {
    if(!text) return "";
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return (
    <div className="container mt-4">
      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          <h4 className="mb-4">
            <i className="bi bi-list-task me-2"></i>
            Job List
          </h4>

          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Position</th>
                <th>Company</th>
                <th>Date Applied</th>
                <th>Status</th>
                <th>Description</th>
                <th>Salary</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {jobs.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center text-muted">
                    No matching jobs found
                  </td>
                </tr>
              ) : (
                jobs.map((job) => (
                  <tr key={job.id}>
                    <td>{formatText(job.position)}</td>
                    <td>{formatText(job.company)}</td>
                    <td>{job.dateApplied}</td>
                    <td>
                      <span className={`badge ${getStatusClass(job.status)}`}>
                        {formatText(job.status)}
                      </span>
                    </td>
                    <td>{formatText(job.jobDescription)}</td>
                    <td>${job.salary}</td>
                    <td>{formatText(job.location)}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => onEditJob(job)}
                      >
                        <i className="bi bi-pencil"></i>
                      </button>

                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => onDeleteJob(job.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default JobList;
