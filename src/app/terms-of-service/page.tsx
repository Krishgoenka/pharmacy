
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pharmacyDetails } from '@/lib/data';

export default function TermsOfServicePage() {
  const [lastUpdatedDate, setLastUpdatedDate] = useState<string | null>(null);

  useEffect(() => {
    // This ensures date is generated only on client-side after hydration
    setLastUpdatedDate(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 animate-fade-in">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl md:text-4xl text-primary">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-foreground leading-relaxed">
          <p>Last updated: {lastUpdatedDate || 'Loading...'}</p>

          <h2 className="font-headline text-2xl mt-6">1. Agreement to Terms</h2>
          <p>By accessing or using the {pharmacyDetails.name} website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.</p>

          <h2 className="font-headline text-2xl mt-6">2. Services Provided</h2>
          <p>{pharmacyDetails.name} provides pharmaceutical services, including the sale of prescription and over-the-counter medications, home delivery, medical tests, and doctor consultations. All services are subject to availability and applicable laws and regulations.</p>
          
          <h2 className="font-headline text-2xl mt-6">3. User Accounts</h2>
          <p>If you create an account with us, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.</p>

          <h2 className="font-headline text-2xl mt-6">4. Prescription Medications</h2>
          <p>A valid prescription from a licensed medical practitioner is required for all prescription medications. We reserve the right to refuse to fill any prescription that we deem, in our sole discretion, to be inappropriate or not in compliance with legal or ethical standards.</p>

          <h2 className="font-headline text-2xl mt-6">5. Intellectual Property</h2>
          <p>The service and its original content, features, and functionality are and will remain the exclusive property of {pharmacyDetails.name} and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of {pharmacyDetails.name}.</p>

          <h2 className="font-headline text-2xl mt-6">6. Limitation of Liability</h2>
          <p>In no event shall {pharmacyDetails.name}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>

          <h2 className="font-headline text-2xl mt-6">7. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>

          <h2 className="font-headline text-2xl mt-6">8. Changes to Terms</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

          <h2 className="font-headline text-2xl mt-6">Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at {pharmacyDetails.email} or {pharmacyDetails.phoneNumbers.join(' / ')}.</p>
        </CardContent>
      </Card>
    </div>
  );
}
