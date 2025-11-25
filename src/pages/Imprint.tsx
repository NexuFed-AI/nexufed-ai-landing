import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePageTracking } from "@/hooks/useAnalytics";

const Imprint = () => {
  usePageTracking();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-primary">
            Imprint
          </h1>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Information pursuant to § 5 TMG (German Telemedia Act)
              </h2>
              <p className="leading-relaxed">
                René Glitza<br />
                E2/12, ZESS<br />
                Hans-Dobbertin-Str. 8<br />
                44803 Bochum<br />
                Germany
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Contact</h2>
              <p className="leading-relaxed">
                Email: rene.glitza@nexufed.ai<br />
                Phone: +49 234 32 18591
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Responsible for content according to § 55 para. 2 RStV (German Interstate Broadcasting Agreement)
              </h2>
              <p className="leading-relaxed">
                René Glitza<br />
                E2/12, ZESS<br />
                Hans-Dobbertin-Str. 8<br />
                44803 Bochum
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                EU Dispute Resolution
              </h2>
              <p className="leading-relaxed">
                The European Commission provides a platform for online dispute resolution (ODR):{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br />
                Our email address can be found above in the imprint.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Consumer Dispute Resolution / Universal Arbitration Board
              </h2>
              <p className="leading-relaxed">
                We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Liability for Content
              </h2>
              <p className="leading-relaxed mb-4">
                As a service provider, we are responsible for our own content on these pages in accordance with § 7 para. 1 TMG (German Telemedia Act) under general law. According to §§ 8 to 10 TMG, however, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
              </p>
              <p className="leading-relaxed">
                Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the point in time at which we become aware of a specific infringement. Upon becoming aware of corresponding legal violations, we will remove this content immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Liability for Links
              </h2>
              <p className="leading-relaxed mb-4">
                Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.
              </p>
              <p className="leading-relaxed">
                However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of a legal violation. Upon becoming aware of legal violations, we will remove such links immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Copyright</h2>
              <p className="leading-relaxed mb-4">
                The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.
              </p>
              <p className="leading-relaxed">
                Insofar as the content on this site was not created by the operator, the copyrights of third parties are observed. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Imprint;
