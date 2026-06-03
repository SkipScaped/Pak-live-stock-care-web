export interface WaitlistEntry {
  email: string;
  timestamp: string;
  position: number;
  role: 'farmer' | 'agri-entrepreneur' | 'veterinarian' | 'developer' | 'other';
  location: string;
}

export interface AppStats {
  totalWaitlistCount: number;
  githubStars: number;
  githubForks: number;
  githubContributors: number;
}

export interface LanguagePreviewText {
  id: string;
  english: string;
  urdu: string;
  labelEn: string;
  labelUr: string;
}
