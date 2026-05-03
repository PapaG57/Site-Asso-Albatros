export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Lancement de notre première campagne de recensement",
    excerpt: "Nous avons débuté l'identification des zones d'ombre dans les quartiers périphériques de Douala.",
    content: "Le recensement est la pierre angulaire de notre action. Sans données précises sur les personnes en situation d'exclusion, l'aide ne peut être efficace. Nos équipes de bénévoles parcourent les zones les plus vulnérables pour écouter et identifier les besoins urgents...",
    date: "15 Mai 2026",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Distribution de kits scolaires pour la rentrée",
    excerpt: "Soutenir l'éducation des enfants issus de familles précaires est une priorité absolue.",
    content: "Grâce à vos dons, nous avons pu distribuer plus de 200 kits scolaires complets. L'éducation est le premier rempart contre la fatalité de l'exclusion sociale. Chaque enfant mérite d'avoir les outils nécessaires pour réussir son parcours scolaire...",
    date: "28 Avril 2026",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
  }
];
