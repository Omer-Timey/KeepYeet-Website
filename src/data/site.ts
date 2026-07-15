export const site = {
  name: "KeepYeet",
  url: "https://keepyeet.app",
  locale: "en_US",
  language: "en-US",
  developerName: "Omer Yom Tov",
  title: "KeepYeet: Swipe Photo Cleaner & Camera Roll Cleanup",
  description:
    "Clean up your camera roll with KeepYeet, the swipe photo cleaner app. Keep what matters, delete clutter, and free up phone storage. No account required.",
  appStoreUrl: "https://apps.apple.com/app/id6759491629",
  googlePlayUrl:
    "https://play.google.com/store/apps/details?id=com.keepyeet.app",
  appStoreId: "6759491629",
  androidPackage: "com.keepyeet.app",
} as const;

export const screenshots = [
  {
    src: "/images/app-store/screenshot-01.webp",
    alt: "KeepYeet photo cleaner showing a simple camera roll cleanup experience",
    label: "Clean up your camera roll",
  },
  {
    src: "/images/app-store/screenshot-02.webp",
    alt: "KeepYeet filters for videos, screenshots, months, albums, and recent photos",
    label: "Choose what to clean",
  },
  {
    src: "/images/app-store/screenshot-03.webp",
    alt: "KeepYeet swipe right gesture used to keep a photo",
    label: "Swipe right to keep",
  },
  {
    src: "/images/app-store/screenshot-04.webp",
    alt: "KeepYeet swipe left gesture used to mark a photo for deletion",
    label: "Swipe left to yeet",
  },
  {
    src: "/images/app-store/screenshot-05.webp",
    alt: "KeepYeet review step before deleting selected photos",
    label: "Review with zero panic",
  },
  {
    src: "/images/app-store/screenshot-06.webp",
    alt: "KeepYeet helping a user rediscover memories while cleaning photos",
    label: "Rediscover the good stuff",
  },
] as const;

export const homepageFaqs = [
  {
    question: "What is the fastest way to clean up a camera roll?",
    answer:
      "Start with one focused group, such as screenshots, videos, Recents, or a single month. Then make one keep-or-delete decision at a time. Short sessions reduce decision fatigue and make a large library manageable.",
    href: "/guides/clean-up-camera-roll/",
    linkLabel: "Learn more about cleaning up your camera roll",
  },
  {
    question: "How does swipe-to-delete photo cleanup work?",
    answer:
      "In KeepYeet, swipe right to keep a photo or video and left to mark it for deletion. Marked items go to a review step, so a single swipe is not the final deletion.",
    href: "/guides/swipe-delete-photos/",
    linkLabel: "Learn how to swipe delete photos safely",
  },
  {
    question: "How can I delete unwanted photos without losing good ones?",
    answer:
      "Keep the session small, make every decision manually, and inspect the complete deletion list before confirming. Recovery then depends on the platform and backup state: Apple Photos documents 30 days in Recently Deleted, while Google Photos documents 60 days for backed-up items and 30 days for unbacked items.",
    href: "/guides/review-photos-before-deleting/",
    linkLabel: "Learn how to review photos before deleting",
  },
  {
    question: "Can deleting screenshots free up phone storage?",
    answer:
      "Yes. Old screenshots can accumulate quietly. KeepYeet gives them a focused view so you can remove outdated tickets, receipts, confirmations, and temporary references without scrolling through everything else.",
    href: "/guides/delete-screenshots/",
    linkLabel: "Learn how to delete screenshot clutter",
  },
  {
    question: "How do I organize and clean photos by month?",
    answer:
      "Choose one month, review it in context, keep the memories that matter, and remove the clutter. A month is a natural boundary that turns an overwhelming library into a finishable session.",
    href: "/guides/organize-photos-by-month/",
    linkLabel: "Learn how to organize photos by month",
  },
  {
    question: "Can KeepYeet clean both photos and videos?",
    answer:
      "Yes. KeepYeet supports photos and videos, with dedicated views for videos, screenshots, months, albums, and Recents. Every final deletion stays under your control, and KeepYeet does not claim video compression.",
    href: "/guides/delete-large-videos-to-free-space/",
    linkLabel: "Learn how to review large videos for more space",
  },
  {
    question: "Do my photos need to be uploaded for KeepYeet to sort them?",
    answer:
      "No. KeepYeet’s photo-library sorting and deletion workflow happens on-device, and no account is required. Analytics and advertising disclosures are separate, so review the current privacy policy and store privacy label for full details.",
    href: "/guides/private-photo-cleaner/",
    linkLabel: "Learn about on-device photo cleanup",
  },
  {
    question: "Is KeepYeet available on Google Play?",
    answer:
      "Yes. KeepYeet is available on Google Play for Android. Use the Google Play button to install it.",
    href: "/#download",
    linkLabel: "Download KeepYeet for Android",
  },
] as const;
