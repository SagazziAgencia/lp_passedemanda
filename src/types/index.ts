export type PortfolioItem = {
    title: string;
    description: string;
    image: string;
    link: string;
};

export type Professional = {
    id: string;
    name: string;
    role: string;
    avatar: string;
    skills: string[];
    rating: number;
    satisfaction?: number;
    experience: string;
    contact: string;
    averageResponseTime?: string;
    averageDeliveryTime?: string;
    hourlyRate: number;
    portfolio: PortfolioItem[];
};

export type SkillCategory = {
    id: 'all' | 'development' | 'design' | 'management' | 'marketing';
    label: string;
};
