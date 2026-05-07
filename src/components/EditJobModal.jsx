import { useState, useEffect } from "react";

function EditJobModal({ editingJob, onUpdateJob, onClose }) {
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    dateApplied: "",
    status: "applied",
    jobDescription: "",
    salary: "",
    location: "",
  });
  useEffect(() => {
    if (editingJob) {
      setFormData(editingJob);
    }
  }, [editingJob]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateJob(formData);
  };
  return (
    <div className="modal fade show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Edit Application</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">
              <div className="mb-3 text-start">
                <label className="form-label">Position:</label>

                <input
                  type="text"
                  className="form-control"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 text-start">
                <label className="form-label">Company Name:</label>

                <input
                  type="text"
                  className="form-control"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 text-start">
                <label className="form-label">Application Date:</label>

                <input
                  type="date"
                  className="form-control"
                  name="dateApplied"
                  value={formData.dateApplied}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 text-start">
                <label className="form-label">Status:</label>

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
              <div className="mb-3 text-start">
                <label className="form-label">Job Description:</label>

                <textarea
                  name="jobDescription"
                  className="form-control"
                  value={formData.jobDescription}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 text-start">
                <label className="form-label">Salary:</label>

                <input
                  type="text"
                  className="form-control"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 text-start">
                <label className="form-label">Location:</label>

                <input
                  type="text"
                  className="form-control"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="modal-footer d-flex justify-content-center">
              <button type="button" className="btn btn-secondary me-3" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditJobModal;
