
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { pharmacyDetails } from '@/lib/data';
import { CheckCircle, Heart, BadgeCheck, Users } from 'lucide-react';

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
          <div className="space-y-6">
            <Image
              src="/about1.png"
              alt={`${pharmacyDetails.name} Interior`}
              width={600}
              height={400}
              quality={100}
              className="rounded-lg object-cover shadow-md w-full h-64"
            />
            <Image
              src="/about2.png"
              alt={`${pharmacyDetails.name} Exterior`}
              width={600}
              height={400}
              quality={100}
              className="rounded-lg object-cover shadow-md w-full h-64"
            />
          </div>
        </div>
      </section>

      <section className="mb-12 md:mb-16 animate-slide-in-up [animation-delay:0.5s]">
        <h2 className="font-headline text-3xl md:text-4xl font-semibold text-center mb-10">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center animate-slide-in-up [animation-delay:0.5s]">
            <CardHeader>
              <Heart className="w-12 h-12 text-primary mx-auto mb-2" />
              <CardTitle className="font-headline text-xl">Patient-Centric Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Your health and well-being are our top priorities. We provide personalized care and attention to every individual.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center animate-slide-in-up [animation-delay:0.6s]">
            <CardHeader>
              <BadgeCheck className="w-12 h-12 text-primary mx-auto mb-2" />
              <CardTitle className="font-headline text-xl">Trusted Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our experienced pharmacists and healthcare professionals offer reliable advice and professional service you can depend on.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center animate-slide-in-up [animation-delay:0.7s]">
            <CardHeader>
              <Users className="w-12 h-12 text-primary mx-auto mb-2" />
              <CardTitle className="font-headline text-xl">Community Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We are dedicated to serving our local community, fostering a healthy neighborhood, and being an accessible healthcare partner.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center animate-slide-in-up [animation-delay:0.8s]">
        <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-4">Visit Us Today</h2>
        <p className="text-md text-muted-foreground mb-2">{pharmacyDetails.address}</p>
        <p className="text-md text-muted-foreground">Call us at: {pharmacyDetails.phoneNumbers.join(' / ')}</p>
      </section>
    </div>
  );
}
