import "./LinksPage.scss";
import { useMediaQuery } from "@uidotdev/usehooks";
import Button from "../../components/button/Button.jsx";
import { useSelector } from "react-redux";

const LinksPage = () => {
  const navLink = useSelector((state) => state.navigationLinksSlice.activeLink);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  // const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px) ");

  console.log("ACTIVE LINK :", navLink);

  return (
    <>
      <main className="links-page">
        {isDesktop ? (
          <section className="links-page__left__section">
            <img src="/images/illustration-phone-mockup.svg" alt="icon" />
          </section>
        ) : (
          ""
        )}
        {navLink === "link" ? (
          <section className="links-page__right__section">
            <h2 className="links-page__title">Customize your links</h2>
            <p className="links-page__description">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>

            <button className="links-page__button__add-new-link button">
              + Add new link
            </button>
            <div className="links-page__illustration">
              <img
                src="/images/illustration-empty.svg"
                alt="ilustration icon"
              />
              <h2 className="links-page__title"> Lets's get you started</h2>
              <p className="links-page__description">
                Use the "Add new link" button to get started.Once you have more
                then one link,you can reorder and edit them.We're here to help
                you share your profiles with everyone!
              </p>
            </div>
            <span className="links-page__bottom__divider"></span>
            <div className="button-container">
              <button className="links-page__button__save button">Save</button>
            </div>
          </section>
        ) : (
          "profile details"
        )}
      </main>
    </>
  );
};

export default LinksPage;
