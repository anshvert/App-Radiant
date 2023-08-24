import React from "react";
import "../css/profileOptions.css";
function ProfileOptions(props) {
  const { selectedOption, handleOptionChange } = props;
  return (
    <div>
      <ul className="list-group">
        <li
          className={`list-group-item px-3 mb-2 rounded-3 ${
            selectedOption === "profile" ? "active" : ""
          }`}
          onClick={() => handleOptionChange("profile")}
        >
          Profile
        </li>
        <li
          className={`list-group-item px-3 mb-2 rounded-3 ${
            selectedOption === "settings" ? "active" : ""
          }`}
          onClick={() => handleOptionChange("settings")}
        >
          Settings
        </li>
      </ul>
    </div>
  );
}
export default ProfileOptions;
