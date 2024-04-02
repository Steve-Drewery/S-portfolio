import React from "react";
import styles from "./style.module.scss";

export default function index({ index, title, manageModal, icon, href }) {
  let key;
  let iconArray = [];
  for (key in icon) {
    // console.log(key);
    let entry = [];
    // entry.push(key);
    entry.push(icon[key]);
    iconArray.push(entry);
    // console.log(entry);
  }
  console.log(iconArray);
  return (
    <a
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
      href={href}
    >
      <h2>{title}</h2>
      <div className="flex flex-wrap w-32">
        {iconArray.map((icon, index) => {
          return (
            <div key={index} className="h-10">
              <img src={icon} width={40} height={0} alt="" />
            </div>
          );
        })}
      </div>
    </a>
  );
}
