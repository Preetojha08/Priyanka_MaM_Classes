export default {
  brand: "Spark & Shine Tuition Classes",
  phone: "+91 7227893222",
  whatsapp: "+91 7227893222",
  email: "sparkandshine.classes@gmail.com",
  address: "Navjeevan Ground, In front of Satya Darshan Society RCI, Flat No 56, Ankleshwar, Gujarat 393001",
  hours: "Mon–Sat 3:30 PM – 8:30 PM IST",
  boards: ["CBSE", "GSEB"],
  grades: ["KG", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"],
  subjects: ["Maths", "English", "Science", "S.S.T", "Hindi"],
  admissionsNote: "Admission Open Now — Grab Your Seat",
  feesNote: "Fees are flexible based on subjects & schedule. Sibling discounts available.",
  demoNote: "Free 30-minute demo class — limited weekly slots.",
  apiUrl: import.meta.env.VITE_CONTACT_API_URL || "https://your-api-gateway-url.amazonaws.com/contact",
  
  // Social links
  social: {
    whatsapp: "https://wa.me/917227893222",
    phone: "tel:+917227893222",
    email: "mailto:sparkandshine.classes@gmail.com"
  },
  
  // Feature highlights
  features: [
    {
      title: "Individual Attention",
      description: "Small batches ensure every student gets personalized care and attention",
      icon: "users"
    },
    {
      title: "Supportive Environment",
      description: "Creating a safe space where students feel comfortable to ask questions",
      icon: "heart"
    },
    {
      title: "Doubt-Solving Sessions",
      description: "Regular doubt-clearing sessions to strengthen understanding",
      icon: "help-circle"
    },
    {
      title: "Extra Care for Weak Students",
      description: "Special attention and additional support for students who need it most",
      icon: "shield"
    }
  ],
  
  // Testimonials
  testimonials: [
    {
      name: "Priya Sharma",
      grade: "Parent of Class 8 student",
      text: "My daughter's confidence in Maths has improved tremendously. The individual attention really makes a difference.",
      rating: 5
    },
    {
      name: "Rajesh Patel",
      grade: "Parent of Class 6 student",
      text: "The teachers are very patient and supportive. My son actually looks forward to going to tuition now.",
      rating: 5
    },
    {
      name: "Sunita Mehta",
      grade: "Parent of Class 9 student",
      text: "Excellent teaching methods and small batch size ensures my daughter gets proper attention. Highly recommended!",
      rating: 5
    },
    {
      name: "Amit Kumar",
      grade: "Parent of Class 5 student",
      text: "The doubt-solving sessions are very helpful. My son's grades have improved significantly in just 2 months.",
      rating: 5
    }
  ],
  
  // Stats
  stats: [
    { label: "Students Taught", value: "500+" },
    { label: "Average Improvement", value: "85%" },
    { label: "Years Teaching", value: "8+" }
  ]
} as const;

