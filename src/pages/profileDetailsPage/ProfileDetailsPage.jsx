import "./ProfileDetailsPage.scss";

const ProfileDetailsPage = () => {
  return (
    <>
      <main className="profile__details-page">
        <section className="profile__details-page__right__section">
          <h2 className="profile__details-page__title">Profile Details</h2>
          <p className="profile__details-page__description">
            Add your derails to create a personal touch to your profile.
          </p>
          <div className="profile__details-page__illustration">
            <p className="profile__details-page__description">
              Profile picture
            </p>
            <div className="profile__details-page__image-container">
              <img src="/images/icon-upload-image.svg" alt="ilustration icon" />
              <p className="profile__details-page__description">
                + Upload Image
              </p>
            </div>
            <p className="profile__details-page__description">
              image must be bellow 1024x1024px.Use PNG or JPG format.
            </p>
          </div>
          <span className="profile__details-page__bottom__divider"></span>
          <div className="button-container">
            <button className="profile__details-page__button__save button">
              Save
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProfileDetailsPage;
