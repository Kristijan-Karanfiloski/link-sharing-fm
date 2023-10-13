import "./LinkSelectorForm.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLink } from "../../store/linkSelectorSlice.jsx";
import { links } from "./linksData.js";

const LinkSelectorForm = () => {
  const [isLinksDropdownOpen, setIsLinksDropdownOpen] = useState(false);
  const link = useSelector((state) => state.linkSelectorSlice.link);
  const dispatch = useDispatch();

  console.log("LINKS :", links);
  console.log("LINK :", link);

  const selectedLinkObj = links.find((linkObj) => linkObj.title === link);

  console.log("SELECTED LINK :", selectedLinkObj);

  const handleLinkChange = (value) => {
    dispatch(selectLink(value));
    setIsLinksDropdownOpen(!isLinksDropdownOpen);
    console.log("FROM THE HandleChange DROPDOWN :", isLinksDropdownOpen);
  };
  const handleOpenLinksDropdowns = () => {
    setIsLinksDropdownOpen(!isLinksDropdownOpen);
    console.log("FROM THE OPEN LINKS DROPDOWN :", isLinksDropdownOpen);
  };

  return (
    <div className="link__selector">
      <div className="link__selector__header__container">
        <div className="link__selector__header">
          <img src="/images/icon-drag-and-drop.svg" alt="icon" />
          <h2>Link #1</h2>
        </div>
        <p>Remove</p>
      </div>
      <div className="link__selector__platform__container">
        <p className="link__selector__title">Platform</p>
        <div
          // onClick={() => handleLinkChange(link.title)}
          className="link__selector__link"
        >
          <img src={selectedLinkObj.icon} alt={selectedLinkObj.title} />
          {selectedLinkObj.title}
        </div>
        <span
          onClick={handleOpenLinksDropdowns}
          className="link__selector__arrow"
        >
          <img src="/images/icon-chevron-down.svg" alt="icon arrow" />
        </span>
      </div>
      {isLinksDropdownOpen && (
        <ul className="link__selector__ul">
          {links.map((link) => (
            <div
              onClick={() => handleLinkChange(link.title)}
              key={link.id}
              className="link__selector__li"
            >
              <img src={link.icon} alt="icons" />
              {link.title}
            </div>
          ))}
        </ul>
      )}

      <div className="link__selector__link__container">
        <p className="link__selector__title">Link</p>
        <div className="link__selector__link"></div>
      </div>

      {/*<form>*/}
      {/*  <label>*/}
      {/*    Platform*/}
      {/*    <input type="text" />*/}
      {/*  </label>*/}
      {/*  <label>*/}
      {/*    Link*/}
      {/*    <input type="text" />*/}
      {/*  </label>*/}
      {/*</form>*/}
    </div>
  );
};

export default LinkSelectorForm;
