import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { pharmacyDetails, services } from '@/lib/data';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 animate-fade-in">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary animate-slide-in-up">About {pharmacyDetails.name}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-up [animation-delay:0.2s]">
          Dedicated to delivering excellent pharmaceutical services and medical care to our community.
        </p>
      </header>

      <section className="mb-12 md:mb-16 animate-slide-in-up [animation-delay:0.3s]">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl md:text-3xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-md md:text-lg text-foreground leading-relaxed">
              At {pharmacyDetails.name}, we offer a wide variety of medicines, provide medical tests, and have in-house doctors available for consultation. We are committed to your health and well-being, providing personalized care and expert advice. Our goal is to be your trusted partner in health, offering comprehensive services under one roof.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12 md:mb-16 animate-slide-in-up [animation-delay:0.4s]">
        <h2 className="font-headline text-3xl md:text-4xl font-semibold text-center mb-10">Services We Provide</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="font-headline text-xl">Comprehensive Care</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Full spectrum of pharmaceutical services",
                "Home Delivery Option for your convenience",
                "A wide range of diagnostic tests",
                "In-house doctors specializing in various fields",
                "Personalized medication management advice"
              ].map((service, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 gap-6">
             <Image
              src="https://placehold.co/600x400.png"
              alt="Mahindra Pharmacy Interior"
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-md w-full h-64"
              data-ai-hint="pharmacy interior shelves"
            />
            <Image
              src="https://placehold.co/600x400.png"
              alt="Mahindra Pharmacy Exterior"
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-md w-full h-64"
              data-ai-hint="pharmacy exterior building"
            />
          </div>
        </div>
      </section>

      <section className="text-center animate-slide-in-up [animation-delay:0.5s]">
        <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-4">Visit Us Today</h2>
        <p className="text-md text-muted-foreground mb-2">{pharmacyDetails.address}</p>
        <p className="text-md text-muted-foreground">Call us at: {pharmacyDetails.phoneNumbers.join(' / ')}</p>
      </section>
    </div>
  );
}
