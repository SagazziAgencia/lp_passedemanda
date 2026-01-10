'use server';

/**
 * @fileOverview An AI skill matching tool that analyzes project requirements and suggests professionals with the best-matched skills and experience.
 *
 * - aiSkillMatch - A function that takes project requirements as input and returns a list of suggested skills.
 * - AiSkillMatchInput - The input type for the aiSkillMatch function.
 * - AiSkillMatchOutput - The return type for the aiSkillMatch function, containing an array of skills.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiSkillMatchInputSchema = z.object({
  projectRequirements: z
    .string()
    .describe('A detailed description of the project requirements.'),
});
export type AiSkillMatchInput = z.infer<typeof AiSkillMatchInputSchema>;

const AiSkillMatchOutputSchema = z.array(z.string()).describe('A list of suggested skills.');
export type AiSkillMatchOutput = z.infer<typeof AiSkillMatchOutputSchema>;

export async function aiSkillMatch(input: AiSkillMatchInput): Promise<AiSkillMatchOutput> {
  return aiSkillMatchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSkillMatchPrompt',
  input: {schema: AiSkillMatchInputSchema},
  output: {schema: AiSkillMatchOutputSchema},
  prompt: `You are an AI assistant designed to analyze project requirements and suggest the most relevant skills needed for the project.

  Based on the following project requirements, generate a list of skills that would be best suited for a professional to have to complete the project successfully.  Only list the skills, and separate them with commas.

Project Requirements: {{{projectRequirements}}}
  `,
});

const aiSkillMatchFlow = ai.defineFlow(
  {
    name: 'aiSkillMatchFlow',
    inputSchema: AiSkillMatchInputSchema,
    outputSchema: AiSkillMatchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
