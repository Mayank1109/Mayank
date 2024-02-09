import { foldersData } from "./dashData";
import React from "react";
import "./dashboard.css";
import SearchIcon from "../../ui/searchIcon";
import DashCard from "../../ui/dashCard";
import ChartsOverviewDemo from "../barCHart/barChart";
import PieChartWithCustomizedLabel from "../pieChart/pieChart";

const Dashboard = () => {
  return (
    <>
      <section className="dashboard section">
        <div className=" dash__content grid">
          <div className="dash__content btn__grp">
            <h2>Home</h2>
          </div>
          <div className="header_searchbox">
            <form className="search__it">
              <div className="searchbox">
                <input
                  type="text"
                  className="Search"
                  placeholder="search"
                  // ref={searchInputRef}
                />
                <SearchIcon />
              </div>
            </form>

            <button className="add__new">+</button>
            <div className="user__profile"></div>
          </div>
        </div>
      </section>

      <div className="idk">
        <div className="dashboard section ">
          <div className="dashcard ">
            {foldersData.map((item) => {
              return <DashCard item={item} key={item.id} />;
            })}
          </div>
        </div>

        <div className="dash section ">
          <div className="dash__Card">
            <ChartsOverviewDemo />
          </div>
          <div className="dash__Card">
            <PieChartWithCustomizedLabel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
