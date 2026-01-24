// get previously stored job Application
const getStoredJobApplication = () => {
  return JSON.parse(localStorage.getItem("job-applications")) || [];
};

// save job Application
const saveJobApplication = (id) => {
  const storedJobApplications = getStoredJobApplication();
  const exists = storedJobApplications.find((storedId) => storedId === id);

  if (!exists) {
    storedJobApplications.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplications),
    );
  }
};

export { saveJobApplication, getStoredJobApplication };
