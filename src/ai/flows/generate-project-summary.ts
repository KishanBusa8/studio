'use server';

/**
 * @fileOverview AI agent that generates personalized project summaries.
 *
 * - generateProjectSummary - A function that generates a project summary.
 * - GenerateProjectSummaryInput - The input type for the generateProjectSummary function.
 * - GenerateProjectSummaryOutput - The return type for the generateProjectSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectSummaryInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The description of the project.'),
  technologiesUsed: z
    .string()
    .describe('The technologies used in the project, comma separated.'),
});
export type GenerateProjectSummaryInput = z.infer<
  typeof GenerateProjectSummaryInputSchema
>;

const GenerateProjectSummaryOutputSchema = z.object({
  summary: z.string().describe('A personalized summary of the project.'),
});
export type GenerateProjectSummaryOutput = z.infer<
  typeof GenerateProjectSummaryOutputSchema
>;

export async function generateProjectSummary(
  input: GenerateProjectSummaryInput
): Promise<GenerateProjectSummaryOutput> {
  return generateProjectSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectSummaryPrompt',
  input: {schema: GenerateProjectSummaryInputSchema},
  output: {schema: GenerateProjectSummaryOutputSchema},
  prompt: `You are an expert at writing compelling project summaries for software developers' portfolios.

  Given the project description and technologies used, generate a personalized and engaging summary of the project.

  Project Description: {{{projectDescription}}}
  Technologies Used: {{{technologiesUsed}}}

  Summary:`,
});

const generateProjectSummaryFlow = ai.defineFlow(
  {
    name: 'generateProjectSummaryFlow',
    inputSchema: GenerateProjectSummaryInputSchema,
    outputSchema: GenerateProjectSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
