"use client";

export function disableScroll() {
  document.body.classList.add("overflow-hidden");
  document.body.setAttribute("data-lenis-prevent", "true");
}

export function enableScroll() {
  document.body.classList.remove("overflow-hidden");
  document.body.removeAttribute("data-lenis-prevent");
}
