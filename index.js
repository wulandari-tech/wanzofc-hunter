
const xssPatterns = [
  /<script.*?>.*?<\/script>/i, /on\w+\s*=\s*"[^"]*"/i, /javascript:/i, /vbscript:/i,
  /data:text\/html/i, /<iframe>.*?<\/iframe>/i, /<!--.*?-->/g, /style\s*=\s*"[^"]*"/i,
  /expression\((.*?)\)/i, /url\((.*?)\)/i, /eval\((.*?)\)/i, /setTimeout\((.*?)\)/i,
  /setInterval\((.*?)\)/i, /new Function\((.*?)\)/i, /document\.write\((.*?)\)/i,
  /document\.location/i, /window\.location/i, /alert\((.*?)\)/i, /confirm\((.*?)\)/i,
  /prompt\((.*?)\)/i, /<svg.*?>.*?<\/svg>/i, /<math.*?>.*?<\/math>/i
];

function detectXSS(str) {
  for (const pattern of xssPatterns) {
    const match = pattern.exec(str);
    if (match) return { pattern: pattern.source, match: match[0], index: match.index };
  }
  return null;
}

function sanitizeString(str, options = {}) {
  const xssInfo = detectXSS(str);

  if (xssInfo) {
    console.warn("XSS detected:", xssInfo);
    if (options.throwError) throw new Error("XSS detected. Input rejected.");
    if (options.logToService) logXSS(xssInfo, str);
    str = options.aggressiveSanitization ? str.replace(/<[^>]*>/g, '') : escapeHTML(str);
  } else {
    str = escapeHTML(str);
  }

  return str;
}

function escapeHTML(str) {
  return str.replace(/[<>"'&]/g, m => (
    m === '<' ? '<' :
    m === '>' ? '>' :
    m === '"' ? '"' :
    m === "'" ? ''' : '&'
  ));
}

function logXSS(xssInfo, originalString) {
  console.log("XSS Logging (Implement me):", xssInfo, originalString);
}

module.exports = { detectXSS, sanitizeString, escapeHTML };