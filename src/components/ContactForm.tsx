'use client';
import { useState, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { smartReply, type SmartReplyInput } from '@/ai/flows/smart-reply';
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [suggestedReplies, setSuggestedReplies] = useState<string[]>([]);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const currentMessage = form.watch("message");

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (currentMessage && currentMessage.length > 15) { // Trigger after a certain length
        setIsSuggesting(true);
        try {
          const input: SmartReplyInput = { customerInquiry: currentMessage };
          const result = await smartReply(input);
          setSuggestedReplies(result.suggestedReplies || []);
        } catch (error) {
          console.error("Error fetching smart replies:", error);
          setSuggestedReplies([]);
        } finally {
          setIsSuggesting(false);
        }
      } else {
        setSuggestedReplies([]);
      }
    }, 1000); // Debounce time

    return () => clearTimeout(delayDebounceFn);
  }, [currentMessage]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Simulate form submission
    console.log("Form data:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    form.reset();
    setSuggestedReplies([]);
  };

  const handleSuggestionClick = (reply: string) => {
    form.setValue("message", reply);
    setSuggestedReplies([]);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="How can we help you today?" className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {isSuggesting && (
          <div className="flex items-center text-sm text-muted-foreground">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating smart replies...
          </div>
        )}

        {suggestedReplies.length > 0 && !isSuggesting && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Suggested Replies:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedReplies.map((reply, index) => (
                <Button
                  key={index}
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleSuggestionClick(reply)}
                  className="text-xs"
                >
                  {reply}
                </Button>
              ))}
            </div>
          </div>
        )}

        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
             <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
          ) : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
