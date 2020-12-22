import React from "react";
import { FaEdit } from "react-icons/fa";
import "./styles.scss";

export default function PreviewHtml({ html }) {
  return (
    <div className="preview-root">
      <div className="options">
        <span>Readme.md</span>
        <a href="/portfolio/nome-do-projeto">
          <FaEdit />
        </a>
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></div>
    </div>
  );
}
