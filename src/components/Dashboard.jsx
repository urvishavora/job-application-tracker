function Dashboard({ jobs }) {
  const total = jobs.length;

  const applied = jobs.filter((job) => job.status === "applied").length;
  const interview = jobs.filter((job) => job.status === "interview").length;
  const rejected = jobs.filter((job) => job.status === "rejected").length;
  const offer = jobs.filter((job) => job.status === "offer").length;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Dashboard Overview</h2>
      <div className="row g-3">
        <div className="col-md-2">
          <div className="card test-center shadow-sm">
            <div className="card-body">
              <div className="card-title">Total Applications</div>
                <i className="bi bi-briefcase fs-4 mb-2"></i>
              <h5 className="fw-bold text-dark">{total}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <div className="card-title">Applied</div>
              <i className="bi bi-send fs-4 mb-2"></i>
              <h5 className="fw-bold text-primary">{applied}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <div className="card-title">Interview</div>
              <i className="bi bi-chat-dots fs-4 mb-2"></i>
              <h5 className="fw-bold text-warning">{interview}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <div className="card-title">Rejected</div>
              <i className="bi bi-x-circle fs-4 mb-2"></i>
              <h5 className="text-danger">{rejected}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <div className="card-title">Offer</div>
              <i className="bi bi-check-circle fs-4 mb-2"></i>
              <h5 className="text-success">{offer}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
