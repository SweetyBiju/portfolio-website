// ─── REPLACE with your real project details ──────────────────────────────────
export const PROJECTS = [
  {
    id: 1, 
    title: 'Resolv',
    tagline: 'A high-accountability expense-sharing app that eliminates the social friction of peer-to-peer debt.',
    description: 'Resolv is a stress-free expense-splitting platform that scans receipts, automates recurring bills, and introduces gamified "Trust Scores" to handle money without group chat arguments. I architected the backend to process complex ledger arithmetic (EQUAL, EXACT, PERCENT, and ITEM splits) ensuring zero floating-point precision loss. The system is powered by a proprietary Dual-Phase Debt Simplification engine (Exact-Match Pruning + Greedy Heap-Based Netting) to perfectly optimize user settlements. I also implemented strict security measures including custom DRF permission models, rate-limiting, self-settlement blocks, and atomic soft-deletes across complex relational models to guarantee historical data integrity.',
    tech: ['Python', 'Django REST Framework', 'JavaScript', 'Tailwind CSS', 'SQLite'],
    category: 'Full Stack',
    github: 'https://github.com/SweetyBiju/Resolv', // Update with your actual repo name
    live: '', // Add your live URL here if deployed
    featured: true,
    year: '2026',
    media: { type: 'video', url: '/resolv-demo.mp4' },
  },
  {
  id: 2,
  title: 'KrishiSense: Asian Food Security Dashboard',
  tagline: 'A multi-page Power BI dashboard analyzing hunger trends, agricultural supply, and economic correlations across Asia.',
  description: 'Engineered a comprehensive Power BI dashboard to monitor SDG 2 (Zero Hunger) metrics across Asian regions. Designed an intuitive UI/UX featuring an Executive Summary for high-level KPIs, an Agriculture tracker for crop supply chain analysis, and an Economics page mapping the correlation between GDP, inflation, and food security. Utilized Power Query for robust data transformation and authored complex DAX measures for dynamic calculations and conditional formatting to instantly highlight crisis zones.',
  tech: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'UI/UX Design'],
  category: 'Data Analytics',
  live: 'https://app.powerbi.com/view?r=eyJrIjoiNjI0MTA5MjQtNDdkOS00ZWMwLWI4MmItM2UxMzEyYjI0Y2JlIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D',
  featured: true,
  year: '2025',
  media: { type: 'video', url: '/krishisense-demo.mp4' },
},
  
{
    id: 3, // Update this ID to match your sequence
    title: 'Global Demographic Insights',
    tagline: 'An exploratory data analysis pipeline uncovering socioeconomic trends and predictive indicators.',
    description: 'Engineered a comprehensive Exploratory Data Analysis (EDA) pipeline in Python to investigate global demographic trends spanning over two decades (2000-2022). I integrated complex, multi-source datasets from UNESCO and the World Bank, implementing robust data cleaning techniques including skewness-evaluated missing value imputation and linear interpolation. The project maps key indicators like GDP, fertility rates, and life expectancy through advanced statistical visualizations. It culminates in a predictive linear regression model to forecast population growth, demonstrating a complete workflow from raw data ingestion to statistical modeling.',
    tech: ['Python', 'Pandas', 'Seaborn', 'Scikit-Learn'],
    category: 'ML',
    github: 'https://github.com/SweetyBiju/DemographicInsightsPython',
    live: '', // Leave empty if there is no live deployment
    featured: true,
    year: '2025',
    media: { type: 'image', url: '/demo-insights.png' },
  },
  
  {
    id: 4, // Update this ID to match your sequence
    title: 'OS Disk Scheduling Simulator',
    tagline: 'An interactive web-based engine that calculates and visualizes operating system disk scheduling algorithms.',
    description: 'Engineered a comprehensive simulator to benchmark core OS disk scheduling algorithms including FCFS, SSTF, SCAN, C-SCAN, LOOK, and C-LOOK. I built a custom PHP backend engine to process complex track-head movement logic, calculate execution sequences, and compute performance metrics like Total and Average Seek Time. The frontend consumes this data asynchronously, leveraging Chart.js to render dynamic, real-time line graphs of the disk head path within a responsive Tailwind CSS interface. This project bridges the gap between abstract operating system concepts and tangible visual data.',
    tech: ['PHP','HTML', 'JavaScript', 'Chart.js', 'Tailwind CSS'],
    category: 'Full Stack',
    github: 'https://github.com/SurichaSinha/AdvancedDiskSchedulingSimulator', // Updated with your username
    live: '',
    featured: false,
    year: '2025',
    media: { type: 'image', url: '/os-simulator.png' },
  },
  
]

export const PROJECT_CATEGORIES = ['All', 'Full Stack', 'ML','Data Analytics']
