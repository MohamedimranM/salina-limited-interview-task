export function MissionValue() {
  return (
    <>
      <div className="card container mt-2">
        <div className="card p-4 shadow-sm mb-4">
          <h4 className="fw-bold mb-3">Mission & Vision & Values</h4>
          <div className="mb-3">
            <h6 className="fw-bold">Mission</h6>
            <a href="#" className="text-decoration-none text-primary">
              To inspire and nurture the human spirit – one person, one cup and
              one neighborhood at a time.
            </a>
          </div>
          <div className="mb-3">
            <h6 className="fw-bold">Vision</h6>
            <a href="#" className="text-primary">
              To establish Starbucks as the premier purveyor of the finest
              coffee in the world while maintaining our uncompromising
              principles while we grow.
            </a>
          </div>
          <div className="mb-4">
            <h6 className="fw-bold">Values</h6>
            <a href="#" className="text-primary">
              No one has added Starbucks' values yet.
            </a>
          </div>

          <div className="d-flex justify-content-end">
            <button className="btn btn-outline-secondary me-2">Discard</button>
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
        <div className="container mt-3 w-100 text-bg-light">
        </div>
      </div>
    </>
  );
}
