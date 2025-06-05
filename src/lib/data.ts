
import type { LucideIcon } from 'lucide-react';
import { Pill, Truck, Microscope, Stethoscope, User, Star } from 'lucide-react';

export interface NavLinkInfo {
  href: string;
  label: string;
}

export const navLinks: NavLinkInfo[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export const footerLinks: NavLinkInfo[] = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/faqs', label: 'FAQs' },
];

export interface ServiceInfo {
  id: string;
  name: string;
  description: string;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  details?: string;
}

export const services: ServiceInfo[] = [
  {
    id: 'doctors',
    name: 'Doctors',
    description: 'Consult with specialists at the pharmacy.',
    Icon: Stethoscope,
    details: 'Our in-house doctors specialize in General Medicine, Pediatrics, and Dermatology. Book an appointment for expert medical consultation.'
  },
  {
    id: 'medical-tests',
    name: 'Medical Tests',
    description: 'Blood tests, urine tests, and other diagnostic services.',
    Icon: Microscope,
    details: 'Affordable and reliable diagnostic testing services. We offer a variety of tests including blood tests, urine analysis, and more, with quick and accurate results.'
  },
  {
    id: 'home-delivery',
    name: 'Home Delivery',
    description: 'Order medicines online for doorstep delivery.',
    Icon: Truck,
    details: 'Conveniently order your medicines and healthcare products from home. We ensure prompt and safe delivery to your doorstep.'
  },
  {
    id: 'chemists',
    name: 'Chemists',
    description: 'Prescription and over-the-counter medicines.',
    Icon: Pill,
    details: 'Our pharmacy stocks a wide range of authentic medicines. Our qualified pharmacists are available to help you with your prescriptions and health queries.'
  },
  {
    id: 'medicines',
    name: 'Medicines',
    description: 'Antioxidants, Vitamins, Antibiotics, and more.',
    Icon: Pill, // Using Pill icon again as it's general for medicines
    details: 'We provide a comprehensive range of medications including specialized drugs, general healthcare products, vitamins, supplements, and personal care items.'
  },
];

export interface Review {
  id: string;
  name: string;
  rating: number;
  feedback: string;
  avatar?: string;
}

export const reviewsData: Review[] = [
  {
    id: '1',
    name: 'Akash A.',
    rating: 5,
    feedback: 'Excellent service and knowledgeable staff. They always have the medicines I need.',
  },
  {
    id: '2',
    name: 'Priya S.',
    rating: 4,
    feedback: 'Good pharmacy with quick home delivery. The doctors are also very helpful.',
  },
  {
    id: '3',
    name: 'Rohan M.',
    rating: 4.5,
    feedback: 'Found Mahendra Pharmacy very reliable for medical tests and genuine medicines. Highly recommended!',
  },
];

export const pharmacyDetails = {
  name: "Mahendra Pharmacy",
  phoneNumbers: ["7899044371", "9808930090"],
  email: "akash.agarwal5@yahoo.com",
  operatingHours: "9:00 AM – 10:00 PM (All days, break: 2:00 PM - 2:00 PM implied continuity)", // Clarified based on prompt
  fullOperatingHours: "9:00 AM – 2:00 PM, 2:00 PM – 10:00 PM (All days)",
  address: "119/1, Jessore Road, Kolkata – 700055",
  tagline: "Your Trusted Pharmacy with Medicine, Doctors, and Testing Services",
  social: {
    whatsapp: "https://wa.me/917899044371", // Assuming one number for WhatsApp
    facebook: "https://facebook.com/mahendrapharmacy", 
    instagram: "https://instagram.com/mahendrapharmacy", 
  }
};

export const dealItems = [
    { id: 1, name: 'All Medicines', discount: 'Flat 20% OFF', description: 'Get a flat 20% discount on our wide range of medicines.', image: '/medicine.png', dataAiHint: 'medicines pharmacy' },
    { id: 2, name: 'Senior Citizen Health Checkup', discount: 'Up to 25% OFF', description: 'Dedicated health packages for our senior citizens at great prices.', image: '/senior.png', dataAiHint: 'senior health' },
    { id: 3, name: 'Diagnostic Test Packages', discount: 'Up to 30% OFF', description: 'Avail special discounts on various diagnostic tests and packages.', image: '/test.png', dataAiHint: 'lab tests' },
];

