"use client";

export function isMobileBrowser(navigator: Navigator) {
  if ("maxTouchPoints" in navigator) {
    return navigator.maxTouchPoints > 0;
  }

  const match = matchMedia?.("(pointer:coarse)");

  if (match?.media === "(pointer:coarse)") {
    return match.matches;
  }

  if ("orientation" in window) {
    return true;
  }

  const userAgent = (navigator as Navigator).userAgent;

  return /\b(Android|Windows Phone|iPad|iPod|BlackBerry|webOS|iPhone|IEMobile)\b/i.test(userAgent);
}
