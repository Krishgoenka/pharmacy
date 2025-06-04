'use client';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services, pharmacyDetails } from '@/lib/data';
import type { ServiceInfo } from '@/lib/data';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { ChevronRight } from 'lucide-react';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceInfo | null>(null);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 animate-fade-in">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary animate-slide-in-up">Our Services</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-up [animation-delay:0.2s]">
          Comprehensive healthcare solutions tailored to your needs at {pharmacyDetails.name}.
        </p>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Dialog key={service.id} onOpenChange={(open) => !open && setSelectedService(null)}>
            <DialogTrigger asChild>
              <Card 
                className="shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col animate-slide-in-up"
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
                onClick={() => setSelectedService(service)}
              >
                <CardHeader className="flex-row items-center gap-4">
                  <service.Icon className="w-10 h-10 text-primary" />
                  <div>
                    <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </DialogTrigger>
            {selectedService && selectedService.id === service.id && (
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl flex items-center gap-2">
                    <selectedService.Icon className="w-6 h-6 text-primary" />
                    {selectedService.name}
                  </DialogTitle>
                  <DialogDescription className="pt-2">
                    {selectedService.details || selectedService.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    For more information or to avail this service, please visit us or contact us at {pharmacyDetails.phoneNumbers[0]}.
                  </p>
                </div>
              </DialogContent>
            )}
          </Dialog>
        ))}
      </section>
    </div>
  );
}
