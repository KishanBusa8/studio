"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { generateProjectSummary, type GenerateProjectSummaryInput } from '@/ai/flows/generate-project-summary';
import { useToast } from "@/hooks/use-toast";
import { Wand2, Loader2 } from 'lucide-react';

const formSchema = z.object({
  projectDescription: z.string().min(10, { message: "Project description must be at least 10 characters." }),
  technologiesUsed: z.string().min(1, { message: "Please list at least one technology." }),
});

type FormData = z.infer<typeof formSchema>;

export default function AiSummaryTool() {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectDescription: "",
      technologiesUsed: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setSummary(null);
    try {
      const result = await generateProjectSummary(data as GenerateProjectSummaryInput);
      setSummary(result.summary);
      toast({
        title: "Summary Generated!",
        description: "Your AI-powered project summary is ready.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error generating summary:", error);
      toast({
        title: "Error",
        description: "Failed to generate summary. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="py-16 md:py-24 animate-section-slide-up" style={{ animationDelay: '0.6s' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">AI Project Summarizer</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Need help crafting the perfect project summary? Describe your project and list the technologies, and let AI assist you!
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Project Details</CardTitle>
              <CardDescription>Enter your project information below.</CardDescription>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="projectDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., A web application that helps users track their daily tasks..." {...field} rows={5} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="technologiesUsed"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Technologies Used (comma-separated)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., React, Node.js, MongoDB" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90">
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Wand2 className="mr-2 h-4 w-4" />
                    )}
                    Generate Summary
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>

          <Card className="shadow-lg min-h-[300px] bg-secondary/20">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Generated Summary</CardTitle>
              <CardDescription>Your AI-generated summary will appear here.</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading && (
                <div className="flex items-center justify-center h-32">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              )}
              {summary && !isLoading && (
                <div className="p-4 border border-dashed border-primary/50 rounded-md bg-background">
                  <p className="text-foreground/90 whitespace-pre-line">{summary}</p>
                </div>
              )}
              {!summary && !isLoading && (
                <p className="text-muted-foreground text-center py-8">Your summary will be shown here once generated.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
