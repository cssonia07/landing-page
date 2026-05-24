export const site = {
  name: 'NiyamDesk',
  firmName: 'Sonia Gupta & Associates',
  legalName: 'Sonia Gupta & Associates',
  alternateName: 'NiyamDesk',
  domain: 'niyamdesk.in',
  tagline: 'Business Registration, Filings & Compliance Support in India',
  url: 'https://niyamdesk.in',
  phone: '8527285843',
  phoneHref: 'tel:+918527285843',
  whatsapp: '8527285843',
  whatsappUrl: 'https://wa.me/918527285843',
  whatsappMessage:
    'Hello NiyamDesk, I need help with business registration, tax filing, or compliance services.',
  email: 'contact@niyamdesk.in',
  emailHref: 'mailto:contact@niyamdesk.in',
  serviceEmail: 'contact@niyamdesk.in',
  serviceEmailHref: 'mailto:contact@niyamdesk.in',
  location: 'Noida, UP 201307',
  established: '2017-05-11',
  footerDescription:
    'NiyamDesk is the online trade name of Sonia Gupta & Associates, a Practicing Company Secretary firm providing business registration, tax filing, compliance, and related professional services in India.',
  keywords:
    'GST registration, GST return filing, GST notice support, company registration, LLP registration, OPC registration, income tax filing, FSSAI registration, Startup India registration, MSME Udyam registration, GeM registration, IEC registration, ROC compliance, trademark registration, FEMA compliance, business compliance services India'
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
  `${site.whatsappUrl}?text=${encodeURIComponent(site.whatsappMessage)}`;
