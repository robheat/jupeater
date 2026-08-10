export type FaqItem = {
  slug: string;
  question: string;
  answer: string;
  linkHref?: string;
  linkLabel?: string;
};

const faqs: FaqItem[] = [
  {
    slug: "waterfront-restaurants",
    question: "What are the best waterfront restaurants in Jupiter, FL?",
    answer:
      "Jupiter has several restaurants directly on the Jupiter Inlet, the Intracoastal, or a marina - places like Guanabanas, U-Tiki Beach, and Jetty's sit right on the inlet, while others like Zunzibar and Voodoo Bayou are on the Intracoastal further south. The full list, with notes on which body of water each one sits on, is on our waterfront dining page.",
    linkHref: "/categories/waterfront-dining-jupiter-fl",
    linkLabel: "Browse waterfront dining in Jupiter FL",
  },
  {
    slug: "best-seafood",
    question: "Where can I find good seafood in Jupiter, FL?",
    answer:
      "Jupiter's seafood restaurants split into two camps: classic Florida seafood kitchens serving fresh local catch, and sushi-forward spots where raw preparations are the focus. Some restaurants, like Dive Bar and Sea Racha, do both. See our full seafood category for the current list, sorted with neighborhood and price tier.",
    linkHref: "/categories/best-seafood-restaurants-jupiter-fl",
    linkLabel: "Browse seafood restaurants in Jupiter FL",
  },
  {
    slug: "date-night",
    question: "What are the best restaurants for a date night in Jupiter?",
    answer:
      "Date-night restaurants in Jupiter range from steakhouse settings like Ruth's Chris and Lewis Steakhouse, to intimate Italian dining rooms like Tavolena, to newer upscale spots like Eddie V's and Blackbird Modern Asian. If waterfront ambiance matters to you too, several of these also appear on our waterfront dining page.",
    linkHref: "/categories/date-night-restaurants-jupiter-fl",
    linkLabel: "Browse date night restaurants in Jupiter FL",
  },
  {
    slug: "family-friendly",
    question: "Are there family-friendly restaurants in Jupiter, FL?",
    answer:
      "Yes - Jupiter has a range of casual, moderately priced restaurants suited to eating out with kids, from counter-service spots like Dune Dog Cafe to easygoing neighborhood bars and casual seafood shacks with outdoor seating. Early dinner, generally before 6 PM, is usually the easiest time to get a table without a wait.",
    linkHref: "/categories/family-friendly-restaurants-jupiter-fl",
    linkLabel: "Browse family-friendly restaurants in Jupiter FL",
  },
  {
    slug: "italian-food",
    question: "Where can I get good Italian food in Jupiter, FL?",
    answer:
      "Jupiter has five restaurants built specifically around Italian cooking, from Lynora's, which has served the area since 1976, to newer openings like Arthur & Sons and Evo Italian in Tequesta. Not every one makes fresh pasta in-house, so it's worth checking each listing's description if that matters to you.",
    linkHref: "/categories/best-italian-restaurants-jupiter-fl",
    linkLabel: "Browse Italian restaurants in Jupiter FL",
  },
  {
    slug: "sushi",
    question: "What's the best sushi in Jupiter, FL?",
    answer:
      "Six Jupiter-area restaurants treat sushi as a real part of the menu, split between Asian-fusion kitchens (like Thai Lotus and Sea Racha) and seafood restaurants with a sushi bar alongside a raw bar (like Dive Bar and Hog Snappers). Blackbird Modern Asian is the newest and most upscale option.",
    linkHref: "/categories/best-sushi-restaurants-jupiter-fl",
    linkLabel: "Browse sushi restaurants in Jupiter FL",
  },
  {
    slug: "brunch",
    question: "Where can I find brunch in Jupiter, FL?",
    answer:
      "Only a few Jupiter restaurants run a real, dedicated brunch service rather than just opening early. Guanabanas runs a dockside brunch at the Jupiter Inlet on Sundays, Ruth's Chris pairs brunch with its usual Sunday dinner hours, and Sea Racha offers a lighter weekend brunch alongside its regular menu.",
    linkHref: "/categories/best-brunch-restaurants-jupiter-fl",
    linkLabel: "Browse brunch restaurants in Jupiter FL",
  },
  {
    slug: "happy-hour",
    question: "Where can I find happy hour specials in Jupiter, FL?",
    answer:
      "Several Jupiter restaurants run a dedicated happy hour, including waterfront spots like U-Tiki Beach and Zunzibar, neighborhood bars like Hap & Hooch, and newer openings like Lucky Shuck and Voodoo Bayou. Specials and time windows shift seasonally, so it's worth confirming current hours directly before you go.",
    linkHref: "/categories/best-happy-hour-restaurants-jupiter-fl",
    linkLabel: "Browse happy hour restaurants in Jupiter FL",
  },
  {
    slug: "live-music",
    question: "What restaurants in Jupiter, FL have live music?",
    answer:
      "A handful of Jupiter restaurants regularly book live entertainment - Guanabanas has an outdoor tiki stage, Little Moir's Food Shack runs live music nightly, Nieko's Neighborhood Bar hosts karaoke and comedy nights, and Eddie V's features a lounge trio. Lineups change weekly, so it's worth checking directly if a specific night matters to you.",
    linkHref: "/categories/live-music-restaurants-jupiter-fl",
    linkLabel: "Browse live music restaurants in Jupiter FL",
  },
  {
    slug: "dog-friendly",
    question: "Are there dog-friendly restaurants in Jupiter, FL?",
    answer:
      "Yes - we've confirmed a number of Jupiter-area restaurants that welcome dogs in their outdoor seating, mostly clustered around waterfront and marina settings like U-Tiki Beach, Jetty's, and Dive Bar. Policies can vary by day and how busy the patio is, so it's worth calling ahead if bringing your dog is the main plan.",
    linkHref: "/categories/dog-friendly-restaurants-jupiter-fl",
    linkLabel: "Browse dog-friendly restaurants in Jupiter FL",
  },
  {
    slug: "coverage-area",
    question: "Does Jupeater cover restaurants outside of Jupiter, like Tequesta or Palm Beach Gardens?",
    answer:
      "Yes. Jupeater covers Jupiter and the surrounding coastal towns, including Tequesta, Juno Beach, and Palm Beach Gardens. You can filter the full restaurant list by neighborhood to see what's nearby in each area.",
    linkHref: "/restaurants",
    linkLabel: "Browse all Jupiter-area restaurants",
  },
  {
    slug: "submit-listing",
    question: "How do I submit or update a restaurant listing on Jupeater?",
    answer:
      "If you run a restaurant in the Jupiter area and want to be added to Jupeater, or need to correct details on an existing listing, use our submission form and we'll review it.",
    linkHref: "/submit",
    linkLabel: "Submit or update a listing",
  },
];

export function getFaqs(): FaqItem[] {
  return faqs;
}
