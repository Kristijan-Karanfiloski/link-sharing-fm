import "./Header.scss";
import LogoMobile from "/images/logo-devlinks-small.svg";
import LogoDesktop from "/images/logo-devlinks-large.svg";

import { useMediaQuery } from "@uidotdev/usehooks";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const activeLink = useSelector(
    (state) => state.navigationLinksSlice.activeLink
  );
  const dispatch = useDispatch();

  console.log("ACTIVE Link", activeLink);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px) ");

  ////////////////////////////////////////////////////////////////////////  //

  const handleChangeOnActiveLink = () => {};

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
          <button className="navigation__links">
            {isDesktop || isTablet ? (
              <>
                <img src="/images/icon-links-header.svg" alt="nav-icons" />
                <p>Links</p>
              </>
            ) : (
              <img src="/images/icon-links-header.svg" alt="nav-icons" />
            )}
          </button>
          <button className="navigation__links">
            {isDesktop || isTablet ? (
              <>
                <img
                  src="/images/icon-profile-details-header.svg"
                  alt="nav-icons"
                />
                <p>Profile Details</p>
              </>
            ) : (
              <img
                src="/images/icon-profile-details-header.svg"
                alt="nav-icons"
              />
            )}
          </button>
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
    </>
  );
};

export default Header;
