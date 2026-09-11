// Inhalte für den "Ein Beispiel"-Slider auf der Landingpage.
//
// Das ist die eigentliche Quelle, die du bearbeiten solltest.
// content.js ist eine von Hand nachgeführte Plain-JS-Version davon,
// die die Seite tatsächlich per <script src="content.js"> lädt –
// siehe die Erklärung dort. Wenn du später einen echten TS-Build
// (tsc, Vite, esbuild ...) einrichtest, kannst du diese Datei direkt
// kompilieren/importieren und content.js löschen.

export interface BeispielSlide {
  title: string;
  text: string;
}

export const beispielSlides: BeispielSlide[] = [
  {
    title: "Warum Projektassistenz besonders gut passt",
    text: "In der Projektassistenz treffen meine bisherigen Stationen besonders deutlich aufeinander: Acht Jahre habe ich als Geschäftsführer einer Ratsfraktion Sitzungen vorbereitet, Termine koordiniert und zwischen Politik, Verwaltung und Öffentlichkeit vermittelt. Als Journalist habe ich gelernt, mich schnell in neue Themen einzuarbeiten und komplexe Sachverhalte verständlich aufzubereiten. Mit dem Geophysik-Studium verstehe ich fachliche Zusammenhänge auch in technischen und wissenschaftlichen Projekten selbst und kann mit Spezialistinnen und Spezialisten auf Augenhöhe sprechen. Genauso gut passen Aufgaben in Verwaltung oder an der Schnittstelle zwischen Fachlichkeit und Organisation zu mir. Besonders reizen mich dabei Aufgaben, bei denen es nicht nur um das Wie der Organisation geht, sondern auch um das Was.",
  },
  {
    title: "Warum Projektassistenz besonders gut passt",
    text: "In der Projektassistenz treffen meine bisherigen Stationen besonders deutlich aufeinander: Acht Jahre habe ich als Geschäftsführer einer Ratsfraktion Sitzungen vorbereitet, Termine koordiniert und zwischen Politik, Verwaltung und Öffentlichkeit vermittelt. Als Journalist habe ich gelernt, mich schnell in neue Themen einzuarbeiten und komplexe Sachverhalte verständlich aufzubereiten. Mit dem Geophysik-Studium verstehe ich fachliche Zusammenhänge auch in technischen und wissenschaftlichen Projekten selbst und kann mit Spezialistinnen und Spezialisten auf Augenhöhe sprechen. Genauso gut passen Aufgaben in Verwaltung oder an der Schnittstelle zwischen Fachlichkeit und Organisation zu mir. Besonders reizen mich dabei Aufgaben, bei denen es nicht nur um das Wie der Organisation geht, sondern auch um das Was.",
  },
  {
    title: "Warum Projektassistenz besonders gut passt",
    text: "In der Projektassistenz treffen meine bisherigen Stationen besonders deutlich aufeinander: Acht Jahre habe ich als Geschäftsführer einer Ratsfraktion Sitzungen vorbereitet, Termine koordiniert und zwischen Politik, Verwaltung und Öffentlichkeit vermittelt. Als Journalist habe ich gelernt, mich schnell in neue Themen einzuarbeiten und komplexe Sachverhalte verständlich aufzubereiten. Mit dem Geophysik-Studium verstehe ich fachliche Zusammenhänge auch in technischen und wissenschaftlichen Projekten selbst und kann mit Spezialistinnen und Spezialisten auf Augenhöhe sprechen. Genauso gut passen Aufgaben in Verwaltung oder an der Schnittstelle zwischen Fachlichkeit und Organisation zu mir. Besonders reizen mich dabei Aufgaben, bei denen es nicht nur um das Wie der Organisation geht, sondern auch um das Was.",
  },
];

export default beispielSlides;
