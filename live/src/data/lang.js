import { createSignal } from "solid-js";
const STORAGE_KEY = "solv3d-language";
const stored = typeof localStorage !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
const [lang, setLangRaw] = createSignal(stored || "en");
export function setLang(v) {
  setLangRaw(v);
  localStorage.setItem(STORAGE_KEY, v);
}
export { lang };
