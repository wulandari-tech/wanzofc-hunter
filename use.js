const { detectXSS, sanitizeString, escapeHTML } = require('./index');
const userInput = '<img src="javascript:alert(1)">Halo!';
const xssInfo = detectXSS(userInput);
if (xssInfo) console.warn("Potensi XSS:", xssInfo);
try {
  const aman = sanitizeString(userInput, {
    throwError: true,
    logToService: true,
    aggressiveSanitization: false,
  });
  console.log("Clean string:", aman);
} catch (error) {
  console.error("Error:", error.message);
}
const escaped = escapeHTML("<p>Ini tag HTML</p>");
console.log("Escaped HTML:", escaped);