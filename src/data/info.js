// ─── PERSONAL INFO — replace all placeholders ────────────────────────────────
// This is the single source of truth for your personal details.
// Update this file and every section updates automatically.

export const INFO = {
  // ── Identity ──────────────────────────────────────────────
  name:       'Sweety Biju',          
  firstName:  'Sweety',          
  initials:   'SB',                      
  tagline:    'Translating abstract logic into real-world impact.',
  bio: [
    // Two short paragraphs shown in the About section
  "I started by wondering how websites work. That one question took me down a rabbit hole I haven't climbed out of yet and at this point I'm not sure I want to.",
"Now I'm somewhere at the intersection of data science and full stack development, which sounds very planned but was really just me following whatever problem felt interesting next.I build full stack apps and work with data - models, pipelines, APIs, the occasional ML experiment that behaves nothing like it should. I'm not attached to any particular tool. I just want the one that actually solves the problem, whether that's Django holding down a REST API or Python doing something it probably wasn't designed for.",
"Part engineer, part detective, I like finding the clean solution hiding inside a messy problem , the kind where everything clicks and you wonder why it took you so long to see it. That moment is mostly why I do this.",
"If you've got something interesting to build or something broken that needs figuring out, let's talk. Fair warning - I'm easily bribed with interesting problems. And dogs. Mostly dogs."  
  ],

  // ── Typing animation roles (Hero) ─────────────────────────
  roles: [
    'Data Science.',     2000,
    'MERN Developement.',     2000,
    'ML Engineering.',        2000,
  ],

  // ── Links ─────────────────────────────────────────────────
  email:    'sweetybiju2004@gmail.com',
  github:   'https://github.com/SweetyBiju',
  linkedin: 'https://linkedin.com/in/sweety-biju',
  twitter:  'https://twitter.com/YOUR_USERNAME',
  leetcode: 'https://leetcode.com/sweety_biju',
  hackerrank:'https://www.hackerrank.com/sweety_biju',
  resume:   '/resume.pdf',               // place resume.pdf inside /public

  // ── API usernames (Stats section) ─────────────────────────
  githubUsername:   'SweetyBiju',
  leetcodeUsername: 'sweety_biju',
  hackerrankUsername:'sweety_biju',
  linkedinUsername: 'sweety-biju',

  // ── Education (shown in About section timeline) ───────────
  education: [
    {
      year:        '2023 – Present',
      degree:      'B.Tech — Computer Science & Engineering',
      institution: 'Lovely Professional University',
      location:    'Phagwara, Punjab',
      grade:       'CGPA: 9.43',
      current:     true,
    },
    {
      year:        '2021 – 2022',
      degree:      'Class XII — PCM with Computer Science',
      institution: "St. Joseph's Senior Secondary School",
      location:    'Kanpur, Uttar Pradesh',
      grade:       '85.6%',
      current:     false,
    },
    {
      year:        '2019 – 2020',
      degree:      'Class X',
      institution: "St. Joseph's Senior Secondary School",
      location:    'Kanpur, Uttar Pradesh',
      grade:       '95.6%',
      current:     false,
    },
  ],

  certifications: [
  {
    title:     'Python For Data Science',
    issuer:    'Infosys',
    date:      'Jul 2025',
    driveLink: "https://drive.google.com/file/d/1J2LsRAXTv73LV9GDEmhGtslsn2YLo9ZX/view?usp=drive_link",  // Google Drive link
    image:     '/pragati.png',   // preview image — place in /public/certs/
  },
  {
    title:     'Social Networks',
    issuer:    'NPTEL',
    date:      'May 2025',
    driveLink: "https://drive.google.com/file/d/1TBCtVBu6tpax4Fkuyc-106ch3YubRCnq/view?usp=drive_link",
    image:     '/social.png',
  },
  {
    title:     'Computer Commuincations',
    issuer:    'Coursera',
    date:      'Nov 2024',
    driveLink: "https://drive.google.com/file/d/1YIGVrhuCL7bQNPdNRgwBxIFT0UfWdQKy/view?usp=drive_link",
    image:     '/comm.png',
  },
  {
    title:     'Computer Networking',
    issuer:    'Google',
    date:      'Sep 2024',
    driveLink: "https://drive.google.com/file/d/1jp9l-0sgE1Rf6TMD8L-Ox5HusR-NAo7d/view?usp=drive_link",
    image:     '/network.png',
  },
],

// Add this below your existing certifications array
  training: [
    {title:     'Full Stack(MERN) with GenAI',
    issuer:    'W3 Grads',
    date:      'Jul 2025',
    driveLink: "https://drive.google.com/file/d/19d7Ju3Jf2Y5NDkWgf_GS30e-QnfAO8v6/view?usp=drive_link",  // Google Drive link
    image:     '/mern.png', 
    },
    {
      title:     'Data Structures and Algorithm',
      issuer:    'iamNeo',
      date:      'Dec 2024',
      driveLink: "https://drive.google.com/file/d/1Oq4QlOzyAhO999dMXFIbZEh6F_Xf1m-g/view?usp=drive_link",
      image:     '/dsa.png',
    },
  ],

  // ── Nav links ─────────────────────────────────────────────
  navLinks: [
    { label: 'About',    href: '#about'    },
    { label: 'Skills',   href: '#skills'   },
    { label: 'Projects', href: '#projects' },
    { label: 'Stats',    href: '#stats'    },
    { label: 'Certificates',  href: '#certificates'  },

    { label: 'Contact',  href: '#contact'  },
  ],
}
