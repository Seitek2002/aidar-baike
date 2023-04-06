import React, { useContext, useEffect, useState } from "react";
import UserEnters from "../UserEnters/UserEnters";
import UserDropdown from "../UserDropdown/UserDropdown";
import UserOptions from "../UserOptions/UserOptions";
import { ReactComponent as LogoDark } from "../../../img/logo.svg";
import { ReactComponent as LogoLight } from "../../../img/LogoWhite.svg";
import { Icon } from "@iconify/react";
import sunIcon from "./icons/wb_sunny.svg";
import moonIcon from "./icons/brightness_2.svg";
import api from "../../../api";
import "./toggle.scss";

function HeadreUserActions({ auth, theme, onThemeToggle }) {
  const Logo = theme === "dark" ? <LogoDark /> : <LogoLight />;
  return (
    <ul className="nav-list-right">
      <li className="logo-mob-sign">{Logo}</li>
      {auth ? <UserDropdown theme={theme} auth={auth} /> : <UserEnters />}
      <div className="display-control-mobile">
        <UserOptions auth={auth} />
      </div>
      {/* <label>
        <input
          className="toggle-checkbox"
          type="checkbox"
          onChange={onThemeToggle}
        />
        <div className="toggle-slot">
          <div className="sun-icon-wrapper">
            <img src={moonIcon} alt="" />
          </div>
          <div className="toggle-button">
            <svg
              width="13"
              height="19"
              viewBox="0 0 13 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.33333 0.5C2.756 0.5 1.274 0.95 0 1.715C2.59133 3.272 4.33333 6.17 4.33333 9.5C4.33333 12.83 2.59133 15.728 0 17.285C1.274 18.05 2.756 18.5 4.33333 18.5C9.11733 18.5 13 14.468 13 9.5C13 4.532 9.11733 0.5 4.33333 0.5Z"
                fill="#1F1F21"
              />
            </svg>
          </div>
          <div className="moon-icon-wrapper">
            <img src={sunIcon} alt="" />
          </div>
        </div>
      </label> */}
      <label htmlFor="toggle-checkbox" className="toggle">
        <input
          className="toggle-checkbox"
          type="checkbox"
          id="toggle-checkbox"
          onChange={onThemeToggle}
        />
        <div className="toggle-wrapper">
          <div className="icon-wrapper">
            <img src={moonIcon} alt="" />
          </div>
          <div className="toggle-btn">
            {theme === "dark" ? (
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_838_4742)">
                  <path
                    d="M6.59294 5.77854L6.23823 5.42237C5.88352 5.06621 5.31053 5.07534 4.96492 5.42237L4.95583 5.43151C4.60112 5.78767 4.60112 6.36301 4.95583 6.71004L5.31053 7.06621C5.66524 7.42237 6.22913 7.42237 6.58384 7.06621L6.59294 7.05708C6.94764 6.71004 6.94764 6.12557 6.59294 5.77854ZM3.82804 11.5868H2.90035C2.40012 11.5868 1.99994 11.9886 1.99994 12.4909V12.5C1.99994 13.0023 2.40012 13.4041 2.90035 13.4041H3.81895C4.32827 13.4132 4.72845 13.0114 4.72845 12.5091V12.5C4.72845 11.9886 4.32827 11.5868 3.82804 11.5868ZM12.0136 2.5H12.0045C11.4952 2.5 11.095 2.90183 11.095 3.40411V4.28082C11.095 4.7831 11.4952 5.18493 11.9954 5.18493H12.0045C12.5138 5.19406 12.914 4.79224 12.914 4.28995V3.40411C12.914 2.90183 12.5138 2.5 12.0136 2.5ZM19.0531 5.43151C18.6984 5.07534 18.1255 5.07534 17.7707 5.42237L17.416 5.77854C17.0613 6.1347 17.0613 6.71004 17.416 7.05708L17.4251 7.06621C17.7798 7.42237 18.3528 7.42237 18.6984 7.06621L19.0531 6.71004C19.4079 6.35388 19.4079 5.78767 19.0531 5.43151ZM17.4069 19.2215L17.7616 19.5776C18.1164 19.9338 18.6893 19.9338 19.0441 19.5776C19.3988 19.2215 19.3988 18.6461 19.0441 18.29L18.6893 17.9338C18.3346 17.5776 17.7617 17.5868 17.416 17.9338C17.0522 18.2991 17.0522 18.8653 17.4069 19.2215ZM19.2805 12.4909V12.5C19.2805 13.0023 19.6807 13.4041 20.1809 13.4041H21.0995C21.5998 13.4041 21.9999 13.0023 21.9999 12.5V12.4909C21.9999 11.9886 21.5998 11.5868 21.0995 11.5868H20.1809C19.6807 11.5868 19.2805 11.9886 19.2805 12.4909ZM12.0045 7.02055C8.99403 7.02055 6.54746 9.47717 6.54746 12.5C6.54746 15.5228 8.99403 17.9795 12.0045 17.9795C15.0149 17.9795 17.4615 15.5228 17.4615 12.5C17.4615 9.47717 15.0149 7.02055 12.0045 7.02055ZM11.9954 22.5H12.0045C12.5047 22.5 12.9049 22.0982 12.9049 21.5959V20.7192C12.9049 20.2169 12.5047 19.8151 12.0045 19.8151H11.9954C11.4952 19.8151 11.095 20.2169 11.095 20.7192V21.5959C11.095 22.0982 11.4952 22.5 11.9954 22.5ZM4.95583 19.5685C5.31053 19.9247 5.88352 19.9247 6.23823 19.5685L6.59294 19.2123C6.94764 18.8562 6.93855 18.2808 6.59294 17.9338L6.58384 17.9247C6.22913 17.5685 5.65615 17.5685 5.30144 17.9247L4.94673 18.2808C4.60112 18.6461 4.60112 19.2123 4.95583 19.5685Z"
                    fill="#1F1F21"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_838_4742">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(-6.10352e-05 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1028_5206)">
                  <path
                    d="M11.3333 3.5C9.756 3.5 8.274 3.95 7 4.715C9.59133 6.272 11.3333 9.17 11.3333 12.5C11.3333 15.83 9.59133 18.728 7 20.285C8.274 21.05 9.756 21.5 11.3333 21.5C16.1173 21.5 20 17.468 20 12.5C20 7.532 16.1173 3.5 11.3333 3.5Z"
                    fill="#1F1F21"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1028_5206">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>
          <div className="icon-wrapper">
            <img src={sunIcon} alt="" />
          </div>
        </div>
      </label>
    </ul>
  );
}

export default HeadreUserActions;
