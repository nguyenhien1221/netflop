export interface IMovie {
  id: number;
  title?: string;
  description?: string;
  thumbnailUrl?: string;
  videoUrl?: string;
  isPremium?: boolean;
  price?: number | null;
  currency?: string;
  category?: string;
  hasPurchased?: boolean;
}
