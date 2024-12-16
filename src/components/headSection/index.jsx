export function HeadSection() {
  return (
    <>
      <div className="container mt-5 mb-3 pb-2">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold m-0">Customer System Profile Entry</h3>
          <button
            className="btn btn-primary text-white"
            // style={{ backgroundColor: "#A077FF" }}
          >
            View List
          </button>
        </div>

          <div className="d-flex justify-content-between align-items-center ">
            <div className="d-flex align-items-center gap-5">
                <p className="fw-bold">Status</p>
                {/* <select className="form-select form-select-sm text-white border-0 btn btn-success" style={{ backgroundColor: "#06D001", width:"110px", color:"#1111" }}>
                  <option style={{backgroundColor: "#0000"}} >
                    Active
                  </option>
                  <option >Inactive</option>
                </select> */}
                <button className="btn text-white"style={{ backgroundColor: "#06D001", width:"110px", color:"#1111" }}>Active</button>
            </div>
            <div>
            <div className="d-flex text-end">
            <span className="fw-semibold" style={{ color: "#A077FF" }}>
                  Modify Date :
                </span>{" "}
                31/01/2024 11:11AM
              </div>
            </div>
            </div>
            
        <div className="mb-4 d-flex gap-5 mt-2">
          <label htmlFor="notes" className="form-label fw-bold">
            Notes
          </label>
          <textarea
            id="notes"
            rows="2"
            className="form-control"
            placeholder=""
          ></textarea>
        </div>

        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-outline-secondary px-3">Discard</button>
          <button
            className="btn btn-primary text-white px-3"
            // style={{ backgroundColor: "#A077FF" }}
          >
            Save
          </button>
        </div>
        <div className="border-bottom border-dark mt-2"></div>
      </div>
    </>
  );
}
