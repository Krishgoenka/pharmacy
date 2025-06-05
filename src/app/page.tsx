
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { pharmacyDetails, services, dealItems, reviewsData } from '@/lib/data';
import { Phone, Mail, MapPin, Clock, MessageSquare, CalendarDays, ShoppingCart, Pill, Truck, Microscope, Stethoscope, Star, Tag } from 'lucide-react';
import { ConsultationBookingSection } from '@/components/sections/ConsultationBookingSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh animate-fade-in">
      {/* Hero Section */}
      <section className="w-full">
        <div className="relative w-full h-[50vh] md:h-[60vh] bg-muted">
          <Image
            src="/hero-banner.jpg"
            alt={`${pharmacyDetails.name} Banner`}
            fill
            style={{ objectFit: 'cover' }}
            priority
            sizes="100vw"
            data-ai-hint="pharmacy interior medicines"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary animate-slide-in-up [animation-delay:0.2s]">
            {pharmacyDetails.name}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-up [animation-delay:0.4s]">
            {pharmacyDetails.tagline}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up [animation-delay:0.6s]">
            <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href={`tel:${pharmacyDetails.phoneNumbers[0]}`}>Call Now</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/services#doctors">Book a Test/Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-up [animation-delay:0.1s]">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2"><MapPin className="text-primary"/> Contact & Location</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="flex items-center gap-2"><Phone size={16} /> {pharmacyDetails.phoneNumbers.join(', ')}</p>
                <p className="flex items-center gap-2"><Mail size={16} /> {pharmacyDetails.email}</p>
                <p className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> {pharmacyDetails.address}</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-up [animation-delay:0.2s]">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2"><Clock className="text-primary"/> Operating Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>{pharmacyDetails.fullOperatingHours}</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-up [animation-delay:0.3s]">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2"><ShoppingCart className="text-primary"/> Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-2">
                <Button variant="default" className="flex-1" asChild><a href={`tel:${pharmacyDetails.phoneNumbers[0]}`}>Call Now</a></Button>
                <Button variant="outline" className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                  <a href={pharmacyDetails.social.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <MessageSquare size={16} /> WhatsApp Us
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Highlights Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-center mb-10 animate-slide-in-up">Our Core Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0,3).map((service, index) => (
              <Card key={service.id} className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-up" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
                <service.Icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-headline text-xl mb-2">{service.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-4">{service.description}</CardDescription>
                <Button variant="link" asChild><Link href="/services">Learn More</Link></Button>
              </Card>
            ))}
          </div>
           <div className="text-center mt-8 animate-slide-in-up [animation-delay:0.4s]">
             <Button asChild variant="default"><Link href="/services">View All Services</Link></Button>
           </div>
        </div>
      </section>

      {/* Best Deals Call to Action */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center animate-slide-in-up [animation-delay:0.2s]">
          <Button size="lg" variant="secondary" asChild>
            <Link href="#best-deals" className="flex items-center gap-2">
              <Tag className="h-5 w-5"/> View Our Best Deals
            </Link>
          </Button>
        </div>
      </section>


      {/* Best Deals Section */}
      <section id="best-deals" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-center mb-10 animate-slide-in-up">Best Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dealItems.map((deal, index) => (
              <Card key={deal.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-up" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
                <Image src={deal.image} alt={deal.name} width={300} height={200} className="w-full h-48 object-cover" data-ai-hint={deal.dataAiHint} />
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{deal.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold">{deal.discount}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{deal.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full">Claim Deal</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Consultation Booking Section */}
      <ConsultationBookingSection />

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-center mb-10 animate-slide-in-up">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewsData.slice(0,3).map((review, index) => (
              <Card key={review.id} className="shadow-lg animate-slide-in-up" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-headline text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">&quot;{review.feedback}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 animate-slide-in-up [animation-delay:0.4s]">
            <Button asChild variant="outline"><Link href="/reviews">Read More Reviews</Link></Button>
          </div>
        </div>
      </section>

      {/* Contact Info Section on Homepage */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-center mb-10 animate-slide-in-up">Get In Touch</h2>
          <Card className="max-w-3xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-up [animation-delay:0.2s]">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Contact Information</CardTitle>
              <CardDescription>We're here to help. Reach out to us for any inquiries.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-md">{pharmacyDetails.phoneNumbers.join(' / ')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-md">{pharmacyDetails.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span className="text-md">{pharmacyDetails.address}</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild className="w-full sm:w-auto">
                <Link href="/contact">
                  Send a Message
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(pharmacyDetails.address)}`} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

    </div>
  );
}
