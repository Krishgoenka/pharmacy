
import Image from 'next/image';
import { pharmacyDetails } from '@/lib/data';
import { ContactForm } from '@/components/ContactForm';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageSquare as WhatsAppIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 animate-fade-in">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary animate-slide-in-up">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-up [animation-delay:0.2s]">
          We&apos;re here to help. Reach out to us with any questions or for support.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <section className="animate-slide-in-up [animation-delay:0.3s]">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl md:text-3xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </section>

        {/* Contact Info & Map Section */}
        <section className="space-y-8 animate-slide-in-up [animation-delay:0.4s]">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl md:text-2xl">Our Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-md">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>{pharmacyDetails.phoneNumbers.join(' / ')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>{pharmacyDetails.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span>{pharmacyDetails.address}</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-xl md:text-2xl">Find Us Here</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden border">
                <Image
                    src="https://placehold.co/600x400.png"
                    alt={`${pharmacyDetails.name} Location Map`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    data-ai-hint="map location kolkata"
                />
                </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-xl md:text-2xl">Connect With Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-3">
                <Button variant="outline" size="icon" asChild>
                  <a href={pharmacyDetails.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <WhatsAppIcon className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href={pharmacyDetails.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href={pharmacyDetails.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

        </section>
      </div>
    </div>
  );
}
