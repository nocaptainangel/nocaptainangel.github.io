"use client";

export function disableScroll() {
  document.body.classList.add("overflow-hidden");
}

export function enableScroll() {
  document.body.classList.remove("overflow-hidden");
}
