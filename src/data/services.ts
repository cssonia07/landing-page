export type Service = {
  title: string;
  slug: string;
  category: string;
  description: string;
  price: string;
  featured?: boolean;
};

export const serviceCategories = [
  {
    title: 'GST Services',
    description:
      'We handle GST registration, return filing, amendments, cancellation, and notice support. Whether you are a new business or already registered, we help you stay compliant without unnecessary confusion.',
    services: [
      'GST Registration',
      'GST Return Filing',
      'GST Notice Support',
      'GST Amendments & Cancellation',
      'GST LUT Filing',
      'GST Compliance Guidance'
    ]
  },
  {
    title: 'Company Registration',
    description:
      'We assist with choosing the right structure and completing the registration process for Private Limited Company, LLP, OPC, Partnership Firm, or Sole Proprietorship, depending on your business needs.',
    services: [
      'Private Limited Company Registration',
      'LLP Registration',
      'OPC Registration',
      'Partnership Firm Registration',
      'Sole Proprietorship Registration'
    ]
  },
  {
    title: 'Income Tax Services',
    description:
      'We provide accurate and timely income tax return filing, business tax compliance, and support for tax notices and routine tax-related queries.',
    services: [
      'Income Tax Return Filing',
      'Tax Consultation',
      'Business Tax Compliance',
      'Tax Notice Support',
      'Advance Tax Guidance',
      'TDS Compliance Support'
    ]
  },
  {
    title: 'FSSAI Registration',
    description:
      'We help food businesses complete the right FSSAI registration or license based on their business model and turnover.',
    services: ['Basic FSSAI Registration', 'State License', 'Central License', 'Renewal and Modification Support']
  },
  {
    title: 'Startup & Business Registrations',
    description:
      'We support new businesses with Startup India, MSME/Udyam, GeM, IEC, DSC, and other foundational registrations required to start and grow legally.',
    services: [
      'Startup India Registration',
      'MSME/Udyam Registration',
      'GeM Registration',
      'IEC Registration',
      'DSC Application Support',
      'Shop & Establishment Registration'
    ]
  },
  {
    title: 'Annual Compliance',
    description:
      'We manage annual filings, ROC requirements, and post-incorporation compliance so you do not miss statutory deadlines.',
    services: [
      'ROC Compliance',
      'Annual Returns',
      'Director KYC',
      'Compliance Management',
      'Documentation Support',
      'Post-Incorporation Compliance'
    ]
  },
  {
    title: 'Other Professional Services',
    description:
      'We also help with trademark protection, accounting support, PF/ESI, professional tax, and related business compliance work.',
    services: [
      'Trademark Registration',
      'PF/ESI Registration',
      'Professional Tax Registration',
      'Accounting & Bookkeeping Support',
      'Audit & Assurance Support'
    ]
  }
];

export const featuredServices: Service[] = [
  {
    title: 'GST Registration',
    slug: 'gst-registration',
    category: 'GST Services',
    description:
      'Get GST registration support with document review, application preparation, and practical guidance for your business.',
    price: 'Starting from ₹999*',
    featured: true
  },
  {
    title: 'GST Return Filing',
    slug: 'gst-return-filing',
    category: 'GST Services',
    description:
      'Monthly or periodic GST filing support to help your business stay current with return requirements.',
    price: 'Starting from ₹499/month*',
    featured: true
  },
  {
    title: 'Private Limited Company Registration',
    slug: 'company-registration',
    category: 'Company Registration',
    description:
      'End-to-end incorporation support for founders choosing a private limited company structure.',
    price: 'Starting from ₹6,999*',
    featured: true
  },
  {
    title: 'LLP Registration',
    slug: 'llp-registration',
    category: 'Company Registration',
    description:
      'Registration support for Limited Liability Partnerships with guidance on partners, documents, and filings.',
    price: 'Starting from ₹4,999*',
    featured: true
  },
  {
    title: 'Income Tax Return Filing',
    slug: 'income-tax-return-filing',
    category: 'Income Tax Services',
    description:
      'Accurate income tax return filing support for individuals, freelancers, professionals, and businesses.',
    price: 'Starting from ₹999*',
    featured: true
  },
  {
    title: 'FSSAI Registration',
    slug: 'fssai-registration',
    category: 'FSSAI Registration',
    description:
      'FSSAI registration and license support for food businesses based on business model and turnover.',
    price: 'Starting from ₹999*',
    featured: true
  },
  {
    title: 'Startup India Registration',
    slug: 'startup-india-registration',
    category: 'Startup & Business Registrations',
    description:
      'Startup India recognition support with document review and practical guidance for eligible startups.',
    price: 'Starting from ₹4,999*'
  },
  {
    title: 'MSME/Udyam Registration',
    slug: 'msme-udyam-registration',
    category: 'Startup & Business Registrations',
    description:
      'Udyam registration assistance for eligible micro, small, and medium enterprises.',
    price: 'Starting from ₹999*'
  },
  {
    title: 'GeM Registration',
    slug: 'gem-registration',
    category: 'Startup & Business Registrations',
    description:
      'Support for seller registration on Government e-Marketplace with document and profile guidance.',
    price: 'Starting from ₹3,499*'
  },
  {
    title: 'IEC Registration',
    slug: 'iec-registration',
    category: 'Startup & Business Registrations',
    description:
      'Import Export Code registration assistance for businesses involved in import or export activities.',
    price: 'Starting from ₹2,999*'
  },
  {
    title: 'ROC Compliance',
    slug: 'roc-compliance',
    category: 'Annual Compliance',
    description:
      'ROC filing and annual compliance support for companies and LLPs with deadline-focused handling.',
    price: 'Starting from ₹2,499*'
  },
  {
    title: 'Trademark Registration',
    slug: 'trademark-registration',
    category: 'Other Professional Services',
    description:
      'Trademark application support to help protect your brand name, logo, or business identity.',
    price: 'Starting from ₹4,999*'
  },
  {
    title: 'OPC Registration',
    slug: 'opc-registration',
    category: 'Company Registration',
    description:
      'One Person Company registration support for solo founders seeking a corporate structure.',
    price: 'Starting from ₹5,999*'
  }
];

export const whoWeHelp = [
  'Startups launching their first business',
  'Small business owners',
  'Freelancers and independent professionals',
  'E-commerce sellers',
  'Manufacturers and traders',
  'Service businesses',
  'Importers and exporters',
  'Growing companies that need ongoing compliance support'
];

export const processSteps = [
  {
    title: 'Share your requirement',
    text: 'Tell us what you need through the website form, call, or WhatsApp.'
  },
  {
    title: 'Document review',
    text: 'We review your documents, explain the exact service required, and share the process clearly.'
  },
  {
    title: 'Filing and submission',
    text: 'We prepare and submit the application, filing, or compliance work with proper checks.'
  },
  {
    title: 'Follow-up and completion',
    text: 'We track progress, respond to queries if needed, and keep you updated until the work is completed.'
  }
];

export const whyChooseUs = [
  'Professional support from a Practicing Company Secretary firm',
  'Simple explanations without legal jargon',
  'Transparent pricing and clear scope',
  'Quick response and personal attention',
  'Online support for clients across India',
  'Practical compliance advice, not just filing work',
  'Support for both new businesses and ongoing compliance'
];

export const generalDocuments = [
  'PAN card',
  'Aadhaar card',
  'Passport-size photograph',
  'Mobile number and email ID',
  'Business address proof',
  'Bank details',
  'Entity documents, if already registered',
  'Utility bill / rent agreement / NOC, where applicable'
];

