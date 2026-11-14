// ===== EDIT THESE VALUES (this is the only file you ever edit) =====
// Texts and links are strings. The *_MS values are numbers. AUTO_REDIRECT is true or false.
// An empty value ("") means that element is not shown at all.
export const CONFIG = {
  CLIENT_ID: "CLIENT_ID",
  PIXEL_ID: "000000000000000",
  BACKUP_LINK: "https://t.me/+bnbzc3Kn0x44ZTc1",
  HELPER_URL: "https://app.kapitrack.site",

  CHANNEL_NAME: "MONEY SIR",
  CHANNEL_TAGLINE: "",              // empty = not shown
  AVATAR_IMAGE_URL: "",             // center image (Blogger URL or avatar.jpg); empty = not shown
  FOOTER_ICON_URL: "",              // small icon in the footer; empty = not shown
  FAVICON_URL: "",                  // browser tab icon image (empty = use FAVICON_EMOJI)
  JOIN_BUTTON_TEXT: "Join Now",
  JOIN_BUTTON_WORKING_TEXT: "Opening App...",
  FOOTER_TEXT: "",                  // empty = no footer
  FOOTER_LINK_TEXT: "",
  FOOTER_LINK_URL: "",
  PAGE_TITLE: "Join our channel",
  FAVICON_EMOJI: "📢",

  REQUEST_TIMEOUT_MS: 4000,
  FBP_WAIT_MS: 3000,
  CLICK_WAIT_MS: 5000,
  AUTO_REDIRECT: false,
  AUTO_REDIRECT_DELAY_MS: 2000,
};
// ===== END OF VALUES =====
//
// What the settings mean:
// PIXEL_ID = the client's pixel ID, digits only (empty = the helper tells the page which one to use).
// HELPER_URL = address of the helper the page talks to (must start with https://; empty = the helper file's own address).
// REQUEST_TIMEOUT_MS = how long the page waits for the helper when it opens (500 to 30000).
// FBP_WAIT_MS = how long it keeps looking for the browser cookie after the page opens (0 to 10000).
// CLICK_WAIT_MS = how long a tap on the join button waits for the personal link before it uses BACKUP_LINK (0 to 30000; 0 = use the helper's own value).
// AUTO_REDIRECT = true: visitor is sent to Telegram automatically AUTO_REDIRECT_DELAY_MS after the page has loaded. false: only the button works.
// AUTO_REDIRECT_DELAY_MS = wait before the automatic open (0 to 10000; 1000 = 1 second).
