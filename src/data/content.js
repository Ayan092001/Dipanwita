export const REASONS = [
  { num: "01", text: "Your smile is the only sunrise I'll ever need" },
  { num: "02", text: "The way you laugh — soft, real, and entirely magic" },
  { num: "03", text: "Your heart is kinder than you even know but when u r not in anger mood" },
  { num: "04", text: "You make ordinary moments feel like poetry...Just Joking...(No I am serious, Just ingnore the joking part, U r actually that)" },
];

export const TIMELINE = [
  {
    date: "The beginning",
    event: "The day I first saw you — my heart quietly knew.",
  },
  {
    date: "The moment I knew",
    event:
      "When you laughed and I thought — oh, there you are. The one I've been looking for.",
  },
  {
    date: "Every day since",
    event:
      "Falling a little more in love with you than the day before. Softly, completely.",
  },
  {
    date: "Now & always",
    event: "Here. Yours. With so much more love still to give.",
  },
];

export const LETTER = `প্রিয়তমা,

তোকে নিয়ে লিখতে বসলে মনে হয় শব্দগুলো যেন আমার অনুভূতির কাছে খুব ছোট হয়ে যায়। তবুও আজ আমার মনের কিছু কথা তোকে বলতে চাই।

তুই আমার দিনগুলোকে আরও সুন্দর করে তুলেছো। তোর উপস্থিতি আমাকে ভালো অনুভব করায়, আর তোর সাথে কাটানো ছোট ছোট মুহূর্তগুলো আমার কাছে অনেক Precious।

তুই জানিস, জীবনে অনেক মানুষ আসে যায়, কিন্তু কিছু মানুষ থাকে যারা পুরো জীবনটাকেই বদলে দেয়। তুই আমার জন্য ঠিক তেমনই একজন। তোর ভালোবাসা, যত্ন, বিশ্বাস আর পাশে থাকার অনুভূতি আমাকে প্রতিদিন আরও শক্তিশালী করে তোলে।

তোর সাথে কাটানো প্রতিটি মুহূর্ত আমার কাছে অমূল্য। তোর সাথে কথা বলা, হাসাহাসি করা, ছোট ছোট ঝগড়া করা, আবার মান-অভিমান ভেঙে এক হয়ে যাওয়া সবকিছুই আমার জীবনের একটা সুন্দর স্মৃতি।

ধন্যবাদ আমার জীবনে আসার জন্য, আমাকে এতটা ভালোবাসার জন্য, আর আমার জীবনের সবচেয়ে সুন্দর মানুষ হওয়ার জন্য।

আমি তোকে আজ যতটা ভালোবাসি, আগামীকাল তার চেয়েও বেশি ভালোবাসব। আর এভাবেই প্রতিদিন আমার ভালোবাসা তোর জন্য আরও গভীর হতে থাকবে।

চিরদিন তোমার,

❤️ তোর ভালোবাসার মানুষ
`;

export const PETALS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 8,
  duration: Math.random() * 6 + 7,
  size: Math.random() * 12 + 8,
  rotate: Math.random() * 360,
}));
