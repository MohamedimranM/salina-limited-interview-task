export function UserProfile() {
  return (
    <>
      <div className="container mt-3">
        <div className="position-relative">
          <div
            style={{
              backgroundColor: "#E4E0E1",
              height: "200px",
              borderRadius: "10px",
            }}
          ></div>
          <button
            className="btn btn-purple position-absolute"
            style={{
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#A077FF",
              color: "white",
            }}
          >
            Add Profile Poster
            <input type="file" className="d-none" />
          </button>
        </div>

        <div className="">
          <div
            className=" bg-light border rounded-circle d-inline-block position-relative"
            style={{
              width: "140px",
              height: "140px",
              left: "30px",
              marginTop: "-80px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          ></div>
        </div>

        <div className="text-center mb-2">
          <h2
            className="fw-bold"
            style={{ color: "#6C4AB6", fontWeight: "600" }}
          >
            Owner Gate
          </h2>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <span className="fw-semibold text-secondary border p-1 rounded">
              OWNE RGAT
            </span>
            <span className="fw-semibold" style={{ color: "#A077FF" }}>
              Super Admin
            </span>
          </div>
        </div>

        <div className="card p-3 mx-auto mb-3" style={{ maxWidth: "500px" }}>
          <div className="row mb-2">
            <div className="col-6 fw-bold">AddMail</div>
            <div className="col-6 fw-bold">Default Generating</div>
          </div>
          <div className="row mb-2 align-items-center">
            <div className="col-6">✅ WhatsApp</div>
            <div className="col-6 text-primary">
              <a href="#">+971 ▼ 050 635 9999</a>
            </div>
          </div>
          <div className="row mb-2 align-items-center">
            <div className="col-6">📷 Instagram</div>
            <div className="col-6 text-primary">
              <a href="#">Add Instagram Link</a>
            </div>
          </div>
          <div className="row mb-2 align-items-center">
            <div className="col-6">📘 Facebook</div>
            <div className="col-6 text-primary">
              <a href="#">Add Facebook Link</a>
            </div>
          </div>
          <div className="row mb-2 align-items-center">
            <div className="col-6">X</div>
            <div className="col-6 text-primary">
              <a href="#">Add X Link</a>
            </div>
          </div>
          <div className="row mb-2 align-items-center">
            <div className="col-6">🔴 YouTube</div>
            <div className="col-6 text-primary">
              <a href="#">Add YouTube Link</a>
            </div>
          </div>
          <div className="row mb-2 align-items-center">
            <div className="col-6">🟢 WeChat</div>
            <div className="col-6 text-primary">
              <a href="#">Add WeChat Link</a>
            </div>
          </div>
          <div className="row mb-2 align-items-center">
            <div className="col-6">🔵 Telegram</div>
            <div className="col-6 text-primary">
              <a href="#">+971 ▼ 050 635 9999</a>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-2 mt-3">
            <button className="btn btn-outline-secondary px-4">Discard</button>
            <button
              className="btn text-white px-4"
              style={{ backgroundColor: "#A077FF", border: "none" }}
            >
              Save
            </button>
          </div>
        </div>
        <div className="container mb-3">
          <div className="d-flex justify-content-start align-items-center mb-3">
            <button className="btn btn-primary me-2">Full Page</button>
            <button className="btn btn-outline-secondary me-2">
              Properties
            </button>
            <button className="btn btn-outline-secondary me-2">Services</button>
            <button className="btn btn-outline-secondary me-2">News</button>
            <button className="btn btn-outline-secondary me-2">
              Locations
            </button>
            <button className="btn btn-outline-secondary me-2">
              Management
            </button>
            <button className="btn btn-outline-secondary">About</button>
          </div>

          <div className="card p-4 shadow-sm">
            <h3 className="fw-bold">About Owner Gate</h3>
            <p className="text-primary">
              Owner Gate serves as a platform for property owners, landlords,
              tenants, agents and real estate professionals to facilitate
              various aspects of property management. These websites typically
              offer a range of services and features, including Property
              Listings, Customer and Agreement Management, Maintenance & Repair,
              Communication and Collaboration, and Analytics and Insights.
            </p>

            <div className="d-flex gap-4">
              <p className="col-2">Email</p>
              <p className="col">
                <a className="link-opacity-75 text-primary" href="#">
                  invester.damaac@group
                </a>
              </p>
            </div>
            <div className="d-flex gap-4">
              <p className="col-2">Phone Number</p>
              <p className="col">
                <a className="link-opacity-75 text-primary" href="#">
                  999999999999
                </a>
              </p>
            </div>
            <div className="d-flex gap-4">
              <p className="col-2"> Web Site</p>
              <p className="col">
                <a className="link-opacity-75 text-primary" href="#">
                  www.google.com
                </a>
              </p>
            </div>
            <div className="d-flex gap-4">
              <p className="col-2">Gender</p>
              <p className="col">
                <a className="link-opacity-75 text-primary" href="#">
                  male
                </a>
              </p>
            </div>
            <div className="d-flex gap-4">
              <p className="col-2">Date of Birth</p>
              <p className="col">
                <a className="link-opacity-75 text-primary" href="#">
                  09/09/2010
                </a>
              </p>
            </div>
            <div className="d-flex gap-4">
              <p className="col-2">Nationality</p>
              <p className="col">
                <a className="link-opacity-75 text-primary" href="#">
                  National Id number
                </a>
              </p>
            </div>
            <div className="d-flex gap-4">
              <p className="col-2">Licence Number</p>
              <p className="col">
                <a className="link-opacity-75 text-primary" href="#">
                  123456789
                </a>
              </p>
            </div>
            <div className="d-flex gap-4">
              <p className="col-2">Expiry Date</p>
              <p className="col">
                <a className="link-opacity-75 text-primary" href="#">
                  123456789
                </a>
              </p>
            </div>
            <div className="d-flex gap-4">
              <p className="col-2">Permision </p>
              <p className="col">
                <a className="link-opacity-75 text-primary" href="#">
                  123456789
                </a>
              </p>
            </div>
            <div className="d-flex justify-content-end gap-2 mt-3">
              <button className="btn btn-light">Discard</button>
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
