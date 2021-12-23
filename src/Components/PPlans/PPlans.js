import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PPlans.css";
import homeIco from "./img/homeIco.png";
import pplansIco from "./img/pplansIco.png";
import lDeviceIco from "./img/linkedDevicesIco.png";
import repairIco from "./img/repirsIco.png";
import claimsIco from "./img/claimsIco.png";
import { useAuth } from "../../auth-context";
import axios from "axios";
import ReactPaginate from "react-paginate";
import PlanList from "./PlanList";
import MobPlanList from "./MobPlanList";

function PPlans() {
  const { logout } = useAuth();
  const token = localStorage.getItem("userToken");
  const [planList, setPlanList] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + 3;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(planList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(planList.length / 3));
  }, [itemOffset, planList]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    axios
      .get("plan/spplan/fetch/", {
        headers: {
          accesstoken: token,
        },
        signal: signal,
      })
      .then(
        (res) => {
          console.log("DATA", res.data.data);
          setPlanList(res.data.data);
        },
        (err) => {
          console.log("Error", err);
        }
      );
    return function cleanUp() {
      abortController.abort();
    };
  }, [token]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 3) % planList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <section className="pplans-sec">
      <div className="pplans-container">
        <div className="row">
          <div className="col-lg-3 h-100">
            <div className="sideLinks">
              <Link to="/PPlans">
                <span className="material-icons ico userNameIco">person</span>{" "}
                <div className="sl-username">
                  <p>My Profile</p>
                  <p>Paul Omotayo</p>
                </div>
              </Link>
              <hr className="sl-hr" />
              <Link className="sl-a" to="/PPlans">
                <img src={homeIco} alt="home" /> <p>Home</p>
              </Link>
              <Link className="sl-a sl-a--active" to="/PPlans">
                <img src={pplansIco} alt="protection plans" />
                <p> Protection Plans</p>
              </Link>
              <Link className="sl-a sl-a--wImg" to="/PPlans">
                <img src={lDeviceIco} alt="linked device" />{" "}
                <p>Linked Device</p>
              </Link>
              <Link className="sl-a" to="/PPlans">
                <img src={repairIco} alt="repair icon" />
                <p>Repairs</p>
              </Link>
              <Link className="sl-a" to="/PPlans">
                <img src={claimsIco} alt="claims" /> <p>Claims</p>
              </Link>
              <div className="sl-logoutBtn">
                <button onClick={() => logout()} className="btn">
                  Logout
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-9 h-100">
            <div className="ProtectionPlans">
              <div className="ppHeading">
                <span class="material-icons-outlined backArrow">arrow_back</span>
                <h4>Protection Plans</h4>
              </div>
              <hr className="sl-hr" />
              <div className="pp-title--container">
                <div className="pp-title">
                  <p className="pp-title--active">SCREEN PROTECTION (3)</p>
                  <p>SERVICE CONTRACT(0)</p>
                </div>
                <hr className="sl-hr" />
              </div>

              <div className="planList--container">
                <PlanList currentItems={currentItems} />
                <MobPlanList currentItems={currentItems} />
                <ReactPaginate
                  nextLabel=">"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={2}
                  pageCount={pageCount}
                  previousLabel="<"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PPlans;
