export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  gdcNo: string;
  bio: string;
  specialties: string[];
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'arash-jafari',
    name: 'Dr Arash Jafari',
    role: 'Principal Dentist',
    qualifications: 'DDS',
    gdcNo: '76236',
    image: '/images/arash.jpg',
    bio: 'Arash is the principal dentist at Brighton White Dental Studio. He graduated from the University of Malmo, Sweden and has practiced in Nottingham and Sheffield since 1999 before moving to Brighton in 2009. He is a strong advocate of minimum intervention techniques when restoring your smile to its natural beauty. He achieves this goal by utilising a wide range of the most modern techniques in dentistry including invisible braces to avoid invasive dental treatment. He has undertaken his studies at the University of Gothenburg under the tutelage of Professor Brannemark, the founder of dental implantology, and at the University of Malmo under Professor Bratthall, who pioneered advanced techniques in periodontology. He has undertaken further qualifications by attending advanced facial cosmetic courses in Princes Risborough, Oxford, and regularly attends training courses around the world.',
    specialties: ['Cosmetic Dentistry', 'Dental Implants', 'Facial Rejuvenation', 'Minimum Intervention Dentistry', 'Invisible Braces', 'Periodontology'],
  },
  {
    id: 'michelle-lynch',
    name: 'Michelle Lynch',
    role: 'Senior Manager',
    qualifications: '',
    gdcNo: '155130',
    bio: 'Michelle is the Senior Manager at Brighton White Dental Studio, ensuring the practice runs smoothly and patients receive the highest standard of care and service.',
    specialties: ['Practice Management', 'Patient Care'],
  },
];
