export interface FaqQuestion {
  question: string;
  answer: string;
}

export interface Faq {
  topic: string;
  questions: FaqQuestion[];
}

export interface FaqAccordionProps {
  faqs: Faq[];
}
