import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 animate-fade-in">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl md:text-4xl text-primary">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-foreground leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="font-headline text-2xl mt-6">Introduction</h2>
          <p>Mahindra Pharmacy ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

          <h2 className="font-headline text-2xl mt-6">Information We Collect</h2>
          <p>We may collect personal information such as your name, email address, phone number, shipping address, prescription details, and payment information when you voluntarily provide it to us.</p>

          <h2 className="font-headline text-2xl mt-6">How We Use Your Information</h2>
          <p>We use the information we collect to:
            <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
              <li>Provide, operate, and maintain our services.</li>
              <li>Process your transactions and fulfill your orders.</li>
              <li>Improve, personalize, and expand our services.</li>
              <li>Communicate with you, including for customer service and updates.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </p>
          
          <h2 className="font-headline text-2xl mt-6">Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information except as described in this policy or with your consent. This may include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>

          <h2 className="font-headline text-2xl mt-6">Security of Your Information</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
          
          <h2 className="font-headline text-2xl mt-6">Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

          <h2 className="font-headline text-2xl mt-6">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at [Your Pharmacy Email] or [Your Pharmacy Phone Number].</p>
        </CardContent>
      </Card>
    </div>
  );
}
