function JobList({ jobs, onDeleteJob, onEditJob }) {
  const getStatusClass = (status) => {
    if (status === "applied") return "bg-primary";
    if (status === "interview") return "bg-warning text-dark";
    if (status === "rejected") return "bg-danger";
    if (status === "offer") return "bg-success";
  };
  return (
  <div>
    <h3>Job List</h3>

    <table className="table table-hover">
      <thead>
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
            <td colSpan="8" className="text-center">
              No matching jobs found
            </td>
          </tr>
        ) : (
          jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.position}</td>
              <td>{job.company}</td>
              <td>{job.dateApplied}</td>
              <td>
                <span className={`badge ${getStatusClass(job.status)}`}>
                  {job.status}
                </span>
              </td>
              <td>{job.jobDescription}</td>
              <td>{job.salary}</td>
              <td>{job.location}</td>
              <td>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => onEditJob(job)}
                >
                  <i className="bi bi-pencil"></i>
                </button>

                <button
                  className="btn btn-danger"
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
);
}

export default JobList;
