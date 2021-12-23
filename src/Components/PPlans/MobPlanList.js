import React from "react";
import Time from "react-pure-time";

function MobPlanList({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((data) => (
          <div key={data._id} className="mobPlanList planList">
            <div className="mobPL-flex-list">
              <div className="pDetail-col-flex pDetail-col">
                <p>Date Purchased</p>
                <Time value={data.createdAt} format="d-m-Y" />
              </div>

              <div className="pDetail-col-flex pDetail-col">
                <p>Amount Paid</p>
                <p>N{data.price}</p>
              </div>
            </div>

            <div className="mobPL-flex-list">
              <div className="pDetail-col-flex pDetail-col">
                <p>Phones Covered</p>
                <p>{data.numOfPhones}</p>
              </div>
              <div className="pDetail-col-flex pDetail-col">
                <p>Laptops Covered</p>
                <p>{data.numOfLaptops}</p>
              </div>
            </div>
            <div className="pDetail-col-flex">
              <button className="btn vDetails-btn">VIEW DETAILS</button>
            </div>
          </div>
        ))}
    </>
  );
}

export default MobPlanList;
