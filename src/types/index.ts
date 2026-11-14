export interface SupportRequest {
  id?: string;
  name: string;
  isPseudonym: boolean;
  contactMethod: 'whatsapp' | 'phone' | 'email' | 'in_person';
  contactValue: string;
  safeTime: 'morning' | 'afternoon' | 'evening' | 'whatsapp_first';
  supportType: 'heart_healing' | 'safe_circle' | 'life_restoration' | 'spiritual_guidance' | 'just_talk';
  message: string;
  consentConfidential: boolean;
  submittedAt?: string;
}

export interface FocusPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  keyElements: string[];
  launchRoadmap: string;
  iconName: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  quote: string;
}
