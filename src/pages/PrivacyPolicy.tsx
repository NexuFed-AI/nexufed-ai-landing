import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePageTracking } from "@/hooks/useAnalytics";
const PrivacyPolicy = () => {
  usePageTracking();
  return <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-primary">
            Privacy policy in accordance with Art. 13 GDPR
          </h1>

          <p className="leading-relaxed mb-8 text-foreground">
            Thank you for your interest in our website. The protection of your personal data is important to us. Below we inform you about the processing of personal data on this website.
          </p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                1. Responsible
              </h2>
              <p className="leading-relaxed mb-2">
                Responsible for the data processing on this website is
              </p>
              <p className="leading-relaxed mb-1">
                René Glitza and Luca Becker    
              </p>
              <p className="leading-relaxed mb-1">​Zentrum für das Engeneering Smarter Produkt-Service Systeme (ZESS)        </p>
              <p className="leading-relaxed mb-1">Hans-Dobbertin-Str. 8, 44803 Bochum</p>
              <p className="leading-relaxed mb-1">Etage 2, Raum 12</p>
              
              <p className="leading-relaxed">
                E-Mail: info@nexufed.ai
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                2. General information on data processing
              </h2>
              <p className="leading-relaxed">
                We only collect and process personal data if this is permitted by law or if you consent to the data processing. Personal data includes all information relating to a natural person.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                3. Hosting
              </h2>
              <p className="leading-relaxed mb-4">
                Our website is hosted by IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany. Data processing is carried out as part of order processing in accordance with Art. 28 GDPR.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Our website is hosted by Vercel Inc., 440 N Barranca Ave Pmb 4133, California, USA. Data processing is carried out as part of order processing in accordance with Art. 28 GDPR.</h3>
              <p className="leading-relaxed mb-4">
                Vercel provides web space, domains, email services and other infrastructure. The data processing is carried out for the purpose of the technical provision of the website, including storage, administration and publication of web content, domain administration, e-mail communication as well as security and stability of the systems.
              </p>

              <h3 className="text-xl font-semibold mb-3">Type of data processed:</h3>
              <ul className="list-disc list-inside leading-relaxed mb-4 space-y-1">
                <li>Content data of the website</li>
                <li>Domain Names</li>
                <li>E-Mail adresses</li>
                <li>Log files (including IP adress, time stamp, browser, operating system, pages accessed)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Categories of data subjects:</h3>
              <ul className="list-disc list-inside leading-relaxed mb-4 space-y-1">
                <li>Website visitors</li>
                <li>Customers and their employees</li>
                <li>Communication partners</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Storage periods (log files):</h3>
              <p className="leading-relaxed mb-4">
                The log files on the Vercel web servers contain
              </p>
              <ul className="list-disc list-inside leading-relaxed mb-4 space-y-1">
                <li>IP address of the visitor</li>
                <li>Date and time of access</li>
                <li>Name and URL of the accessed file</li>
                <li>Website from which the access was made (referrer URL)</li>
                <li>Browser used and, if applicable, operating system</li>
                <li>Name of your access provider</li>
              </ul>
              <p className="leading-relaxed mb-4">
                These log files are stored for a maximum of 7 days for security reasons (e.g. to investigate misuse or fraud) and then automatically deleted, unless further storage is required for evidence purposes.
              </p>

              <h3 className="text-xl font-semibold mb-3">Further information:</h3>
              <p className="leading-relaxed">
                Data processing takes place exclusively within the European Union or the European Economic Area. Vercel takes extensive technical and organizational measures (TOMs) in accordance with Art. 32 GDPR, including access protection, encryption, backup management and access restriction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                4. Access data
              </h2>
              <p className="leading-relaxed">
                When you visit our website, we automatically collect data about access to the site and store it as so-called "server log files" on the website server. This data is necessary to ensure the functionality of the website, to detect and prevent cases of misuse and to ensure the security of the systems. This data is not merged with other data sources.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                5. Contact
              </h2>
              <p className="leading-relaxed">
                If you contact us by e-mail, we will store and process your request, including all personal data (name, e-mail address, message), for the purpose of processing your request. We will not pass on this data without your consent.
              </p>
            </section>

            

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                6. Cookies and similar technologies
              </h2>
              <p className="leading-relaxed mb-4">
                Our website uses cookies and similar technologies to provide certain functions and improve the user experience. They are used in accordance with the General Data Protection Regulation (GDPR) and the Telecommunications Digital Services Data Protection Act (TDDDG).
              </p>

              <h3 className="text-xl font-semibold mb-3">a) Consent-based use with Complianz</h3>
              <p className="leading-relaxed mb-2">When you visit our website for the first time, a cookie banner appears, informing you about the use of cookies. Cookies that are not technically necessary are only set if you expressly consent to this.</p>
              <p className="leading-relaxed mb-4">
                This applies in particular to
              </p>
              <ul className="list-disc list-inside leading-relaxed mb-4 space-y-1">
                
                <li><strong>External links:</strong> Logos and links to platforms such as LinkedIn and Github lead to external sites. These platforms may – after your active use – set cookies and process data.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">b) Technically necessary cookies</h3>
              <p className="leading-relaxed mb-4">
                Certain cookies are necessary to provide basic functions of the website (e.g. to save your cookie settings). These are also set without consent, as they are necessary for the operation of the website (Art. 6 para. 1 lit. f GDPR).
              </p>

              <h3 className="text-xl font-semibold mb-3">c) Overview and management</h3>
              <p className="leading-relaxed">
                You can find an overview of all cookies used as well as their purposes, duration and providers at any time via the "Cookie policy" link, which is available in the footer of the website. There you can also change or revoke your consent at a later date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                7. Rights
              </h2>
              <p className="leading-relaxed mb-4">
                As a data subject, you have the following rights under the GDPR
              </p>
              <ul className="list-disc list-inside leading-relaxed mb-4 space-y-1">
                <li>Information in accordance with Art. 15 GDPR about the personal data processed by us,</li>
                <li>Correction of incorrect or completion of incomplete data in accordance with Art. 16 GDPR,</li>
                <li>erasure of your data stored by us in accordance with Art. 17 GDPR, provided there are no legal or contractual retention periods to the contrary</li>
                <li>Restriction of processing in accordance with Art. 18 GDPR, provided the requirements are met</li>
                <li>Objection to processing in accordance with Art. 21 GDPR, in particular to direct advertising</li>
                <li>data portability in accordance with Art. 20 GDPR, provided that the data processing is based on consent or a contract.</li>
              </ul>
              <p className="leading-relaxed">
                To exercise these rights, you can contact us at any time at the email address provided in the legal notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                8. Revocation of your consent to data processing
              </h2>
              <p className="leading-relaxed mb-4">
                If we process personal data on the basis of your consent (Art. 6 para. 1 lit. a GDPR), you can revoke this at any time. The revocation only applies to the future and does not affect the legality of the processing carried out up to that point.
              </p>
              <p className="leading-relaxed">
                You can revoke your consent, e.g. by changing your cookie settings (link in the footer of the website).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                9. Right to lodge a complaint with the supervisory authority
              </h2>
              <p className="leading-relaxed">
                If you believe that the processing of your personal data violates applicable data protection law, you have the right to lodge a complaint with a data protection supervisory authority in accordance with Art. 77 GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                10. Data security
              </h2>
              <p className="leading-relaxed mb-4">
                We use technical and organizational measures to protect your data from loss, misuse or unauthorized access in the best possible way. These measures are regularly reviewed and adapted to the state of the art.
              </p>
              <p className="leading-relaxed">
                The connection to our website is secured by SSL/TLS encryption. You can recognize this by the address line of your browser ("https://").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                11. Amendment of this privacy policy
              </h2>
              <p className="leading-relaxed mb-4">
                We reserve the right to amend this privacy policy if this is legally or technically necessary.
              </p>
              <p className="leading-relaxed">
                The current version is always available under the link "Privacy Policy" on our website.
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
    </div>;
};
export default PrivacyPolicy;