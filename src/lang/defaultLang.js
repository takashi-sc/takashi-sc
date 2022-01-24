import translations from "../lang/translations";

function defaultLang() {
	let langs = Object.keys(translations);
	if (langs.find((key) => key === navigator.language.slice(0, 2))) {
		return navigator.language.slice(0, 2);
	} else {
		return "en";
	}
}

export const dl = defaultLang();
