// Plain-JS-Version von content.ts – diese Datei lädt die Seite
// tatsächlich per <script src="content.js">.
//
// Warum keine import/export-Module? Ohne Build-Schritt (tsc, Vite,
// esbuild ...) bräuchte ein echtes .ts-File genau das – und
// ES-Module blockieren Chrome/Firefox aus Sicherheitsgründen, wenn
// du die HTML-Datei direkt per Doppelklick öffnest (file://-URL).
// Ein normales globales Array funktioniert dagegen überall: lokal
// per Doppelklick genauso wie auf jedem Webserver.
//
// Bearbeite die Texte lieber in content.ts und übertrage sie von
// dort hierher – oder richte einen Build-Schritt ein und lösche
// diese Datei dann.

var BEISPIEL_SLIDES = [
  {
    title: "Warum Projektassistenz besonders gut passt",
    text: "In der Projektassistenz treffen meine bisherigen Stationen besonders deutlich aufeinander: Acht Jahre habe ich als Geschäftsführer einer Ratsfraktion Sitzungen vorbereitet, Termine koordiniert und zwischen Politik, Verwaltung und Öffentlichkeit vermittelt. Als Journalist habe ich gelernt, mich schnell in neue Themen einzuarbeiten und komplexe Sachverhalte verständlich aufzubereiten. Mit dem Geophysik-Studium verstehe ich fachliche Zusammenhänge auch in technischen und wissenschaftlichen Projekten selbst und kann mit Spezialistinnen und Spezialisten auf Augenhöhe sprechen. Genauso gut passen Aufgaben in Verwaltung oder an der Schnittstelle zwischen Fachlichkeit und Organisation zu mir. Besonders reizen mich dabei Aufgaben, bei denen es nicht nur um das Wie der Organisation geht, sondern auch um das Was.",
  },
  {
    title: "Wallum Projektassistenz besonders gut passt",
    text: "In der Projektassistenz treffen meine bisherigen Stationen besonders deutlich aufeinander: Acht Jahre habe ich als Geschäftsführer einer Ratsfraktion Sitzungen vorbereitet, Termine koordiniert und zwischen Politik, Verwaltung und Öffentlichkeit vermittelt. Als Journalist habe ich gelernt, mich schnell in neue Themen einzuarbeiten und komplexe Sachverhalte verständlich aufzubereiten. Mit dem Geophysik-Studium verstehe ich fachliche Zusammenhänge auch in technischen und wissenschaftlichen Projekten selbst und kann mit Spezialistinnen und Spezialisten auf Augenhöhe sprechen. Genauso gut passen Aufgaben in Verwaltung oder an der Schnittstelle zwischen Fachlichkeit und Organisation zu mir. Besonders reizen mich dabei Aufgaben, bei denen es nicht nur um das Wie der Organisation geht, sondern auch um das Was.",
  },
  {
    title: "Warmmum Projektassistenz besonders gut passt",
    text: "In der Projektassistenz treffen meine bisherigen Stationen besonders deutlich aufeinander: Acht Jahre habe ich als Geschäftsführer einer Ratsfraktion Sitzungen vorbereitet, Termine koordiniert und zwischen Politik, Verwaltung und Öffentlichkeit vermittelt. Als Journalist habe ich gelernt, mich schnell in neue Themen einzuarbeiten und komplexe Sachverhalte verständlich aufzubereiten. Mit dem Geophysik-Studium verstehe ich fachliche Zusammenhänge auch in technischen und wissenschaftlichen Projekten selbst und kann mit Spezialistinnen und Spezialisten auf Augenhöhe sprechen. Genauso gut passen Aufgaben in Verwaltung oder an der Schnittstelle zwischen Fachlichkeit und Organisation zu mir. Besonders reizen mich dabei Aufgaben, bei denen es nicht nur um das Wie der Organisation geht, sondern auch um das Was.",
  },
];
