import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-primary">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="text-xl font-semibold mb-3">Allgemeine Hinweise</h3>
              <p className="leading-relaxed mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
                Text aufgeführten Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                2. Datenerfassung auf dieser Website
              </h2>
              <h3 className="text-xl font-semibold mb-3">
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </h3>
              <p className="leading-relaxed mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>

              <h3 className="text-xl font-semibold mb-3">Wie erfassen wir Ihre Daten?</h3>
              <p className="leading-relaxed mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
                kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="leading-relaxed mb-4">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
                durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
                Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
                dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>

              <h3 className="text-xl font-semibold mb-3">Wofür nutzen wir Ihre Daten?</h3>
              <p className="leading-relaxed mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
                werden, sofern Sie entsprechende Tracking-Tools aktivieren.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </h3>
              <p className="leading-relaxed mb-4">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
                ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
                Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
                jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
                Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
                Aufsichtsbehörde zu.
              </p>
              <p className="leading-relaxed">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an
                uns wenden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                3. Hosting
              </h2>
              <p className="leading-relaxed mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <h3 className="text-xl font-semibold mb-3">Externes Hosting</h3>
              <p className="leading-relaxed mb-4">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser
                Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.
                Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und
                Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
                Daten, die über eine Website generiert werden, handeln.
              </p>
              <p className="leading-relaxed mb-4">
                Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
                potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
                einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots
                durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine
                entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
                auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die
                Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im
                Endgerät des Nutzers (z.B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
                Einwilligung ist jederzeit widerrufbar.
              </p>
              <p className="leading-relaxed">
                Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur
                Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug
                auf diese Daten befolgen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                4. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <h3 className="text-xl font-semibold mb-3">Datenschutz</h3>
              <p className="leading-relaxed mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
                gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="leading-relaxed mb-4">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden
                können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und
                wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              <p className="leading-relaxed">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der
                Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
                der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                5. Cookies
              </h2>
              <p className="leading-relaxed mb-4">
                Unsere Website verwendet derzeit <strong>keine Cookies</strong>. Sollten wir in
                Zukunft Cookies einsetzen, werden wir Sie darüber entsprechend informieren und Ihre
                Einwilligung einholen, sofern dies gesetzlich erforderlich ist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                6. Server-Log-Dateien
              </h2>
              <p className="leading-relaxed mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so
                genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies
                sind:
              </p>
              <ul className="list-disc list-inside leading-relaxed mb-4 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="leading-relaxed mb-4">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
              <p className="leading-relaxed">
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
                Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files
                erfasst werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                7. Kontaktformular
              </h2>
              <p className="leading-relaxed mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
                dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="leading-relaxed mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
                beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
                Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
                Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die
                Einwilligung ist jederzeit widerrufbar.
              </p>
              <p className="leading-relaxed">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns
                zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
                für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer
                Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen –
                bleiben unberührt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                8. Anfrage per E-Mail, Telefon oder Telefax
              </h2>
              <p className="leading-relaxed mb-4">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage
                inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum
                Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese
                Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="leading-relaxed mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
                beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
                Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
                Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die
                Einwilligung ist jederzeit widerrufbar.
              </p>
              <p className="leading-relaxed">
                Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis
                Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
                der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung
                Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche
                Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </section>

            <section className="pt-8 border-t border-primary/20">
              <p className="text-sm text-muted-foreground">
                Stand: Januar 2025
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
