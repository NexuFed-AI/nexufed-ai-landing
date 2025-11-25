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
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Imprint</h1>

          <div className="space-y-8 text-foreground">
            <section></section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Information according to §5 Digital Services Act (DDG)
              </h2>
              <p className="leading-relaxed mb-4">This website is operated by the project team of NexuFed AI.</p>
              <p className="leading-relaxed mb-4">
                <strong>Project name:</strong> NexuFed AI – René Glitza und Luca Becker GbR
                <br />
                c/o Zentrum für das Engineering Smarter Produkt-Service Systeme (ZESS)
                <br />
                Hans-Dobbertin-Str. 8<br />
                Universitätsstraße 150
                <br />
                44803 Bochum
                <br />
                Germany
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Authorized representative and responsible for the project:</strong>
                <br />
                René Glitza
                <br />
                Luca Becker
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Contact:</strong>
                <br />
                E-mail: info@nexufed.ai
                <br />
                Phone: +49 234 32 18591
                <br />
                Website: www.nexufed.ai
              </p>

              <p className="leading-relaxed">
                <strong>Postal address (service address):</strong>
                <br />
                René Glitza
                <br />
                c/o Ruhr-Universität Bochum
                <br />
                Institut für Kommunikationsakustik
                <br />
                Gebäude ID / Fachnr. 36
                <br />
                Universitätsstr. 150
                <br />
                44801 Bochum
                <br />
                Germany
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Project Status</h2>
              <p className="leading-relaxed">
                NexuFed AI is a research-based start-up project based at the Ruhr University Bochum. It is currently not
                an independent legal entity. NexuFed AI is a research-based start-up project based at Ruhr University
                Bochum and supported by the WORLDFACTORY Start-up Center. Ruhr University Bochum is not the operator of
                this website and does not provide funding for the project. NexuFed AI is a research-based start-up
                project operated by NexuFed AI – René Glitza und Luca Becker GbR.  The project is based at Ruhr
                University Bochum and supported by the WORLDFACTORY Start-up Center.  Ruhr University Bochum is not the
                operator of this website and does not provide funding for the project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Responsible for the content according to § 18 Abs. 2 MStV
              </h2>
              <p className="leading-relaxed">
                René Glitza
                <br />
                c/o Ruhr-Universität Bochum
                <br />
                Institut für Kommunikationsakustik
                <br />
                Gebäude ID / Fachnr. 36
                <br />
                Universitätsstr. 150
                <br />
                44801 Bochum
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Liability for Content</h2>
              <p className="leading-relaxed mb-4">
                The content of our website has been created with the utmost care. However, we assume no liability for
                the accuracy, completeness and timeliness of the content. As a service provider, we are responsible for
                our own content on these pages in accordance with general law pursuant to Section 7 (1) DDG (formerly
                Section 7 (1) TMG). According to §§ 8 to 10 DDG, however, we are not obliged as a service provider to
                monitor transmitted or stored third-party information or to investigate circumstances that indicate
                illegal activity.
              </p>
              <p className="leading-relaxed">
                Obligations to remove or block the use of information in accordance with general legislation remain
                unaffected by this. However, liability in this respect is only possible from the time of knowledge of a
                specific infringement. As soon as we become aware of such infringements, we will remove this content
                immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Liability for Links</h2>
              <p className="leading-relaxed mb-4">
                Our website contains links to external third-party websites over whose content we have no influence. We
                can therefore accept no liability for this third-party content. The respective provider or operator of
                the pages is always responsible for the content of the linked pages.
              </p>
              <p className="leading-relaxed">
                At the time of linking, the pages were checked for possible legal violations. Illegal contents were not
                recognizable at that time. However, permanent monitoring of the content of the linked pages is not
                reasonable without concrete evidence of an infringement. Should we become aware of any legal
                infringements, we will remove such links immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Objection to Advertising Emails</h2>
              <p className="leading-relaxed">
                We hereby expressly object to the use of contact data published as part of our duty to provide a legal
                notice for the purpose of sending unsolicited advertising and information material. The operators of
                this website expressly reserve the right to take legal action in the event of unsolicited advertising
                information being sent, for example in the form of spam e-mails.
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
