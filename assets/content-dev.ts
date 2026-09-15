// Inhalte für den "Ein Beispiel"-Slider auf der Softwareentwicklungs-Seite.
//
// Quelle zum Bearbeiten. content-dev.js ist die von Hand nachgeführte
// Plain-JS-Version, die diese Seite tatsächlich lädt (gleicher Grund
// wie bei content.ts / content.js auf der Büro-Version: kein
// Build-Schritt, keine ES-Module, damit es auch per Doppelklick
// (file://) funktioniert).

export interface BeispielSlide {
  title: string;
  text: string;
}

export const beispielSlides: BeispielSlide[] = [
  {
    title: "Warum der Einstieg in die Softwareentwicklung passt",
    text: "Mein Code ist aus der Praxis entstanden, nicht aus einem Kurs: In der Geophysik werte ich radarbasierte Fernerkundungsdaten aus – dafür habe ich mir Python beigebracht, um große Zeitreihen zu verarbeiten, Muster zu erkennen und Ergebnisse nachvollziehbar aufzubereiten. Daraus ist ein echtes Interesse an Softwareentwicklung geworden: Mit TypeScript und React baue ich inzwischen auch Web-Anwendungen, meinen Code teile ich auf GitHub (github.com/vanhog). Für den Einstieg bringe ich damit etwas mit, das nicht jeder Berufseinsteiger mitbringt: die Gewohnheit, mich selbstständig in komplexe technische Probleme einzuarbeiten, sie in Code zu übersetzen – und das Ergebnis so zu dokumentieren, dass es auch andere verstehen.",
  },
  {
    title: "Warum der Einstieg in die Softwareentwicklung passt",
    text: "Mein Code ist aus der Praxis entstanden, nicht aus einem Kurs: In der Geophysik werte ich radarbasierte Fernerkundungsdaten aus – dafür habe ich mir Python beigebracht, um große Zeitreihen zu verarbeiten, Muster zu erkennen und Ergebnisse nachvollziehbar aufzubereiten. Daraus ist ein echtes Interesse an Softwareentwicklung geworden: Mit TypeScript und React baue ich inzwischen auch Web-Anwendungen, meinen Code teile ich auf GitHub (github.com/vanhog). Für den Einstieg bringe ich damit etwas mit, das nicht jeder Berufseinsteiger mitbringt: die Gewohnheit, mich selbstständig in komplexe technische Probleme einzuarbeiten, sie in Code zu übersetzen – und das Ergebnis so zu dokumentieren, dass es auch andere verstehen.",
  },
  {
    title: "Warum der Einstieg in die Softwareentwicklung passt",
    text: "Mein Code ist aus der Praxis entstanden, nicht aus einem Kurs: In der Geophysik werte ich radarbasierte Fernerkundungsdaten aus – dafür habe ich mir Python beigebracht, um große Zeitreihen zu verarbeiten, Muster zu erkennen und Ergebnisse nachvollziehbar aufzubereiten. Daraus ist ein echtes Interesse an Softwareentwicklung geworden: Mit TypeScript und React baue ich inzwischen auch Web-Anwendungen, meinen Code teile ich auf GitHub (github.com/vanhog). Für den Einstieg bringe ich damit etwas mit, das nicht jeder Berufseinsteiger mitbringt: die Gewohnheit, mich selbstständig in komplexe technische Probleme einzuarbeiten, sie in Code zu übersetzen – und das Ergebnis so zu dokumentieren, dass es auch andere verstehen.",
  },
];

export default beispielSlides;
