export const site = {
  name: 'Sonia Gupta & Associates',
  tagline: 'Business Registration, Tax Filing & Compliance Services',
  url: 'https://soniaguptaassociates.com',
  phone: '8527285843',
  phoneHref: 'tel:+918527285843',
  whatsapp: '8527285843',
  whatsappUrl: 'https://wa.me/918527285843',
  whatsappMessage:
    'Hello Sonia Gupta & Associates, I need help with business registration, tax filing, or compliance services.',
  email: 'sonialegal2701@gmail.com',
  emailHref: 'mailto:sonialegal2701@gmail.com',
  serviceEmail: 'sonialegal2701@gmail.com',
  serviceEmailHref: 'mailto:sonialegal2701@gmail.com',
  location: 'Noida, UP 201307',
  established: '2017-05-11',
  keywords:
    'GST registration, company registration, income tax filing, FSSAI registration, Startup India registration, GeM registration, IEC registration, ROC filing, business compliance services, company secretary in Noida, compliance services India'
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' }
];

export const footerLinks = [
  ...navigation,
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Disclaimer', href: '/disclaimer' }
];

export const encodedWhatsAppUrl = `${site.whatsappUrl}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const serviceWhatsAppUrl =
  'https://wa.me/918527285843?text=Hello%20Sonia%20Gupta%20%26%20Associates%2C%20I%20need%20help%20with%20business%20registration%2C%20tax%20filing%2C%20or%20compliance%20services.';
