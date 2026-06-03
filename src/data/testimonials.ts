export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  content: string;
  rating: number;
  treatment?: string;
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'MP',
    location: 'London',
    content: 'I would like to thank all the staff at Brighton White for looking after me so well. It was by far the best dentist visit I have ever had, and although I live in London I will continue to visit Brighton in order to use Brighton White. A wonderful experience for someone like me that is afraid of the dentist. Very thorough, great information and extremely pleasant. Thanks guys, see you soon.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michelle',
    content: 'I am a very phobic patient. I saw an excellent Dentist who really understood my worry about having dental treatment. Very professional service. I will be contacting them in 6 months for my check-up appointment.',
    rating: 5,
    treatment: 'General Dentistry',
  },
  {
    id: '3',
    name: 'John',
    content: 'Very good. Kind and friendly staff. Convenient location and reasonable prices.',
    rating: 4,
  },
  {
    id: '4',
    name: 'Tony',
    content: 'As a man we don\'t like to admit that we are scared of anything but I am really terrified of the dentist. I saw Dr Arash Jafari and he was brilliant. I didn\'t feel stupid and he understood my fears. If you\'re a dental phobic patient GO TO THIS CLINIC.',
    rating: 5,
    treatment: 'Consultation',
  },
  {
    id: '5',
    name: 'Katy',
    content: 'I have tried about 5 dentists in the past 12 months and Brighton White are the only dentist who I could get an emergency appointment with. The dentist treated me like a person and not a number. I realised on my way out that they also do wrinkle treatments so will be calling them shortly.',
    rating: 5,
    treatment: 'Emergency Dentistry',
  },
];
