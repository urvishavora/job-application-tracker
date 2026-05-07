import { useEffect, useState } from "react";
import "./App.css";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import EditJobModal from "./components/EditJobModal";
import Dashboard from "./components/Dashboard";

function App() {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [];
  });
  const [editingJob, setEditingJob] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (jobData) => {
    const newJob = {
      id: Date.now(),
      ...jobData,
    };
    setJobs([...jobs, newJob]);
  };
  const deleteJob = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job Application?",
    );
    if (confirmDelete) {
      setJobs(jobs.filter((job) => job.id !== id));
    }
  };

  const updateJob = (updatedJob) => {
    setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
    setEditingJob(null);
  };

  const filteredJobs = jobs
    .filter((job) => {
      const matchesStatus =
        filterStatus === "all" || job.status === filterStatus;
      const matchesSearch =
        job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesStatus && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.dateApplied) - new Date(a.dateApplied);
      } else {
        return new Date(a.dateApplied) - new Date(b.dateApplied);
      }
    });

  return (
    <div className="app-container">
      <h1>Job Application Tracker</h1>
      <div className="nav-links mb-4">
        <nav>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add Job
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs">
                View Jobs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard jobs={jobs} />} />
        <Route
          path="/add"
          element={
            <JobForm
              onAddJob={addJob}
              editingJob={editingJob}
              onUpdateJob={updateJob}
            />
          }
        />
        <Route
          path="/jobs"
          element={
            <>
              <div className="row mb-4 align-items-end">
                <div className="col-md-6">
                  <input
                    id="searchTerm"
                    type="text"
                    className="form-control"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by position, company, or location"
                  />
                </div>

                <div className="col-md-6 d-flex gap-3">
                  <div className="w-50">
                    <select
                      id="statusFilter"
                      className="form-control"
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                    >
                      <option value="all">All</option>
                      <option value="applied">Applied</option>
                      <option value="interview">Interview</option>
                      <option value="rejected">Rejected</option>
                      <option value="offer">Offer</option>
                    </select>
                  </div>
                  <div className="w-50">
                    <select
                      id="sortOrder"
                      className="form-control"
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                    >
                      <option value="newest">Newest</option>
                      <option value="oldest">Oldest</option>
                    </select>
                  </div>
                </div>
              </div>

              <JobList
                jobs={filteredJobs}
                onDeleteJob={deleteJob}
                onEditJob={setEditingJob}
              />
              {editingJob && (
                <EditJobModal
                  editingJob={editingJob}
                  onUpdateJob={updateJob}
                  onClose={() => setEditingJob(null)}
                />
              )}
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
