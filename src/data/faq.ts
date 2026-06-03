export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What should I expect during my first visit?',
    answer: 'Your first visit will involve a comprehensive examination of your teeth, gums, and mouth. We will take any necessary x-rays, discuss your dental history, and create a personalised treatment plan tailored to your needs.',
    category: 'General',
  },
  {
    id: '2',
    question: 'Do you accept new patients?',
    answer: 'Yes, we are currently accepting new private and Denplan Essentials patients. You can join Denplan Essentials through our website or contact us to arrange your first appointment.',
    category: 'General',
  },
  {
    id: '3',
    question: 'What payment options are available?',
    answer: 'We offer a range of payment options including private payments and interest-free credit over 12 months (subject to status, terms and conditions apply). We have partnered with Denplan to provide affordable ways to pay for routine dental care through monthly payment plans.',
    category: 'Fees',
  },
  {
    id: '4',
    question: 'How long does teeth whitening take?',
    answer: 'We offer home whitening kits with custom bleaching trays and Zoom in-chair whitening. The in-chair whitening takes approximately 2 hours, while home whitening kits are typically used over 2-4 weeks depending on the desired result.',
    category: 'Treatments',
  },
  {
    id: '5',
    question: 'Do I need to wear a face mask?',
    answer: 'Following our most recent risk assessment, alongside advice from the NHS, we ask that our patients and carers continue to wear a face mask while waiting in the practice.',
    category: 'General',
  },
  {
    id: '6',
    question: 'What is the Inman Aligner?',
    answer: 'The Inman Aligner is a removable orthodontic appliance that uses a coil spring system to gently reposition crowded front teeth. Results can be achieved in as little as 8-16 weeks. It is a faster and often more affordable alternative to clear braces for treating upper and lower front teeth.',
    category: 'Treatments',
  },
  {
    id: '7',
    question: 'Do you offer emergency dental appointments?',
    answer: 'Yes, we offer same-day emergency appointments (£80, including x-rays). For dental emergencies, please call the practice early in the morning. For out-of-hours emergencies, our answer phone message provides details of emergency provisions.',
    category: 'General',
  },
  {
    id: '8',
    question: 'How often should I visit the hygienist?',
    answer: 'We recommend visiting the hygienist every 6 months for regular scale and polish treatments. However, depending on your oral health needs, your dentist may recommend more frequent visits. Hygienist appointments start from £62.',
    category: 'Treatments',
  },
  {
    id: '9',
    question: 'What is the cost of cosmetic dentistry treatments?',
    answer: 'Our prices vary by treatment. Porcelain veneers start at £465 per tooth, home whitening kits from £299, Zoom whitening from £550, white fillings from £120, and crowns from £399. We offer discounts on multiple teeth for bridges and veneers. Please contact us for a full price list.',
    category: 'Fees',
  },
  {
    id: '10',
    question: 'How do I cancel or reschedule an appointment?',
    answer: 'We require a minimum of 24 hours notice if you need to change an appointment. We reserve the right to charge for failure to keep an appointment or for cancellation at short notice.',
    category: 'General',
  },
];
