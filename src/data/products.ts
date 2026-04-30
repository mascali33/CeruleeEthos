export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  icon: string;
  isAddon: boolean;
  isBase?: boolean;
  tags?: string[];
  color?: string;
  link?: string;
  image?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'mail',
    name: 'Service Mail',
    shortDescription: 'Email souverain avec domaine personnalisé',
    description: 'Respect total de la vie privée avec chiffrement de bout en bout.',
    price: 5.0,
    icon: 'mail',
    isAddon: false,
    isBase: true,
    color: 'text-primary',
  },
  {
    id: 'cloud',
    name: 'Nextcloud',
    shortDescription: '2To de stockage sécurisé distribué',
    description: 'Votre espace privé pour vos fichiers, calendriers et documents collaboratifs. Synchronisez tous vos appareils sans surveillance.',
    price: 2.5,
    icon: 'cloud',
    isAddon: true,
    tags: ['Collaboratif', 'Stockage'],
    color: 'text-primary',
  },
  {
    id: 'notes',
    name: 'Notes & Collaboratif',
    shortDescription: 'Édition markdown en temps réel',
    description: 'Édition de texte collaborative en temps réel. Rapide, léger, et parfait pour les comptes-rendus ou le remue-méninges.',
    price: 1.2,
    icon: 'edit_note',
    isAddon: true,
    tags: ['Collaboratif'],
    color: 'text-secondary',
  },
  {
    id: 'budget',
    name: 'Gestion Budgétaire',
    shortDescription: 'Finances collectives intégrées',
    description: 'Outils financiers éthiques pour la gestion de vos budgets collectifs.',
    price: 3.0,
    icon: 'account_balance_wallet',
    isAddon: true,
    color: 'text-tertiary',
  },
  {
    id: 'password',
    name: 'Gestionnaire de mots de passe',
    shortDescription: 'Organisation partagée Vaultwarden',
    description: 'Coffre-fort sécurisé pour vos identifiants d\'équipe.',
    price: 0.8,
    icon: 'lock',
    isAddon: true,
  },
  {
    id: 'inventory',
    name: 'Gestion d\'inventaire',
    shortDescription: 'Suivi d\'actifs pour coopératives',
    description: 'Gérez vos ressources physiques en toute simplicité.',
    price: 2.2,
    icon: 'inventory_2',
    isAddon: true,
  },
];

// Additional services that are not necessarily priced addons in the current UI
// but are listed on the Services page.
export const FEATURED_SERVICES = [
  {
    id: 'mastodon',
    name: 'Mastodon',
    description: 'Le réseau social décentralisé. Connectez-vous avec des millions de personnes sans algorithmes contrôlant votre flux.',
    icon: 'forum',
    link: '#',
    color: 'secondary',
  },
  {
    id: 'peertube',
    name: 'PeerTube',
    description: 'Hébergez et diffusez vos vidéos de manière éthique. La technologie pair-à-pair réduit la charge serveur et l\'autorité centrale.',
    icon: 'play_circle',
    link: '#',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkHIARu0NQ6-OSeCIlrVjTqqoSgVfcXo0TuCUxw8uMMiwXGEFCEe2k3SZMUF6RCxy7LvzwEnk5AD8rjjjV9ulzbMZXEZg_t8ZtMIinysMJfj7P3-chYDj6-t_KUUHt_jR-D9IBYvS7pCmeLQXkNe7TIDxOl5PEJCfLVFC1zSXs4oYNM7Glw1piLDwY_23YVwk3eSZxUoyFN5njdKmXubr8lvSNPK9Dwsf9zIJR9zPATB44HCfY_nY1O-Ft1mE5Jx5i51-slxxLgSo',
  },
  {
    id: 'matrix',
    name: 'Matrix Chat',
    description: 'Communication sécurisée et décentralisée. Discutez avec n\'importe qui sur n\'importe quel serveur avec un chiffrement robuste.',
    icon: 'chat_bubble',
    tags: ['Passerelles disponibles'],
  },
  {
    id: 'gitea',
    name: 'Gitea Forge',
    description: 'Un service Git auto-hébergé simple. Léger et incroyablement rapide pour votre hébergement de code éthique.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf-r-m0IO-qnsc8TKZ8FM_e-RplsqgXD0RtyiB0E42x9YJ5mfvxo6T4PBrA0L6ZesnO5RqVYLOv4LEYtOd3BtysOMuW3ALJliluJDFmfxYKzAVHTppdQiSzCwPqCAr5pUpGjPeXSb1zTWI4J1b5aGMv0XcC6w-cziffSABSN3epg2XPxy7bz84LS380mdrXfQfthww1QCPctEpnVi7teURnOqp1ScGENUta4wOQiOrk9CLyUe1V0PcC5FMdPDytpFO9G-7kiDByFI',
  },
];
