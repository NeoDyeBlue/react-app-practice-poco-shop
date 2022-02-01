import { useState } from "react";
import Tab from "./Tab";
import fSeriesData from "../data/poco-f-data";
import mSeriesData from "../data/poco-m-data";
import xSeriesData from "../data/poco-x-data";

function ProductsTab() {
  const [activeTab, setActiveTab] = useState("all");

  function changeTab(event) {
    setActiveTab(event.target.id);
  }

  return (
    <div className="l-app__products">
      <div className="c-products">
        <ul className="c-products__tab-list">
          <li
            id="all"
            onClick={changeTab}
            className={`c-products__tab-item ${
              activeTab === "all" && "c-products__tab-item--active"
            }`}
          >
            All
          </li>
          <li
            id="f-series"
            onClick={changeTab}
            className={`c-products__tab-item ${
              activeTab === "f-series" && "c-products__tab-item--active"
            }`}
          >
            F series
          </li>
          <li
            id="m-series"
            onClick={changeTab}
            className={`c-products__tab-item ${
              activeTab === "m-series" && "c-products__tab-item--active"
            }`}
          >
            M series
          </li>
          <li
            id="x-series"
            onClick={changeTab}
            className={`c-products__tab-item ${
              activeTab === "x-series" && "c-products__tab-item--active"
            }`}
          >
            X series
          </li>
        </ul>
        <div className="c-products__outlet">
          {activeTab === "all" && (
            <Tab
              data={[
                ...fSeriesData.phones,
                ...mSeriesData.phones,
                ...xSeriesData.phones,
              ]}
            />
          )}
          {activeTab === "f-series" && <Tab data={[...fSeriesData.phones]} />}
          {activeTab === "m-series" && <Tab data={[...mSeriesData.phones]} />}
          {activeTab === "x-series" && <Tab data={[...xSeriesData.phones]} />}
        </div>
      </div>
    </div>
  );
}

export default ProductsTab;
