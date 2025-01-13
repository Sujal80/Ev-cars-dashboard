// src/App.js
import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Header from "./header.js";
import "./App.css";
import "./extra.js";
import PieChart from "./PieChart";
import MapChart from "./MapChart";
import "./jsvectormap/dist/js/jsvectormap.min.js?1692870487";
import "./jsvectormap/dist/js/jsvectormap.js";
import "./jsvectormap/dist/maps/world.js?1692870487";
import "./jsvectormap/dist/maps/world-merc.js?1692870487";
import BarsDataset from "./BarsDataset";

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/Electric_Vehicle_Population_Data.csv");
      const csvText = await response.text();

      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          setData(result.data);
        },
      });
    };

    fetchData();
  }, []);

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="page">
      {/* Use the Header component */}
      <Header />
      {/* Main content page wrapper */}
      <div className="page-wrapper">
        {/* Page header */}
        <div className="page-header d-print-none">
          <div className="container-xl">
            <div className="row g-2 align-items-center">
              <div className="col">
                <div className="page-pretitle">Overview</div>
                <h2 className="page-title">Dashboard</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="page-body">
          <div className="container-xl">
            <div className="row row-deck row-cards">
              <div className="col-12">
                <div className="row row-cards">
                  <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="bg-primary text-white avatar">
                              <img
                                src="/svg/bmw-svgrepo-com.svg"
                                alt=""
                                width="24"
                                height="24"
                              />
                            </span>
                          </div>
                          <div className="col">
                            <div className="font-weight-medium">BMW</div>
                            <div className="text-secondary">
                              7 electric vehicle models
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="bg-white text-white avatar">
                              <img
                                src="/svg/audi-svgrepo-com.svg"
                                alt=""
                                width="24"
                                height="24"
                              />
                            </span>
                          </div>
                          <div className="col">
                            <div className="font-weight-medium">Audi</div>
                            <div className="text-secondary">
                              6 electric vehicle models
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="bg-twitter text-white avatar">
                              <img
                                src="/svg/chevrolet-svgrepo-com.svg"
                                alt=""
                                width="24"
                                height="24"
                              />
                            </span>
                          </div>
                          <div className="col">
                            <div className="font-weight-medium">Chevrolet</div>
                            <div className="text-secondary">
                              5 electric vehicle models
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="bg-facebook text-white avatar">
                              <img
                                src="/svg/tesla-svgrepo-com.svg"
                                alt=""
                                width="24"
                                height="24"
                              />
                            </span>
                          </div>
                          <div className="col">
                            <div className="font-weight-medium">Tesla</div>
                            <div className="text-secondary">
                              6 electric vehicle models
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title">Locations</h3>
                    <div class="ratio ratio-21x9">
                      <div>
                        <MapChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Barset */}
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title">Recent Year Models</h3>

                    <div class="ratio ratio-21x9">
                      <div>
                        <BarsDataset />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PieChart */}
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <div>
                      <PieChart />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h3 class="card-title">Model's Legislative District</h3>
                    <div>
                      {data.length > 0 && (
                        <>
                          <div className="table-responsive">
                            <table className="table card-table table-vcenter text-nowrap datatable">
                              <thead>
                                <tr>
                                  {[
                                    "Model Name",
                                    "Electric Range",
                                    "Legislative District",
                                  ].map((column, index) => (
                                    <th key={index}>{column}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {currentData.map((row, index) => (
                                  <tr key={index}>
                                    <td>{Object.values(row)[7]}</td>{" "}
                                    <td>{Object.values(row)[10]}</td>{" "}
                                    <td>{Object.values(row)[12]}</td>{" "}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          {/* Pagination Controls */}
                          <div className="card-footer d-flex align-items-center">
                            <p className="m-0 text-secondary">
                              Showing <span>{indexOfFirstRow + 1}</span> to{" "}
                              <span>
                                {Math.min(indexOfLastRow, data.length)}
                              </span>{" "}
                              of <span>{data.length}</span> entries
                            </p>
                            <ul className="pagination m-0 ms-auto">
                              {/* Previous Button */}
                              <li
                                className={`page-item ${
                                  currentPage === 1 ? "disabled" : ""
                                }`}
                              >
                                <button
                                  className="page-link"
                                  onClick={handlePrevPage}
                                  disabled={currentPage === 1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path
                                      stroke="none"
                                      d="M0 0h24v24H0z"
                                      fill="none"
                                    />
                                    <path d="M15 6l-6 6l6 6" />
                                  </svg>
                                  Prev
                                </button>
                              </li>

                              {/* Next Button */}
                              <li
                                className={`page-item ${
                                  currentPage === totalPages ? "disabled" : ""
                                }`}
                              >
                                <button
                                  className="page-link"
                                  onClick={handleNextPage}
                                  disabled={currentPage === totalPages}
                                >
                                  Next
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path
                                      stroke="none"
                                      d="M0 0h24v24H0z"
                                      fill="none"
                                    />
                                    <path d="M9 6l6 6l-6 6" />
                                  </svg>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Full Table</h3>
                  </div>
                  <div className="card-body border-bottom py-3">
                    <div className="d-flex">
                      <div className="text-secondary">
                        Show
                        <div className="mx-2 d-inline-block">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            value="15"
                            size="3"
                            aria-label="Invoices count"
                            disabled
                          />
                        </div>
                        entries
                      </div>
                      <div className="ms-auto text-secondary">
                        Search:
                        <div className="ms-2 d-inline-block">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            aria-label="Search invoice"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {data.length > 0 && (
                    <>
                      <div className="table-responsive">
                        <table className="table card-table table-vcenter text-nowrap datatable">
                          <thead>
                            <tr>
                              {Object.keys(data[0]).map((key) => (
                                <th key={key}>{key}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {currentData.map((row, index) => (
                              <tr key={index}>
                                {Object.values(row).map((value, i) => (
                                  <td key={i}>{value}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Pagination Controls */}
                      <div className="card-footer d-flex align-items-center">
                        <p className="m-0 text-secondary">
                          Showing <span>{indexOfFirstRow + 1}</span> to{" "}
                          <span>{Math.min(indexOfLastRow, data.length)}</span>{" "}
                          of <span>{data.length}</span> entries
                        </p>
                        <ul className="pagination m-0 ms-auto">
                          {/* Previous Button */}
                          <li
                            className={`page-item ${
                              currentPage === 1 ? "disabled" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={handlePrevPage}
                              disabled={currentPage === 1}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M15 6l-6 6l6 6" />
                              </svg>
                              Prev
                            </button>
                          </li>

                          {/* Next Button */}
                          <li
                            className={`page-item ${
                              currentPage === totalPages ? "disabled" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={handleNextPage}
                              disabled={currentPage === totalPages}
                            >
                              Next
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M9 6l6 6l-6 6" />
                              </svg>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
