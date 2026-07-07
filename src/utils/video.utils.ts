export const isEmbedUrl = (url: string): boolean =>
  /embed|youtube\.com|youtu\.be|vimeo\.com|dailymotion\.com/i.test(url);
