export type Section =
  | 'hero-section'
  | 'about-section'
  | 'experience-section'
  | 'major-projects-section'
  | 'minor-projects-section'
  | 'github-footprints-section'
  | 'contact-section';

export interface NavItem {
  title: string;
  scrollTo: Section;
}
