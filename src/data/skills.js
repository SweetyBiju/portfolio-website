// Icon names are from react-icons — https://react-icons.github.io/react-icons
// Each item has: label (display name) + icon (react-icons component name + library prefix)
// We import and render them dynamically in Skills.jsx

export const SKILLS = [
  {
    category: 'Frontend',
    iconLib: 'fa',        // FontAwesome
    iconName: 'FaCode',
    color: '#2D4030',
    items: [
      { label: 'React.js',    icon: 'SiReact',      lib: 'si' },
      { label: 'JavaScript',  icon: 'SiJavascript', lib: 'si' },
      { label: 'Tailwind CSS',icon: 'SiTailwindcss',lib: 'si' },
      { label: 'HTML5',       icon: 'SiHtml5',      lib: 'si' },
      { label: 'CSS3',        icon: 'SiCss3',       lib: 'si' },
    ],
  },
  {
    category: 'Backend',
    iconLib: 'fa',
    iconName: 'FaServer',
    color: '#2D4030',
    items: [
      { label: 'Node.js',   icon: 'SiNodedotjs', lib: 'si' },
      { label: 'Express',   icon: 'SiExpress',   lib: 'si' },
      { label: 'Django',    icon: 'SiDjango',    lib: 'si' },
      { label: 'REST APIs', icon: 'TbApi',       lib: 'tb' },
      { label: 'WebSockets',icon: 'TbPlugConnected', lib: 'tb' },
    ],
  },
  {
    category: 'Database',
    iconLib: 'fa',
    iconName: 'FaDatabase',
    color: '#2D4030',
    items: [
      
      { label: 'MySQL',      icon: 'SiMysql',      lib: 'si' },
      { label: 'MongoDB',    icon: 'SiMongodb',    lib: 'si' },
      { label: 'PostgreSQL', icon: 'SiPostgresql', lib: 'si' },
      { label: 'Redis',      icon: 'SiRedis',      lib: 'si' },
    ],
  },
  {
    category: 'AI / ML',
    iconLib: 'fa',
    iconName: 'FaBrain',
    color: '#2D4030',
    items: [
      { label: 'Python',      icon: 'SiPython',     lib: 'si' },
      { label: 'scikit-learn',icon: 'SiScikitlearn',lib: 'si' },
      { label: 'Pandas',      icon: 'SiPandas',     lib: 'si' },
      { label: 'NumPy',       icon: 'SiNumpy',      lib: 'si' },
      { label: 'Jupyter',     icon: 'SiJupyter',    lib: 'si' },
    ],
  },
  {
    category: 'Tools',
    iconLib: 'fa',
    iconName: 'FaTools',
    color: '#2D4030',
    items: [
      { label: 'Git',      icon: 'SiGit',      lib: 'si' },
      { label: 'GitHub',   icon: 'SiGithub',   lib: 'si' },
      { label: 'PowerBI',   icon: 'SiPowerBI',   lib: 'si' },
      { label: 'Excel',   icon: 'SiExcel',   lib: 'si' },

      { label: 'Postman',  icon: 'SiPostman',  lib: 'si' },
      { label: 'Figma',    icon: 'SiFigma',    lib: 'si' },  
    ],
  },
  {
    category: 'CS Fundamentals',
    iconLib: 'fa',
    iconName: 'FaGraduationCap',
    color: '#2D4030',
    items: [
      { label: 'DSA',               icon: 'TbBinaryTree',  lib: 'tb' },
      { label: 'OOPS',              icon: 'TbCube',        lib: 'tb' },
      { label: 'OS',                icon: 'TbServer',      lib: 'tb' },
      { label: 'DBMS',              icon: 'TbDatabase',    lib: 'tb' },
      { label: 'Computer Networks', icon: 'TbNetwork',     lib: 'tb' },
      { label: 'System Design',     icon: 'TbLayout',      lib: 'tb' },
    ],
  },
]
