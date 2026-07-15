export type GuideStep = {
  title: string;
  body: string;
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideSource = {
  title: string;
  url: string;
  note: string;
};

export type Guide = {
  slug: string;
  keyword: string;
  eyebrow: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  steps: GuideStep[];
  checklist: string[];
  integrationTitle: string;
  integrationBody: string[];
  faqs: GuideFaq[];
  relatedSlugs: string[];
};

export const guides: Guide[] = [
  {
    slug: "swipe-delete-photos",
    keyword: "swipe delete photos",
    eyebrow: "Swipe cleanup guide",
    title: "Swipe Delete Photos Without Losing Control | KeepYeet",
    description:
      "Learn how to swipe delete photos in focused sessions, review every choice, and keep final deletion under your control.",
    h1: "Swipe Delete Photos Without Losing Control",
    intro: [
      "A swipe-based cleanup turns a crowded photo library into a series of simple decisions. Instead of selecting tiny thumbnails in bulk, you look at one item at a time and decide whether it still deserves space in your library. That slower decision at the item level can make the full cleanup feel faster because there is less menu hunting and less second-guessing.",
      "The useful version of this method still includes a safety checkpoint. A left swipe should mark an item for deletion, not remove it before you can inspect the full list. Work in a narrow category or month, stop when your attention fades, and review the marked items together before confirming the session.",
    ],
    steps: [
      {
        title: "Choose one focused batch",
        body: "Start with Recents, screenshots, videos, one album, or one month. A clear boundary keeps the session manageable and makes it easier to remember the context behind each item.",
      },
      {
        title: "Use one gesture for each decision",
        body: "Swipe right to keep an item and left to mark it for deletion. Make the decision based on whether the item is useful, meaningful, or worth the storage it occupies.",
      },
      {
        title: "Review before you remove",
        body: "Inspect the complete deletion list before confirming it. Return anything uncertain to the keep side, then finish the session only when the remaining choices feel deliberate.",
      },
    ],
    checklist: [
      "Pick a category or month before the first swipe",
      "Keep the item when the decision is genuinely uncertain",
      "Pause when repeated decisions start to feel automatic",
      "Inspect every item marked for deletion",
      "Check progress and storage reclaimed after the session",
    ],
    integrationTitle: "How KeepYeet makes swipe cleanup deliberate",
    integrationBody: [
      "KeepYeet combines focused library filters with swipe-based review. Swipe right to keep and left to mark for deletion, then narrow the library with month, screenshot, video, album, and Recents filters.",
      "Before final deletion, KeepYeet gives you a review step for the items you marked. No account is required, photo review stays on-device, and visible progress helps you end a session with a concrete result instead of an unfinished feeling.",
    ],
    faqs: [
      {
        question: "Which way do I swipe to keep or delete a photo?",
        answer:
          "In KeepYeet, swipe right to keep an item and left to mark it for deletion. The marked items are reviewed before final removal.",
      },
      {
        question: "Are photos deleted immediately after a left swipe?",
        answer:
          "No. A left swipe adds the item to the deletion choices for that session, and the review step lets you inspect those choices before confirming them.",
      },
      {
        question: "How many photos should I review in one session?",
        answer:
          "Use attention rather than a fixed number as the limit. A short, accurate session is more useful than continuing until every decision becomes automatic.",
      },
    ],
    relatedSlugs: ["review-photos-before-deleting", "delete-unwanted-photos"],
  },
  {
    slug: "clean-up-camera-roll",
    keyword: "clean up camera roll",
    eyebrow: "Camera roll cleanup",
    title: "Clean Up Camera Roll in Short Sessions | KeepYeet",
    description:
      "Clean up camera roll clutter with focused filters, short sessions, and a final review before anything is removed.",
    h1: "How to Clean Up Your Camera Roll in Short Sessions",
    intro: [
      "Trying to clean an entire camera roll in one sitting usually creates more resistance than progress. The library contains different kinds of decisions: recent mistakes are easy to judge, screenshots are mostly practical, videos demand more storage attention, and older months can carry more emotional context. Treating all of them as one job makes the task unnecessarily heavy.",
      "A better cleanup sequence starts with a clearly defined section and ends before decision fatigue takes over. Remove the easiest clutter first, move through one month or album at a time, and use a final review to separate confident deletions from items that deserve another look.",
    ],
    steps: [
      {
        title: "Start with the easiest clutter",
        body: "Open Recents or screenshots and remove items whose purpose has already expired. Early, obvious decisions create momentum without putting meaningful memories at risk.",
      },
      {
        title: "Give older photos a boundary",
        body: "Choose one month or album for the next session. Review related photos together so you can understand the event or period before deciding what still matters.",
      },
      {
        title: "Finish with a review ritual",
        body: "Check every item marked for deletion, restore uncertain choices, and confirm the rest. Record the progress, then leave the next category for another short session.",
      },
    ],
    checklist: [
      "Clear expired screenshots and obvious recent mistakes first",
      "Review one month or album at a time",
      "Keep the strongest version when several shots tell the same story",
      "Separate uncertain items from confident deletions",
      "Schedule another short session instead of forcing a full-library cleanup",
    ],
    integrationTitle: "Turn one large camera roll into smaller KeepYeet sessions",
    integrationBody: [
      "KeepYeet lets you enter the library through Recents, screenshots, videos, albums, or a month. That structure makes it easy to match the session to your available time: clear a practical category in a few minutes or review an older month when you have more attention.",
      "Within each session, right means keep and left means mark for deletion. You review the marked items before confirming, while progress and reclaimed storage show what the completed session accomplished.",
    ],
    faqs: [
      {
        question: "What is the fastest way to clean up a camera roll?",
        answer:
          "Begin with a narrow, low-emotion category such as screenshots or Recents. Then handle older photos month by month instead of scrolling through the full library.",
      },
      {
        question: "How often should I clean my camera roll?",
        answer:
          "A short weekly pass can control new clutter, while one monthly session can gradually reduce the older backlog. Consistency matters more than session length.",
      },
      {
        question: "How do I avoid deleting an important memory?",
        answer:
          "Make each decision manually, keep anything uncertain, and inspect the final deletion list before confirming it.",
      },
    ],
    relatedSlugs: ["camera-roll-cleaner", "organize-photos-by-month"],
  },
  {
    slug: "camera-roll-cleaner",
    keyword: "camera roll cleaner",
    eyebrow: "Choosing a cleanup workflow",
    title: "Camera Roll Cleaner: A Practical Guide | KeepYeet",
    description:
      "Use a camera roll cleaner to sort manageable batches, review deletions, and measure cleanup progress.",
    h1: "What a Useful Camera Roll Cleaner Should Help You Do",
    intro: [
      "A camera roll cleaner is most useful when it reduces the effort of reviewing a large library without taking the decisions away from you. The goal is not simply to produce a dramatic deletion count. It is to help you reach photos that need attention, judge them with enough context, and understand what will happen before anything is removed.",
      "Look for a workflow that separates screenshots, videos, recent items, albums, and chronological groups. Those entry points support different cleanup goals. Final control, a review-before-delete stage, and visible progress matter more than vague cleanup promises.",
    ],
    steps: [
      {
        title: "Match the filter to the goal",
        body: "Use screenshots for quick clutter, videos when storage is urgent, Recents for maintenance, albums for a specific subject, and months for an older backlog.",
      },
      {
        title: "Keep judgment with the person",
        body: "Review each item and decide whether it is useful, meaningful, or replaceable. A good cleaner should make that decision easier to express, not pretend every photo has an objective answer.",
      },
      {
        title: "Require a clear final checkpoint",
        body: "Before removal, inspect the full set of deletion choices. A useful cleaner should also make completed progress and storage impact understandable after the session.",
      },
    ],
    checklist: [
      "Multiple filters for different cleanup intents",
      "Manual keep-or-delete control",
      "A review stage before final deletion",
      "Clear progress between sessions",
      "No required account before beginning",
    ],
    integrationTitle: "KeepYeet covers the practical camera roll cleaner basics",
    integrationBody: [
      "KeepYeet provides focused views for months, screenshots, videos, albums, and Recents. In swipe sessions, right keeps an item and left marks it for deletion, making the workflow quick without surrendering personal judgment.",
      "The review screen creates the final checkpoint, and completed sessions show cleanup progress and storage reclaimed. The photo workflow remains on-device, and you can begin without creating an account.",
    ],
    faqs: [
      {
        question: "What does a camera roll cleaner do?",
        answer:
          "It helps you navigate a large photo library, review media in focused groups, and remove the items you no longer want through a clearer workflow.",
      },
      {
        question: "Should a camera roll cleaner delete photos automatically?",
        answer:
          "No. KeepYeet keeps final deletion under your control and includes a review step so context stays with you.",
      },
      {
        question: "Can a camera roll cleaner help with videos too?",
        answer:
          "Yes. KeepYeet includes a video filter, letting you review that storage-heavy category separately from still photos.",
      },
    ],
    relatedSlugs: ["photo-cleaner-app", "clean-up-camera-roll"],
  },
  {
    slug: "photo-cleaner-app",
    keyword: "photo cleaner app",
    eyebrow: "Photo cleaner app guide",
    title: "Photo Cleaner App: What to Look For | KeepYeet",
    description:
      "Find a photo cleaner app with focused filters, a review checkpoint, and progress you can see after each session.",
    h1: "How to Choose a Photo Cleaner App You Will Actually Use",
    intro: [
      "The best photo cleaner app is not the one with the most dramatic promise. It is the one that lowers the effort required to return regularly, gives you enough context to make good decisions, and prevents an accidental tap from becoming an irreversible cleanup. A useful app should fit both a two-minute maintenance pass and a deeper review of older memories.",
      "Evaluate the workflow rather than the marketing label. Check how it handles screenshots, videos, recent items, albums, and older months; whether final deletion remains your choice; whether there is a review stage; and whether the app clearly shows what you accomplished.",
    ],
    steps: [
      {
        title: "Test how quickly a session can start",
        body: "A strong photo cleaner app should let you choose a meaningful category without scrolling through the entire library or completing an account setup first.",
      },
      {
        title: "Check who confirms deletion",
        body: "An app can make review faster, but the final judgment about what stays should remain yours.",
      },
      {
        title: "Inspect the safety and progress signals",
        body: "Confirm that marked items can be reviewed before deletion and that finished sessions show useful progress, including reclaimed storage when available.",
      },
    ],
    checklist: [
      "Fast access to Recents and common clutter categories",
      "Month and album views for contextual review",
      "Control over every final removal",
      "A readable deletion review before confirmation",
      "Visible progress that encourages another session",
    ],
    integrationTitle: "Why KeepYeet is designed for repeatable cleanup",
    integrationBody: [
      "KeepYeet opens directly into useful cleanup paths: Recents, screenshots, videos, albums, and months. In swipe sessions, right keeps an item and left marks it for deletion, followed by a review step.",
      "There is no required account, photo review stays on-device, and the app records cleanup progress and storage reclaimed. Those choices make it practical for both quick maintenance and a gradual photo-library reset.",
    ],
    faqs: [
      {
        question: "What features matter most in a photo cleaner app?",
        answer:
          "Prioritize useful filters, control over final deletion, understandable progress, and a workflow short enough to repeat regularly.",
      },
      {
        question: "Do I need an account to use KeepYeet?",
        answer:
          "No. You can begin the photo-cleaning workflow without creating an account.",
      },
      {
        question: "Can a photo cleaner app help free storage?",
        answer:
          "It can help you identify and remove unwanted photos and videos. KeepYeet also shows storage reclaimed so you can see the impact of completed cleanup.",
      },
    ],
    relatedSlugs: ["camera-roll-cleaner", "private-photo-cleaner"],
  },
  {
    slug: "free-up-phone-storage",
    keyword: "free up phone storage",
    eyebrow: "Storage cleanup guide",
    title: "Free Up Phone Storage by Cleaning Media | KeepYeet",
    description:
      "Free up phone storage by reviewing large videos, old screenshots, and unwanted photos, then track the space reclaimed after a careful cleanup.",
    h1: "Free Up Phone Storage by Cleaning Photo and Video Clutter",
    intro: [
      "When a phone is short on storage, the photo library is a practical place to look because it grows quietly. Long videos, temporary screenshots, accidental shots, and forgotten downloads can accumulate across years. The fastest route is not to review everything in chronological order; it is to begin with categories likely to contain either large files or easy decisions.",
      "Storage cleanup still needs context. A large video may be irreplaceable, while a small screenshot may have no remaining value. Start with storage-heavy media, move to obvious clutter, and finish with a review so the space gained comes from confident choices rather than rushed deletion.",
    ],
    steps: [
      {
        title: "Begin with videos",
        body: "Review the video category before working through thousands of photos. A small number of unwanted recordings may make a meaningful difference to available storage.",
      },
      {
        title: "Clear high-confidence clutter",
        body: "Move to screenshots and Recents to remove expired references, accidental captures, and temporary images whose purpose has already passed.",
      },
      {
        title: "Confirm and measure the result",
        body: "Review every selected item before deletion, then check the storage reclaimed. Remember that device-level Recently Deleted or Trash behavior can delay when space becomes fully available.",
      },
    ],
    checklist: [
      "Review videos before sorting the full photo library",
      "Remove expired screenshots and temporary references",
      "Keep irreplaceable media even when the file is large",
      "Check the deletion list before confirmation",
      "Account for the device's Recently Deleted or Trash behavior",
    ],
    integrationTitle: "Use KeepYeet to focus on the media that affects storage",
    integrationBody: [
      "KeepYeet separates videos, screenshots, Recents, albums, and months into focused sessions. Start with storage-heavy videos, switch to screenshot clutter, and leave sentimental months for a more thoughtful review.",
      "Whether you begin with a video filter or another focused swipe session, every final deletion remains under your control and review comes before removal. KeepYeet also shows storage reclaimed and overall cleanup progress.",
    ],
    faqs: [
      {
        question: "Do photos and videos use a lot of phone storage?",
        answer:
          "A large media library can use substantial storage, and longer or higher-quality videos often have the greatest impact per item.",
      },
      {
        question: "Does deleting media free storage immediately?",
        answer:
          "Not always. The device may keep deleted items in Recently Deleted or Trash for a recovery period, so permanent space recovery depends on the photo library's behavior.",
      },
      {
        question: "Can KeepYeet show how much storage was reclaimed?",
        answer:
          "Yes. Reclaimed storage and cleanup progress are visible parts of the KeepYeet experience.",
      },
    ],
    relatedSlugs: [
      "delete-large-videos-to-free-space",
      "delete-screenshots",
    ],
  },
  {
    slug: "delete-unwanted-photos",
    keyword: "delete unwanted photos",
    eyebrow: "Intentional deletion guide",
    title: "Delete Unwanted Photos With Confidence | KeepYeet",
    description:
      "Delete unwanted photos with a manual, review-first process for accidental shots, expired references, weak takes, and images you no longer need.",
    h1: "How to Delete Unwanted Photos Without Second-Guessing",
    intro: [
      "An unwanted photo is not always a bad photo. It may be a temporary screenshot, an accidental pocket shot, a weaker take from a burst of attempts, or an image that once served a purpose but no longer does. Defining those categories before cleanup makes each decision faster and more consistent.",
      "Avoid setting a deletion quota. A quota encourages borderline choices just to reach a number. Instead, work through one context at a time, keep the strongest or most meaningful items, and treat uncertainty as a reason to keep an item until a later review.",
    ],
    steps: [
      {
        title: "Define what unwanted means today",
        body: "Choose one category such as expired screenshots, accidental captures, weak attempts, or media from a specific month that no longer has practical or personal value.",
      },
      {
        title: "Compare value, not perfection",
        body: "Ask whether the item preserves a memory, communicates useful information, or is difficult to replace. Keep it when the answer is unclear.",
      },
      {
        title: "Separate decisions from deletion",
        body: "Mark the unwanted items during the session, then inspect them together before confirming. This pause helps catch choices made too quickly.",
      },
    ],
    checklist: [
      "Accidental or unusable captures",
      "Temporary reference images that have expired",
      "Weaker takes when another photo tells the story better",
      "Media that is easy to replace and no longer useful",
      "A final check for people, documents, or moments that matter",
    ],
    integrationTitle: "KeepYeet keeps unwanted-photo decisions personal",
    integrationBody: [
      "In KeepYeet, you examine each item and swipe right to keep it or left to mark it for deletion. Filters for months, screenshots, videos, albums, and Recents let you apply one clear definition of unwanted media at a time.",
      "The review step keeps the decision phase separate from final deletion. Recovery then depends on the active photo library: Apple Photos documents 30 days in Recently Deleted, while Google Photos documents 60 days for backed-up items and 30 days for unbacked items.",
    ],
    faqs: [
      {
        question: "What counts as an unwanted photo?",
        answer:
          "It can be an accidental shot, an outdated reference, a weaker version of a moment, or any image that no longer has enough practical or personal value to keep.",
      },
      {
        question: "How can I delete unwanted photos without deleting good ones?",
        answer:
          "Use a narrow category, make every choice manually, keep uncertain items, and review all marked photos before final deletion.",
      },
      {
        question: "Can deleted photos be recovered?",
        answer:
          "Recovery depends on the device's photo library and backup state. Apple Photos documents 30 days in Recently Deleted; Google Photos documents 60 days for backed-up items and 30 days for unbacked items.",
      },
    ],
    relatedSlugs: ["review-photos-before-deleting", "declutter-photo-library"],
  },
  {
    slug: "declutter-photo-library",
    keyword: "declutter photo library",
    eyebrow: "Photo library reset",
    title: "Declutter Photo Library: A Simple Reset | KeepYeet",
    description:
      "Declutter photo library overload with a category-first routine, month-by-month review, manual decisions, and small sessions you can repeat.",
    h1: "Declutter Your Photo Library Without Making It a Weekend Project",
    intro: [
      "Photo-library clutter is both visual and cognitive. The problem is not only the storage used by unwanted media; it is also the friction of scrolling past expired screenshots, failed shots, and forgotten videos whenever you want to find something meaningful. A successful declutter should make the library easier to revisit, not simply make a deletion counter larger.",
      "Use a layered routine: remove obvious clutter, review storage-heavy media, then work backward through months or albums. Each layer has a different decision speed. Keeping those modes separate reduces fatigue and makes it realistic to continue over several short sessions.",
    ],
    steps: [
      {
        title: "Remove the low-context layer",
        body: "Start with screenshots and recent mistakes, where the original purpose is easy to remember. These decisions clear visible noise and build momentum.",
      },
      {
        title: "Address the high-impact layer",
        body: "Review videos separately when storage is part of the goal. Judge large files carefully instead of assuming that size makes them expendable.",
      },
      {
        title: "Work through the memory layer",
        body: "Choose one month or album at a time for older photos. Finish with a deletion review, then stop and return to the next layer later.",
      },
    ],
    checklist: [
      "Give each session one category and one stopping point",
      "Clear screenshots and recent mistakes before older memories",
      "Review videos as their own storage-focused category",
      "Use months or albums to preserve context",
      "Measure progress across sessions rather than chasing one large purge",
    ],
    integrationTitle: "Build a repeatable decluttering system in KeepYeet",
    integrationBody: [
      "KeepYeet provides the layers needed for a practical reset: screenshots and Recents for quick wins, videos for storage-focused review, and albums or months for contextual cleanup. Manual right-to-keep and left-to-delete swipes keep the process moving without making choices for you.",
      "A review screen precedes final deletion, while progress and storage reclaimed carry the result from one session to the next. Because no account is required, you can return whenever a small cleanup window appears.",
    ],
    faqs: [
      {
        question: "Where should I start when my photo library is overwhelming?",
        answer:
          "Start with screenshots or Recents because those items usually require less emotional context. Save older months and albums for later sessions.",
      },
      {
        question: "Do I need to declutter my whole photo library at once?",
        answer:
          "No. A category-first, month-by-month routine is easier to sustain and gives each session a clear finish line.",
      },
      {
        question: "How do I keep the library from becoming cluttered again?",
        answer:
          "Use short Recents and screenshot reviews regularly, then schedule occasional month or album sessions for the older backlog.",
      },
    ],
    relatedSlugs: ["clean-up-camera-roll", "organize-photos-by-month"],
  },
  {
    slug: "organize-photos-by-month",
    keyword: "organize photos by month",
    eyebrow: "Month-by-month cleanup",
    title: "Organize Photos by Month Without Overwhelm | KeepYeet",
    description:
      "Organize photos by month with smaller review sessions that preserve context, reduce old clutter, and make long-term photo cleanup manageable.",
    h1: "Organize Photos by Month With a Repeatable Review Routine",
    intro: [
      "A month is a useful boundary for photo cleanup because it keeps related events, places, and people close together. That context helps you distinguish the strongest memories from temporary images or weaker attempts. It also creates a natural stopping point that a full-library scroll does not provide.",
      "Organizing by month does not have to mean creating a new album for every calendar page. It can simply mean reviewing one chronological group, reducing its clutter, and recording that the period has received attention before moving to another month.",
    ],
    steps: [
      {
        title: "Choose a month with a reason",
        body: "Start with a recent month, a trip, a busy season, or a period you know contains many photos. A clear reason makes it easier to begin.",
      },
      {
        title: "Review related moments together",
        body: "Look at photos within their chronological context. Keep the images that best preserve the event, and mark practical clutter or weak attempts for deletion.",
      },
      {
        title: "Close the month deliberately",
        body: "Inspect the marked items, confirm confident choices, and note the completed progress. Choose the next month only when you are ready for another session.",
      },
    ],
    checklist: [
      "Pick one month rather than one entire year",
      "Review event photos while their context is visible",
      "Keep meaningful differences between similar moments",
      "Move uncertain items out of the deletion list",
      "Use completed months as milestones for long-term progress",
    ],
    integrationTitle: "Use KeepYeet as a month-by-month review companion",
    integrationBody: [
      "KeepYeet includes month-based cleanup so you can enter the library through a clear chronological group. Within the month, swipe right to keep each memory or left to mark an item for deletion, without losing the surrounding period as context.",
      "After the swipe session, review the marked items before final deletion. KeepYeet records progress and reclaimed storage, making it easier to stop after one month and resume the broader cleanup later.",
    ],
    faqs: [
      {
        question: "Why organize photos by month?",
        answer:
          "Months create manageable groups and keep related events together, which makes both memory decisions and stopping points clearer.",
      },
      {
        question: "Does KeepYeet automatically create monthly albums?",
        answer:
          "The verified feature is month-by-month review and cleanup. It does not need to create new albums for the method to work.",
      },
      {
        question: "Which month should I clean first?",
        answer:
          "Choose a recent month for easier decisions or a known high-volume month for a larger impact. The best starting point is one you can finish.",
      },
    ],
    relatedSlugs: ["declutter-photo-library", "camera-roll-cleaner"],
  },
  {
    slug: "delete-screenshots",
    keyword: "delete screenshots",
    eyebrow: "Screenshot cleanup",
    title: "Delete Screenshots Without Endless Scrolling | KeepYeet",
    description:
      "Delete screenshots with a focused filter, separate useful records from expired references, and review the final choices before removal.",
    h1: "Delete Screenshots Without Scrolling Through Every Photo",
    intro: [
      "Screenshots are useful precisely because they are quick. They capture a ticket, address, product, conversation, recipe, or reminder before you decide where that information belongs. The same convenience makes them easy to forget, leaving the photo library full of references whose purpose has already expired.",
      "A screenshot-only cleanup removes the distraction of personal photos and turns the task into a practical review. Decide whether each image still contains actionable information, move that information somewhere more appropriate when needed, and delete the screenshot only after its job is finished.",
    ],
    steps: [
      {
        title: "Open screenshots as their own category",
        body: "Avoid searching through the entire library. A focused screenshot view keeps the session practical and prevents unrelated memories from interrupting the task.",
      },
      {
        title: "Ask whether the information still has a job",
        body: "Keep active tickets, current instructions, or records you still need. Mark expired confirmations, completed reminders, and contextless captures for deletion.",
      },
      {
        title: "Review for hidden importance",
        body: "Check the deletion list for order details, addresses, receipts, or conversations that still matter before confirming the cleanup.",
      },
    ],
    checklist: [
      "Expired tickets and event details",
      "Completed reminders and temporary reference images",
      "Old product comparisons or shopping captures",
      "Information already saved in a more useful place",
      "Receipts or records that still need to be kept",
    ],
    integrationTitle: "KeepYeet gives screenshots a focused cleanup lane",
    integrationBody: [
      "KeepYeet's screenshot filter isolates this category from the rest of the library. Swipe right when the information is still useful and left when the screenshot has finished its job, without working around unrelated photos.",
      "The review step gives you one last chance to catch a record that still matters before deletion. Completed screenshot sessions also contribute to visible cleanup progress and reclaimed storage.",
    ],
    faqs: [
      {
        question: "Can KeepYeet show only screenshots?",
        answer:
          "Yes. Screenshots are a dedicated filter, so you can clean them without scrolling through ordinary photos and videos.",
      },
      {
        question: "Which screenshots should I delete first?",
        answer:
          "Begin with expired tickets, completed reminders, old confirmation screens, and reference information you no longer need.",
      },
      {
        question: "How do I avoid deleting an important screenshot?",
        answer:
          "Check whether it contains an active record, address, receipt, or instruction, then inspect the full deletion list before confirming it.",
      },
    ],
    relatedSlugs: ["free-up-phone-storage", "declutter-photo-library"],
  },
  {
    slug: "delete-large-videos-to-free-space",
    keyword: "delete large videos to free space",
    eyebrow: "Video storage cleanup",
    title: "Delete Large Videos to Free Space | KeepYeet",
    description:
      "Delete large videos to free space with a careful video-first review, manual keep-or-delete choices, and a final check before removal.",
    h1: "Delete Large Videos to Free Space Without Losing What Matters",
    intro: [
      "Videos are a sensible first stop when storage is tight because one recording can occupy more space than many still photos. But file size does not determine personal value. A long family clip may be irreplaceable, while an equally large accidental recording may be an easy deletion.",
      "Use a video-first review to reduce the number of decisions required for a meaningful storage result. Watch enough of each recording to identify it, consider whether a better version exists, and separate confident removals from clips that need a more careful decision.",
    ],
    steps: [
      {
        title: "Review videos as a separate category",
        body: "Open a video-only session so storage-heavy files are not buried among still photos. Begin with recordings whose context you already recognize.",
      },
      {
        title: "Judge value before size",
        body: "Remove accidental recordings, outdated references, and clips that no longer matter. Keep irreplaceable moments even when they occupy significant storage.",
      },
      {
        title: "Confirm and account for recovery storage",
        body: "Inspect all videos marked for deletion before confirming. Your device may keep removed media in Recently Deleted or Trash, so space can remain occupied during the recovery period.",
      },
    ],
    checklist: [
      "Accidental recordings or clips with no useful content",
      "Outdated screen recordings and temporary references",
      "Long takes when a stronger recording already preserves the moment",
      "Irreplaceable clips that deserve a cautious decision",
      "Recently Deleted or Trash storage after final removal",
    ],
    integrationTitle: "Run a video-first storage session with KeepYeet",
    integrationBody: [
      "KeepYeet includes a dedicated video filter, letting you review this high-impact category without sorting every photo first. Swipe right to keep a clip and left to mark it for deletion, using your own context rather than an automatic judgment.",
      "Before deletion, review the marked videos as a group. KeepYeet then shows cleanup progress and storage reclaimed, helping you see whether the video session addressed the original storage goal.",
    ],
    faqs: [
      {
        question: "Why should I review large videos before photos?",
        answer:
          "Videos often use more storage per item, so a smaller number of confident video deletions may have a larger storage impact than a long photo session.",
      },
      {
        question: "Does KeepYeet include a separate video filter?",
        answer:
          "Yes. You can open a video-focused session and make manual keep-or-delete decisions for that category.",
      },
      {
        question: "Why did storage not change immediately after deleting videos?",
        answer:
          "The device may retain deleted videos in Recently Deleted or Trash for recovery. Full storage recovery depends on the photo library's deletion behavior.",
      },
    ],
    relatedSlugs: ["free-up-phone-storage", "review-photos-before-deleting"],
  },
  {
    slug: "private-photo-cleaner",
    keyword: "private photo cleaner",
    eyebrow: "On-device photo review",
    title: "Private Photo Cleaner With On-Device Review | KeepYeet",
    description:
      "Choose a private photo cleaner with on-device review, no required account, controlled deletion, and a clear checkpoint before removal.",
    h1: "Choose a Private Photo Cleaner With On-Device Review",
    intro: [
      "Photo libraries contain personal moments, documents, locations, and everyday context, so privacy questions deserve specific answers. A claim such as private is only useful when it explains how photos are handled, whether an account is required, and who controls the decision to remove an item.",
      "On-device photo review means the library can be sorted and reviewed without sending the photos away for that workflow. It should not be confused with a promise that an app collects no other data. Store privacy disclosures and the current privacy policy remain the right sources for analytics or advertising-related practices.",
    ],
    steps: [
      {
        title: "Separate photo handling from broad privacy claims",
        body: "Look for a direct explanation of where photo review occurs. Then inspect the store privacy label and privacy policy for disclosures outside the photo-cleaning workflow.",
      },
      {
        title: "Check whether an account is required",
        body: "A cleaner can reduce unnecessary setup by letting you begin without creating a personal profile or providing account details.",
      },
      {
        title: "Keep final deletion under your control",
        body: "Use focused filters to narrow the library, then confirm what stays and require a review screen before final removal.",
      },
    ],
    checklist: [
      "A clear statement about on-device photo handling",
      "Current store privacy disclosures and privacy policy",
      "No account required for the cleanup workflow",
      "Control over every final deletion",
      "A final review before selected media is removed",
    ],
    integrationTitle: "What on-device review means in KeepYeet",
    integrationBody: [
      "KeepYeet's photo-sorting and deletion workflow stays on-device. No account is required, and right-to-keep and left-to-delete review keeps final removal under your control.",
      "The deletion review provides another deliberate checkpoint. On-device photo handling is not presented as a no-data-collection claim; the current store privacy label and privacy policy should be used for the app's broader disclosures.",
    ],
    faqs: [
      {
        question: "Do my photos leave the device during KeepYeet cleanup?",
        answer:
          "KeepYeet's verified photo-sorting and deletion workflow operates on-device.",
      },
      {
        question: "Does on-device photo review mean no data is collected?",
        answer:
          "No. It describes how photos are handled during cleanup. Analytics and advertising disclosures are separate and should be checked in the current store privacy label and privacy policy.",
      },
      {
        question: "Do I need an account to clean photos with KeepYeet?",
        answer:
          "No. The photo-cleaning workflow does not require you to create an account.",
      },
    ],
    relatedSlugs: ["photo-cleaner-app", "review-photos-before-deleting"],
  },
  {
    slug: "review-photos-before-deleting",
    keyword: "review photos before deleting",
    eyebrow: "Review-first cleanup",
    title: "Review Photos Before Deleting Them | KeepYeet",
    description:
      "Review photos before deleting them with a two-stage workflow: make focused choices first, then inspect every marked item before final removal.",
    h1: "Review Photos Before Deleting Them From Your Library",
    intro: [
      "Photo cleanup becomes risky when selection and deletion happen as one rushed action. A review-first process separates those moments. You can make quick decisions while moving through a focused batch, then switch into a slower verification mode once all proposed deletions are visible together.",
      "This second pass catches accidental gestures, reveals when a sequence needs more context, and gives uncertain items another chance. It is especially valuable for older months, event albums, videos, and screenshots that contain records you may still need.",
    ],
    steps: [
      {
        title: "Make provisional decisions",
        body: "Work through one category and mark items you believe can be removed. Treat those choices as a draft rather than a finished deletion.",
      },
      {
        title: "Change the review question",
        body: "On the second pass, ask whether losing each item would matter. Check faces, documents, event context, and nearby media before keeping it on the deletion list.",
      },
      {
        title: "Confirm only confident removals",
        body: "Return uncertain items to the library and delete only the selections that remain clear. Afterward, understand the recovery period supported by your device's photo library.",
      },
    ],
    checklist: [
      "Accidental swipes or taps made during the first pass",
      "Photos containing people or moments not visible at thumbnail size",
      "Screenshots with receipts, addresses, or active information",
      "Videos that need playback before a final decision",
      "Items that should remain when the answer is uncertain",
    ],
    integrationTitle: "KeepYeet separates swiping from final deletion",
    integrationBody: [
      "KeepYeet lets you move quickly through a focused month, screenshot, video, album, or Recents session. Swipe right to keep and left to mark for deletion, knowing the left-swipe choices still have a review stage ahead of them.",
      "At the end, inspect the complete set before confirming removal. Recovery depends on the active photo library and backup state, but the in-app review is the best point to catch a mistake early.",
    ],
    faqs: [
      {
        question: "Why should I review photos before deleting them?",
        answer:
          "A second pass catches accidental choices and lets you judge proposed deletions together, with more attention than the initial cleanup flow.",
      },
      {
        question: "Does KeepYeet delete a photo as soon as I swipe left?",
        answer:
          "No. The left swipe marks the item for deletion, and the review step comes before final removal.",
      },
      {
        question: "Can I recover a photo after confirming deletion?",
        answer:
          "Recovery depends on the device's photo library and backup state. Apple Photos documents 30 days in Recently Deleted; Google Photos documents 60 days for backed-up items and 30 days for unbacked items.",
      },
    ],
    relatedSlugs: ["swipe-delete-photos", "delete-unwanted-photos"],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export const guidePublishedAt = "2026-07-15";
export const guideUpdatedAt = "2026-07-15";

const appleDeleteSource: GuideSource = {
  title: "Apple Support: Delete photos on iPhone or iPad",
  url: "https://support.apple.com/104967",
  note: "Apple explains deletion, Recently Deleted, recovery, and the 30-day retention period.",
};

const googleDeleteSource: GuideSource = {
  title: "Google Photos Help: Delete photos and videos",
  url: "https://support.google.com/photos/answer/6128858?hl=en",
  note: "Google explains Trash behavior and how retention differs by backup state.",
};

const appleStorageSource: GuideSource = {
  title: "Apple Support: Manage photo and video storage",
  url: "https://support.apple.com/105061",
  note: "Apple explains how photos and videos use device storage and the available storage-management options.",
};

const googleStorageSource: GuideSource = {
  title: "Google Photos Help: Manage storage",
  url: "https://support.google.com/photos/answer/9284827?hl=en",
  note: "Google explains photo and video storage, cleanup categories, and storage estimates.",
};

const appleAlbumsSource: GuideSource = {
  title: "Apple Support: Create and work with photo albums",
  url: "https://support.apple.com/guide/iphone/create-and-work-with-photo-albums-iphc0fc668ab/ios",
  note: "Apple documents how albums organize photos and videos without removing them from the library.",
};

const appStoreSource: GuideSource = {
  title: "KeepYeet on the Apple App Store",
  url: "https://apps.apple.com/app/id6759491629",
  note: "The public listing is the source for KeepYeet's current product behavior, compatibility, and privacy disclosures.",
};

const guideSources: Record<string, GuideSource[]> = {
  "swipe-delete-photos": [appStoreSource, appleDeleteSource, googleDeleteSource],
  "clean-up-camera-roll": [appStoreSource, appleStorageSource, googleStorageSource],
  "camera-roll-cleaner": [appStoreSource, appleStorageSource, googleStorageSource],
  "photo-cleaner-app": [appStoreSource, appleDeleteSource, googleDeleteSource],
  "free-up-phone-storage": [appleStorageSource, googleStorageSource],
  "delete-unwanted-photos": [appleDeleteSource, googleDeleteSource],
  "declutter-photo-library": [appleAlbumsSource, appleStorageSource, googleStorageSource],
  "organize-photos-by-month": [appStoreSource, appleAlbumsSource],
  "delete-screenshots": [appStoreSource, appleStorageSource, googleStorageSource],
  "delete-large-videos-to-free-space": [appStoreSource, appleStorageSource, googleStorageSource],
  "private-photo-cleaner": [appStoreSource],
  "review-photos-before-deleting": [appStoreSource, appleDeleteSource, googleDeleteSource],
};

const guideScreenshotIndexes: Record<string, number> = {
  "swipe-delete-photos": 2,
  "clean-up-camera-roll": 0,
  "camera-roll-cleaner": 1,
  "photo-cleaner-app": 0,
  "free-up-phone-storage": 1,
  "delete-unwanted-photos": 3,
  "declutter-photo-library": 0,
  "organize-photos-by-month": 1,
  "delete-screenshots": 1,
  "delete-large-videos-to-free-space": 1,
  "private-photo-cleaner": 4,
  "review-photos-before-deleting": 4,
};

export function getGuideSources(slug: string): GuideSource[] {
  return guideSources[slug] ?? [appStoreSource];
}

export function getGuideScreenshotIndex(slug: string): number {
  return guideScreenshotIndexes[slug] ?? 0;
}
