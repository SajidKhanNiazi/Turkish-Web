export type NavItem = {
  href: string;
  label: string;
  children?: NavItem[];
};

export const primaryNav: NavItem[] = [];

export const silo1Links: NavItem[] = [
  { 
    href: "/", 
    label: "Yazı Stilleri",
    children: [
      { href: "/kalin-yazi-stili", label: "Kalın Yazı" },
      { href: "/italik-egik-yazi", label: "İtalik Yazı" },
      { href: "/dekoratif-estetik-yazi-tipleri", label: "Estetik Yazı" },
      { href: "/yazi-tipi-degistirme", label: "Yazı Tipi Değiştirme" },
      { href: "/instagram-yazi-stili", label: "Instagram Yazı" },
      { href: "/whatsapp-yazi-stili", label: "WhatsApp Yazı" }
    ]
  }
];

export const silo2Links: NavItem[] = [
  { 
    href: "/sekilli-yazi", 
    label: "Şekilli Yazı",
    children: [
      { href: "/sekilli-yazi/sekilli-harfler", label: "Şekilli Harfler" },
      { href: "/sekilli-yazi/sekilli-isim-yazma", label: "Şekilli İsim Yazma" },
      { href: "/sekilli-yazi/instagram-sekilli-yazi", label: "Instagram Şekilli" },
      { href: "/sekilli-yazi/sekilli-emoji-yazi", label: "Şekilli Emoji Yazı" }
    ]
  }
];

export const silo3Links: NavItem[] = [
  { 
    href: "/sekilli-nick-yazma", 
    label: "Nick Yazma",
    children: [
      { href: "/sekilli-nick-yazma/havali-nick-yazma", label: "Havalı Nick Yazma" },
      { href: "/sekilli-nick-yazma/kalin-ozel-stilli-nickler", label: "Kalın & Özel Nickler" },
      { href: "/sekilli-nick-yazma/pubg-sekilli-nick", label: "PUBG Şekilli Nick" },
      { href: "/sekilli-nick-yazma/free-fire-nickleri", label: "Free Fire Nickleri" }
    ]
  }
];
