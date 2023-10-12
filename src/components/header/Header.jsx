import "./Header.scss";
import LogoMobile from "/images/logo-devlinks-small.svg";
import LogoDesktop from "/images/logo-devlinks-large.svg";

import { useMediaQuery } from "@uidotdev/usehooks";
import { useDispatch, useSelector } from "react-redux";
import LinkSvg from "../../svg/LinkSvg.jsx";
import ProfileDetailsSvg from "../../svg/ProfileDetailsSvg.jsx";
import { setActiveLink } from "../../store/navigationLinksSlice.jsx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const activeLink = useSelector(
    (state) => state.navigationLinksSlice.activeLink
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("ACTIVE Link", activeLink);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px) ");

  ////////////////////////////////////////////////////////////////////////  //

  const navigationLinks = {
    link: {
      id: 1,
      name: "Links",
      default: <LinkSvg fill={"#737373"} />,
      active: <LinkSvg fill={"#633cff"} />,
    },
    profileLink: {
      id: 2,
      name: "Profile Details",
      default: <ProfileDetailsSvg fill={"#737373"} />,
      active: <ProfileDetailsSvg fill={"#633cff"} />,
    },
  };

  const handleChangeOnActiveLink = (link) => {
    dispatch(setActiveLink(link));
    navigate(`/homePage/${link}`);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <nav className="navigation">
        <div className="navigation__logo">
          {isDesktop || isTablet ? (
            <img src={LogoDesktop} alt="logo" />
          ) : (
            <img src={LogoMobile} alt="logo" />
          )}
        </div>
        <div className="navigation__middle__container">
          {/*<button className="navigation__links">*/}
          {/*  {isDesktop || isTablet ? (*/}
          {/*    <>*/}
          {/*      <img src="/images/icon-links-header.svg" alt="nav-icons" />*/}
          {/*      <p>Links</p>*/}
          {/*    </>*/}
          {/*  ) : (*/}
          {/*    <img src="/images/icon-links-header.svg" alt="nav-icons" />*/}
          {/*  )}*/}
          {/*</button>*/}
          {/*<button className="navigation__links">*/}
          {/*  {isDesktop || isTablet ? (*/}
          {/*    <>*/}
          {/*      <img*/}
          {/*        src="/images/icon-profile-details-header.svg"*/}
          {/*        alt="nav-icons"*/}
          {/*      />*/}
          {/*      <p>Profile Details</p>*/}
          {/*    </>*/}
          {/*  ) : (*/}
          {/*    <img*/}
          {/*      src="/images/icon-profile-details-header.svg"*/}
          {/*      alt="nav-icons"*/}
          {/*    />*/}
          {/*  )}*/}
          {/*</button>*/}

          {/* //:BETTER WAY*/}

          {Object.keys(navigationLinks).map((link) => (
            <div key={navigationLinks[link].id}>
              <button
                onClick={() => handleChangeOnActiveLink(link)}
                className={`navigation__links ${
                  link === activeLink ? "navigation__links--active" : ""
                } `}
              >
                {link === activeLink
                  ? navigationLinks[link].active
                  : navigationLinks[link].default}
                {isDesktop || isTablet ? navigationLinks[link].name : ""}
              </button>
            </div>
          ))}
        </div>
        <button className="navigation__preview">
          {isDesktop || isTablet ? (
            <>
              <p>Preview</p>
            </>
          ) : (
            <img src="/images/icon-preview-header.svg" alt="nav-icons" />
          )}
        </button>
        {/*<div></div>*/}
      </nav>
      {/*  /////////////////////////FOR TESTING/////////////////////////////////////////*/}
    </>
  );
};

export default Header;

//navigation__links--active
