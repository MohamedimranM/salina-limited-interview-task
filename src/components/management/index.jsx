export function Management(){
    return(
        <>
        <div className="container my-4">
      
      <div className="card p-4 shadow-sm">
        <h4 className="fw-bold mb-4">Management</h4>

        
        <div className="row g-4 mb-4 justify-content-center">
            <div className="col-md-2 d-flex justify-content-center"></div>
         
          <div className="col-md-4 d-flex justify-content-center">
            <div className="text-center">
           
              <div className="position-relative">
                <div
                  className="bg-secondary rounded"
                  style={{
                    width: "180px",
                    height: "180px",
                    position: "relative",
                  }}
                >
                  <div
                    className="position-absolute top-50 start-50 translate-middle"
                    style={{ zIndex: 10 }}
                  >
                    <label className="btn btn-primary btn-sm position-relative">
                      Add Profile Picture
                      <input
                        type="file"
                        className="position-absolute opacity-0 top-0 start-0 w-100 h-100"
                      />
                    </label>
                  </div>
                </div>
              </div>
             
              <h6 className="fw-bold text-primary mt-3">Rafiq Adam</h6>
              <p className="text-muted mb-1">Manager</p>
              <p className="text-primary mb-0">+971 50 123 12322</p>
            </div>
          </div>

          
          <div className="col-md-4 d-flex justify-content-center">
            <div className="text-center">
              
              <div className="position-relative">
                <div
                  className="bg-secondary rounded"
                  style={{
                    width: "180px",
                    height: "180px",
                    position: "relative",
                  }}
                >
                  <div
                    className="position-absolute top-50 start-50 translate-middle"
                    style={{ zIndex: 10 }}
                  >
                    <label className="btn btn-primary btn-sm position-relative">
                      Add Profile Picture
                      <input
                        type="file"
                        className="position-absolute opacity-0 top-0 start-0 w-100 h-100"
                      />
                    </label>
                  </div>
                </div>
              </div>
             
              <h6 className="fw-bold text-primary mt-3">Sonam Tahu</h6>
              <p className="text-muted mb-1">Watchman</p>
              <p className="text-primary mb-0">+971 58 643 2124</p>
            </div>
          </div>
        </div>

       
        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-primary">+ Add More</button>
        </div>

        
        <div className="d-flex justify-content-end">
          <button className="btn btn-outline-secondary me-2">Discard</button>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>

    <div className="container mt-2">
      <div className="card p-3 shadow-sm">
    
        <div className="d-flex align-items-center mb-3">
          <div
            className="rounded-circle bg-secondary"
            style={{ width: "40px", height: "40px" }}
          ></div>
          <div className="ms-2">
            <h6 className="mb-0 text-primary fw-bold">Title Here</h6>
            <small className="text-muted">12 April at 09.28 PM</small>
          </div>
        </div>

      <div className="d-flex  gap-5">

        <p className="text-primary mb-3">Description Here ..</p>  
        <div
          className="d-flex align-items-center justify-content-center bg-secondary text-end"
          style={{ height: "300px", borderRadius: "8px", width: "200px" }}
        >
          <div className="text-center">
            <label htmlFor="fileInput" className="btn btn-primary">
              Add Photo
            </label>
            <input
              type="file"
              id="fileInput"
              className="d-none"
              accept="image/*"
            />
            <div className="mt-2 text-muted">Choose file</div>
          </div>
        </div>
      </div>

        <div className="d-flex justify-content-end mt-3 gap-2">
          <button className="btn btn-outline-secondary">Discard</button>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>

        </>
    )
}






    




