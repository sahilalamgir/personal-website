import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const postUrl = `${import.meta.env.VITE_MAILCHIMP_URL}?u=${import.meta.env.VITE_MAILCHIMP_U}&id=${import.meta.env.VITE_MAILCHIMP_ID}`;
  console.log("jhii")
  console.log("Mailchimp URL:", import.meta.env.VITE_MAILCHIMP_URL);
console.log("Mailchimp U:", import.meta.env.VITE_MAILCHIMP_U);
console.log("Mailchimp ID:", import.meta.env.VITE_MAILCHIMP_ID);
console.log("Post URL:", postUrl);
  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}