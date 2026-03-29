const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ApexWash Exterior Services",
  telephone: "+15555551234",
  email: "hello@apexwashexteriors.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Your City",
    addressRegion: "ST",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  url: "https://example.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    reviewCount: "127",
  },
};

export default function JsonLd() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
