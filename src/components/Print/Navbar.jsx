import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  const data = localStorage.getItem("theme");

  return (
    <div>
      {data === "msDocs" ? (
        <div div className="navbar__main">
          <div className="navbar__main__sub">
            <img src="/image/print/navbar/module.png" />
            <p>Module Name</p>
            <select>
              <option>lorem1</option>
              <option>lorem2</option>
              <option>lorem3</option>
              <option>lorem4</option>
            </select>
          </div>
          <div className="navbar__main__sub">
            <img src="/image/print/navbar/setting.png" />
            <p>Setting Name</p>
            <div>
              <select>
                <option>lorem1</option>
                <option>lorem2</option>
                <option>lorem3</option>
                <option>lorem4</option>
              </select>
              <p className="add_new_setting__option">+ Add New Setting</p>
            </div>
          </div>
          <div className="navbar__main__sub">
            <img src="/image/print/navbar/format.png" />
            <p>Paper Format</p>
            <select>
              <option>lorem1</option>
              <option>lorem2</option>
              <option>lorem3</option>
              <option>lorem4</option>
            </select>
          </div>
        </div>
      ) : (
        <div div className="navbar__main">
          <div className="navbar__main__sub">
            <img src="/image/print/navbar/setting.png" />
            <p>Setting Name</p>
            <div>
              <select>
                <option>lorem1</option>
                <option>lorem2</option>
                <option>lorem3</option>
                <option>lorem4</option>
              </select>
            </div>
          </div>
          <div className="navbar__main__sub">
            <img src="/image/print/navbar/setting.png" />
            <p>Setting Name</p>
            <select>
              <option>lorem1</option>
              <option>lorem2</option>
              <option>lorem3</option>
              <option>lorem4</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
