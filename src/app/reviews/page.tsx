'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { reviewsData, pharmacyDetails } from '@/lib/data';
import type { Review } from '@/lib/data';
import { Star, MessageCircle, UserCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { useToast } from "@/hooks/use-toast"

export default function ReviewsPage() {
  const [currentReviews, setCurrentReviews] = useState<Review[]>(reviewsData);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [hoverRating, setHoverRating] = useState(0);
  const { toast } = useToast();

  const averageRating = currentReviews.length > 0 
    ? (currentReviews.reduce((acc, review) => acc + review.rating, 0) / currentReviews.length).toFixed(1)
    : "N/A";

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || rating === 0 || !feedback) {
      toast({
        title: "Incomplete Review",
        description: "Please fill in all fields and provide a rating.",
        variant: "destructive",
      })
      return;
    }
    const newReview: Review = {
      id: String(Date.now()), // Simple unique ID
      name,
      rating,
      feedback,
    };
    setCurrentReviews([newReview, ...currentReviews]);
    setName('');
    setRating(0);
    setFeedback('');
    toast({
      title: "Review Submitted!",
      description: "Thank you for your feedback.",
    })
    // Close dialog - requires DialogClose to be triggered, or manage open state
  };
  
  // Client-side hydration guard for random elements if any were used
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 animate-fade-in">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary animate-slide-in-up">Customer Reviews</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-up [animation-delay:0.2s]">
          Hear what our valued customers have to say about {pharmacyDetails.name}.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 animate-slide-in-up [animation-delay:0.3s]">
          <Star className="w-7 h-7 text-yellow-400 fill-yellow-400" />
          <span className="text-2xl font-semibold">{averageRating}</span>
          <span className="text-muted-foreground">based on {currentReviews.length} reviews</span>
        </div>
      </header>

      <div className="text-center mb-10 animate-slide-in-up [animation-delay:0.4s]">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" variant="default">
              <MessageCircle className="mr-2 h-5 w-5" /> Add Your Review
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[480px]">
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl">Write a Review</DialogTitle>
              <DialogDescription>
                Share your experience with {pharmacyDetails.name}.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmitReview} className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="rating">Rating</Label>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-7 h-7 cursor-pointer ${ (hoverRating || rating) >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    />
                  ))}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="feedback">Feedback</Label>
                <Textarea id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Tell us about your experience..." />
              </div>
              <DialogFooter>
                 <DialogClose asChild>
                    <Button type="submit">Submit Review</Button>
                 </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentReviews.map((review, index) => (
          <Card key={review.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col animate-slide-in-up" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
            <CardHeader>
              <div className="flex items-center mb-2">
                <UserCircle className="w-10 h-10 text-muted-foreground mr-3" />
                <div>
                  <CardTitle className="font-headline text-lg">{review.name}</CardTitle>
                  <div className="flex mt-1">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground italic">&quot;{review.feedback}&quot;</p>
            </CardContent>
          </Card>
        ))}
        {currentReviews.length === 0 && isClient && (
          <p className="md:col-span-2 lg:col-span-3 text-center text-muted-foreground py-8">
            No reviews yet. Be the first to share your experience!
          </p>
        )}
      </section>
    </div>
  );
}
