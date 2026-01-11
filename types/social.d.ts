type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export interface SocialItem {
  name: string;
  link: string;
  icon: IconComponent;
}
