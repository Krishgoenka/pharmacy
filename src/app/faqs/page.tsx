
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pharmacyDetails } from "@/lib/data";

const faqData = [
  {
    question: "What are your operating hours?",
    answer: `${pharmacyDetails.name} is open from ${pharmacyDetails.fullOperatingHours}.`
  },
  {
    question: "Do you offer home delivery?",
    answer: "Yes, we offer home delivery services for medicines and healthcare products. You can place an order through our website or by calling us."
  },
  {
    question: "Can I book a doctor's consultation?",
    answer: "Absolutely. We have in-house doctors specializing in various fields. You can book an appointment through our website or by contacting the pharmacy directly."
  },
  {
    question: "What medical tests do you provide?",
    answer: "We offer a range of diagnostic services, including blood tests, urine tests, and other common medical tests. Please contact us for specific test availability and preparation instructions."
  },
  {
    question: "Do I need a prescription for all medicines?",
    answer: "A valid prescription is required for all prescription-only medicines (POM). Over-the-counter (OTC) medicines can be purchased without a prescription, but our pharmacists are always available to provide advice."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit/debit cards, UPI, and other popular digital payment methods."
  }
];

export default function FAQsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 animate-fade-in">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl md:text-4xl text-primary text-center">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="font-headline text-lg hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-md text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
