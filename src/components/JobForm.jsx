import { useState, useEffect } from "react";

function JobForm({ onAddJob, editingJob, onUpdateJob }) {
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    dateApplied: "",
    status: "applied",
    jobDescription: "",
    salary: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (editingJob) {
      setFormData(editingJob);
    }
  }, [editingJob]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingJob) {
      onUpdateJob({ ...formData, id: editingJob.id });
    } else {
      onAddJob(formData);
    }
    setFormData({
      position: "",
      company: "",
      dateApplied: "",
      status: "applied",
      jobDescription: "",
      salary: "",
      location: "",
    });
  };
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="text-center mb-4">
                <i className="bi bi-plus-circle me-2"></i>
                Add Job Application
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-2 text-start">
                  <label className="form-label fw-semibold">Position:</label>

                  <input
                    type="text"
                    className="form-control"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-2 text-start">
                  <label className="form-label fw-semibold">
                    Company Name:
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-2 text-start">
                  <label className="form-label fw-semibold">
                    Application Date:
                  </label>

                  <input
                    type="date"
                    className="form-control"
                    name="dateApplied"
                    value={formData.dateApplied}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2 text-start">
                  <label className="form-label fw-semibold">Status:</label>

                  <select
                    id="status"
                    name="status"
                    className="form-control"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="applied">Applied</option>
                    <option value="interview">Interview</option>
                    <option value="rejected">Rejected</option>
                    <option value="offer">Offer</option>
                  </select>
                </div>
                <div className="mb-2 text-start">
                  <label className="form-label fw-semibold">
                    Job Description:
                  </label>

                  <textarea
                    name="jobDescription"
                    className="form-control"
                    rows="3"
                    value={formData.jobDescription}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2 text-start">
                  <label className="form-label fw-semibold">Salary:</label>

                  <input
                    type="text"
                    className="form-control"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2 text-start">
                  <label className="form-label fw-semibold">Location:</label>

                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4 text-center">
                  <button className="btn btn-primary w-100 mt-3" type="submit">
                    Add Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobForm;
