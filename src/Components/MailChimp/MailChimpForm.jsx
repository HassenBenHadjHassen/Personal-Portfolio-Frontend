import React from "react";
import MailChimpSubscribe from "react-mailchimp-subscribe";
import TrackVisibility from "react-on-screen";
import Newsletter from "./Newsletter";
import "animate.css";

function MailChimpForm() {
  const postURL = `${process.env.MAIL_CHIMP_URL}?u=${process.env.MAIL_CHIMP_USER_ID}&id=${process.env.MAIL_CHIMP_ID}`;
  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <div className={true ? "animate__animated animate__fadeIn" : ""}>
          <>
            <MailChimpSubscribe
              url={postURL}
              render={({ subscribe, status, message }) => (
                <Newsletter
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            />
          </>
        </div>
      )}
    </TrackVisibility>
  );
}

export default MailChimpForm;
