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
  allowsCustomQuantity?: boolean;
  quantityLabel?: string;
  // Metadata for Services page layout
  gridSpan?: 'small' | 'medium' | 'large';
  variant?: 'featured' | 'secondary' | 'video' | 'chat' | 'note' | 'horizontal';
  order?: number;
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
    gridSpan: 'large',
    variant: 'featured',
    order: 1,
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
    gridSpan: 'small',
    variant: 'note',
    order: 5,
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
  {
    id: 'crm',
    name: 'CRM Ethique',
    shortDescription: 'Gestion de la relation membre',
    description: 'Suivez vos interactions et gérez votre base de membres sans pistage publicitaire.',
    price: 4.5,
    icon: 'groups',
    isAddon: true,
    allowsCustomQuantity: true,
    quantityLabel: 'Licences',
    color: 'text-secondary',
  },
];

export const FEATURED_SERVICES: Product[] = [
  {
    id: 'mastodon',
    name: 'Mastodon',
    shortDescription: 'Le réseau social décentralisé',
    description: 'Le réseau social décentralisé. Connectez-vous avec des millions de personnes sans algorithmes contrôlant votre flux.',
    price: 0,
    icon: 'forum',
    isAddon: false,
    link: '#',
    color: 'secondary',
    gridSpan: 'small',
    variant: 'secondary',
    order: 2,
  },
  {
    id: 'peertube',
    name: 'PeerTube',
    shortDescription: 'Hébergement vidéo éthique',
    description: 'Hébergez et diffusez vos vidéos de manière éthique. La technologie pair-à-pair réduit la charge serveur et l\'autorité centrale.',
    price: 0,
    icon: 'play_circle',
    isAddon: false,
    link: '#',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkHIARu0NQ6-OSeCIlrVjTqqoSgVfcXo0TuCUxw8uMMiwXGEFCEe2k3SZMUF6RCxy7LvzwEnk5AD8rjjjV9ulzbMZXEZg_t8ZtMIinysMJfj7P3-chYDj6-t_KUUHt_jR-D9IBYvS7pCmeLQXkNe7TIDxOl5PEJCfLVFC1zSXs4oYNM7Glw1piLDwY_23YVwk3eSZxUoyFN5njdKmXubr8lvSNPK9Dwsf9zIJR9zPATB44HCfY_nY1O-Ft1mE5Jx5i51-slxxLgSo',
    gridSpan: 'small',
    variant: 'video',
    order: 3,
  },
  {
    id: 'matrix',
    name: 'Matrix Chat',
    shortDescription: 'Communication sécurisée',
    description: 'Communication sécurisée and décentralisée. Discutez avec n\'importe qui sur n\'importe quel serveur avec un chiffrement robuste.',
    price: 0,
    icon: 'chat_bubble',
    isAddon: false,
    tags: ['Passerelles disponibles'],
    gridSpan: 'small',
    variant: 'chat',
    order: 4,
  },
  {
    id: 'gitea',
    name: 'Gitea Forge',
    shortDescription: 'Hébergement Git léger',
    description: 'Un service Git auto-hébergé simple. Léger et incroyablement rapide pour votre hébergement de code éthique.',
    price: 0,
    icon: 'code',
    isAddon: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf-r-m0IO-qnsc8TKZ8FM_e-RplsqgXD0RtyiB0E42x9YJ5mfvxo6T4PBrA0L6ZesnO5RqVYLOv4LEYtOd3BtysOMuW3ALJliluJDFmfxYKzAVHTppdQiSzCwPqCAr5pUpGjPeXSb1zTWI4J1b5aGMv0XcC6w-cziffSABSN3epg2XPxy7bz84LS380mdrXfQfthww1QCPctEpnVi7teURnOqp1ScGENUta4wOQiOrk9CLyUe1V0PcC5FMdPDytpFO9G-7kiDByFI',
    gridSpan: 'medium',
    variant: 'horizontal',
    order: 6,
  },
];

export const SERVICES_PAGE_LIST = [
  ...PRODUCTS.filter(p => p.gridSpan),
  ...FEATURED_SERVICES
].sort((a, b) => (a.order || 99) - (b.order || 99));
