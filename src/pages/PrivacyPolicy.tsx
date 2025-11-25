import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePageTracking } from "@/hooks/useAnalytics";

const PrivacyPolicy = () => {
  usePageTracking();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-primary">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                1. Data Protection at a Glance
              </h2>
              <h3 className="text-xl font-semibold mb-3">General Information</h3>
              <p className="leading-relaxed mb-4">
                The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally. For detailed information on data protection, please refer to our privacy policy listed below this text.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                2. Data Collection on This Website
              </h2>
              <h3 className="text-xl font-semibold mb-3">
                Who is responsible for data collection on this website?
              </h3>
              <p className="leading-relaxed mb-4">
                Data processing on this website is carried out by the website operator. You can find their contact details in the imprint of this website.
              </p>

              <h3 className="text-xl font-semibold mb-3">How do we collect your data?</h3>
              <p className="leading-relaxed mb-4">
                Your data is collected in part by you providing it to us. This may be data you enter in a contact form, for example.
              </p>
              <p className="leading-relaxed mb-4">
                Other data is collected automatically or with your consent when you visit the website by our IT systems. This is mainly technical data (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website.
              </p>

              <h3 className="text-xl font-semibold mb-3">What do we use your data for?</h3>
              <p className="leading-relaxed mb-4">
                Part of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior if you activate corresponding tracking tools.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                What rights do you have regarding your data?
              </h3>
              <p className="leading-relaxed mb-4">
                You have the right at any time to receive information free of charge about the origin, recipient, and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. You also have the right, under certain circumstances, to request the restriction of the processing of your personal data. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.
              </p>
              <p className="leading-relaxed">
                You can contact us at any time regarding this and other questions about data protection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                3. Hosting
              </h2>
              <p className="leading-relaxed mb-4">
                We host the content of our website with the following provider:
              </p>
              <h3 className="text-xl font-semibold mb-3">External Hosting</h3>
              <p className="leading-relaxed mb-4">
                This website is hosted externally. The personal data collected on this website is stored on the servers of the host(s). This may primarily include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website accesses, and other data generated via a website.
              </p>
              <p className="leading-relaxed mb-4">
                External hosting is carried out for the purpose of contract fulfillment towards our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of secure, fast, and efficient provision of our online offer by a professional provider (Art. 6 para. 1 lit. f GDPR). If appropriate consent has been requested, processing is carried out exclusively on the basis of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG (German Telecommunications-Telemedia Data Protection Act), insofar as consent includes the storage of cookies or access to information in the user's end device (e.g., device fingerprinting) within the meaning of the TTDSG. Consent can be revoked at any time.
              </p>
              <p className="leading-relaxed">
                Our host(s) will only process your data to the extent necessary to fulfill their performance obligations and follow our instructions regarding this data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                4. General Information and Mandatory Information
              </h2>
              <h3 className="text-xl font-semibold mb-3">Data Protection</h3>
              <p className="leading-relaxed mb-4">
                The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.
              </p>
              <p className="leading-relaxed mb-4">
                When you use this website, various personal data is collected. Personal data is data with which you can be personally identified. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this happens.
              </p>
              <p className="leading-relaxed">
                We would like to point out that data transmission over the Internet (e.g., when communicating by email) can have security gaps. Complete protection of data from access by third parties is not possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                5. Cookies and Analysis Tools
              </h2>
              <p className="leading-relaxed mb-4">
                Our website currently uses <strong>no cookies</strong> or analysis tools by default.
              </p>
              <p className="leading-relaxed mb-4">
                However, we plan to use analysis tools in the near future to improve our web offering. Before activating such tools, we will inform you via a cookie banner and obtain your consent if legally required (Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG).
              </p>
              <p className="leading-relaxed">
                Analysis tools may collect the following data:
              </p>
              <ul className="list-disc list-inside leading-relaxed mb-4 space-y-1">
                <li>Pages visited and time spent</li>
                <li>Origin of visitors (referrer)</li>
                <li>Geographic origin</li>
                <li>Device and browser information</li>
              </ul>
              <p className="leading-relaxed">
                This data helps us improve the user experience and optimize our website. You can revoke your consent at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                6. Server Log Files
              </h2>
              <p className="leading-relaxed mb-4">
                The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:
              </p>
              <ul className="list-disc list-inside leading-relaxed mb-4 space-y-1">
                <li>Browser type and version</li>
                <li>Operating system used</li>
                <li>Referrer URL</li>
                <li>Hostname of the accessing computer</li>
                <li>Time of the server request</li>
                <li>IP address</li>
              </ul>
              <p className="leading-relaxed mb-4">
                This data is not merged with other data sources.
              </p>
              <p className="leading-relaxed">
                This data is collected on the basis of Art. 6 para. 1 lit. f GDPR. The website operator has a legitimate interest in the technically error-free presentation and optimization of their website – for this purpose, server log files must be recorded.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                7. Contact Form
              </h2>
              <p className="leading-relaxed mb-4">
                If you send us inquiries via the contact form, your details from the inquiry form, including the contact data you provide there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent.
              </p>
              <p className="leading-relaxed mb-4">
                The processing of this data is based on Art. 6 para. 1 lit. b GDPR if your request is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, processing is based on our legitimate interest in the effective processing of inquiries sent to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has been requested; consent can be revoked at any time.
              </p>
              <p className="leading-relaxed">
                The data you enter in the contact form will remain with us until you request us to delete it, revoke your consent to storage, or the purpose for data storage no longer applies (e.g., after completion of processing your request). Mandatory legal provisions – especially retention periods – remain unaffected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                8. Inquiry by Email, Phone, or Fax
              </h2>
              <p className="leading-relaxed mb-4">
                If you contact us by email, phone, or fax, your inquiry including all resulting personal data (name, inquiry) will be stored and processed by us for the purpose of handling your request. We do not pass on this data without your consent.
              </p>
              <p className="leading-relaxed mb-4">
                The processing of this data is based on Art. 6 para. 1 lit. b GDPR if your request is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, processing is based on our legitimate interest in the effective processing of inquiries sent to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has been requested; consent can be revoked at any time.
              </p>
              <p className="leading-relaxed">
                The data you send to us via contact requests will remain with us until you request us to delete it, revoke your consent to storage, or the purpose for data storage no longer applies (e.g., after completion of processing your request). Mandatory legal provisions – especially legal retention periods – remain unaffected.
              </p>
            </section>

            <section className="pt-8 border-t border-primary/20">
              <p className="text-sm text-muted-foreground">
                Last updated: January 2025
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
