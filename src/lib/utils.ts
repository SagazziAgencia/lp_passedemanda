import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { SKILL_TO_CATEGORY } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get category for a professional based on their skills
 */
export const getProfessionalCategory = (skills: string[]): string => {
    for (const skill of skills) {
        if (SKILL_TO_CATEGORY[skill as keyof typeof SKILL_TO_CATEGORY]) {
            return SKILL_TO_CATEGORY[skill as keyof typeof SKILL_TO_CATEGORY];
        }
    }
    return 'all';
};
