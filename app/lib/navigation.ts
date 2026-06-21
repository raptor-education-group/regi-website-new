export type NavigationItem = {
  label: string;
  href: string;
};

export type NavigationGroup = {
  label: string;
  href: string;
  activePaths: string[];
  items: NavigationItem[];
};

export const navigationGroups: NavigationGroup[] = [
  {
    label: "About",
    href: "/about",
    activePaths: ["/about", "/staff", "/board", "/careers"],
    items: [
      { label: "About REGI", href: "/about" },
      { label: "Meet the staff", href: "/staff" },
      { label: "Our board", href: "/board" },
      { label: "Careers & internships", href: "/careers" },
    ],
  },
  {
    label: "Bird Assistance",
    href: "/rescue",
    activePaths: ["/rescue"],
    items: [
      { label: "Injured bird help", href: "/rescue" },
      { label: "Handling injured raptors", href: "/rescue#safe-recovery" },
      { label: "Injured songbird help", href: "/rescue/songbirds" },
      { label: "Found a baby bird?", href: "/rescue/baby-birds" },
    ],
  },
  {
    label: "Education",
    href: "/education",
    activePaths: ["/education", "/ambassadors", "/newsletter"],
    items: [
      { label: "Education at REGI", href: "/education" },
      { label: "Raptor programs", href: "/education#programs" },
      { label: "Avian ambassadors", href: "/ambassadors" },
      { label: "Taking Flight newsletter", href: "/newsletter" },
    ],
  },
  {
    label: "Visit REGI",
    href: "/visit",
    activePaths: ["/visit", "/summer-camp"],
    items: [
      { label: "Plan your visit", href: "/visit" },
      { label: "Seasonal Raptor Tours", href: "/visit#raptor-tours" },
      { label: "Owl-O-Ween Tours", href: "/visit#owl-o-ween" },
      { label: "Raptor Adventures Summer Camp", href: "/summer-camp" },
    ],
  },
  {
    label: "Make a Difference",
    href: "/make-a-difference",
    activePaths: ["/make-a-difference", "/resources", "/protect-wildlife"],
    items: [
      { label: "Ways to make a difference", href: "/make-a-difference" },
      { label: "Apply to volunteer", href: "/make-a-difference#volunteer" },
      { label: "Clinical & education internships", href: "/careers#internships" },
      { label: "Going lead free", href: "/make-a-difference#lead-free" },
      { label: "Wildlife resources", href: "/resources" },
    ],
  },
  {
    label: "Support",
    href: "/support",
    activePaths: ["/support", "/adopt-a-bird", "/giving-tuesday", "/shop", "/cart"],
    items: [
      { label: "Donate", href: "/support" },
      { label: "Adopt a bird", href: "/adopt-a-bird" },
      { label: "GivingTuesday", href: "/giving-tuesday" },
      { label: "Gift shop", href: "/shop" },
    ],
  },
];
