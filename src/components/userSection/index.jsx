export function UserSection() {
  return (
    <>

        <div className="container">
          <div className="d-flex justify-content-center align-items-center ">
            <div className="d-flex align-items-center gap-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Logo"
                className="rounded-circle"
              />
              <h5 className="fw-bold border p-2 rounded">OGDA MAC1</h5>

              <div className="d-flex mt-4">
                <p style={{ color: "#A077FF" }}>User Entry :</p>
                <div>
                  <p>DE ODGA MAC1-631</p>
                  <p>10:11AM</p>
                </div>
                <span className="border-right"></span>
              </div>
              <div className="d-flex mt-4">
                <p style={{ color: "#A077FF" }}>Create date :</p>
                <div>
                  <p>31/01/2024</p>
                  <p>10:11AM</p>
                </div>
                <span className="border-right"></span>
              </div>
              <div className="d-flex mt-4">
                <p style={{ color: "#A077FF" }}>Modify date :</p>
                <div>
                  <p>31/01/2024</p>
                  <p>10:11AM</p>
                </div>
                <span className="border-right"></span>
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
            <button className="btn btn-outline-secondary px-4">View</button>
            <button
              className="btn btn-primary text-white px-4"
              //   style={{ backgroundColor: "#A077FF", border: "none" }}
            >
              Edit
            </button>
            <button className="btn btn-outline-secondary px-4">Privacy</button>
            <button className="btn btn-outline-secondary px-4">Document</button>
            <button className="btn btn-outline-secondary px-4">Print</button>
            <button className="btn btn-outline-secondary px-4">Share</button>
          </div>

          <div className="d-flex justify-content-center gap-2">
            <button className="btn btn-outline-secondary px-5">As Entry</button>
            <button
              className="btn btn-primary text-white px-5"
              //   style={{ backgroundColor: "#A077FF", border: "none" }}
            >
              As View
            </button>
          </div>
        </div>
    </>
  );
}
