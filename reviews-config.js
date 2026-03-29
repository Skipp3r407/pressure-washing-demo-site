/**
 * Google Business Profile — hook up your real listing
 *
 * PLACE ID
 *   Google Business Profile → (menu) Business information → Advanced → Google place ID
 *   Or: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
 *
 * MAP EMBED
 *   Google Maps → open your business → Share → Embed a map → copy only the src="..." URL
 *   Paste the full URL into mapsEmbedSrc below (leave "" to keep the generic city map).
 *
 * LISTING / REVIEWS LINK
 *   listingUrl: link that opens your Maps listing (customers see reviews).
 *   reviewsUrl: optional; if set, “See all reviews” uses this (e.g. a g.page short link).
 */
window.APEXWASH_GOOGLE = {
  placeId: "",
  mapsEmbedSrc: "",
  listingUrl:
    "https://www.google.com/maps/search/?api=1&query=ApexWash+Exterior+Services+Your+City+ST",
  reviewsUrl: "",
};
