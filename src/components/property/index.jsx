import Image from "next/image";
import React from "react";

const PropertyList = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <ul className="nav nav-underline">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Rent
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active fw-bold" href="#">
                Sale
              </a>
            </li>
          </ul>
        </div>
        <div>
          <select className="form-select" style={{ width: "auto" }}>
            <option>Sort by name (A → Z)</option>
            <option>Sort by name (Z → A)</option>
            <option>Sort by price (Low → High)</option>
            <option>Sort by price (High → Low)</option>
          </select>
        </div>
      </div>

      <div className="row">

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm border-0">
            
            <div className="position-relative">
              <img
                
                className="card-img-top"
                alt="Studio"
                style={{height: "400px", objectFit: "cover", backgroundColor: "#0000" }}
              />
              <div className="position-absolute p-2" style={{ top: 0, left: 0 }}>
                <span className="badge bg-dark me-1">Featured</span>
                <span className="badge bg-primary">For Sale</span>
              </div>
            </div>
           
            <div className="card-body">
              <h5 className="fw-bold">Studio</h5>
              <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>
                Ajman One Complex - Tower No. 1 - Floor No. 10
              </p>
              <h6 className="fw-bold">AED 1,000,000</h6>
            </div>
            
            <div className="card-footer bg-white d-flex justify-content-between small text-muted">
              <span>2 Bedrooms</span>
              <span>2 Bathrooms</span>
              <span>1150ft</span>
            </div>
          </div>
        </div>

      
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm border-0">
           
            <div className="position-relative">
              <img
                
                className="card-img-top"
                alt="1-3 Bedrooms"
                style={{ height: "400px", width:"200px", objectFit: "cover" }}
              />
              <div className="position-absolute p-2" style={{ top: 0, left: 0 }}>
                <span className="badge bg-dark me-1">Featured</span>
                <span className="badge bg-primary">For Sale</span>
              </div>
            </div>
           
            <div className="card-body">
              <h5 className="fw-bold">1 - 3 Bedrooms</h5>
              <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>
                Ajman One Complex - Tower No. 1 - Floor No. 11
              </p>
              <h6 className="fw-bold">AED 800,000</h6>
            </div>
            
            <div className="card-footer bg-white d-flex justify-content-between small text-muted">
              <span>2 Bedrooms</span>
              <span>2 Bathrooms</span>
              <span>1150ft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
