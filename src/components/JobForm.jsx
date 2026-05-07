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
    <div className="form-card mx-auto">
      <h2 className="text-center mb-4">Job Application Form</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="mt-4 text-center">
          <button className="btn btn-primary" type="submit">
            {editingJob ? "Update Application" : "Add Application"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default JobForm;
