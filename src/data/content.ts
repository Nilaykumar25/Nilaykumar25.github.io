// Single source of truth for all portfolio copy.
// Edit this file to update the site; components contain no personal content.

export const profile = {
  name: 'Nilay Kumar',
  shortName: 'Nilay',
  email: 'nilaykumar2006@gmail.com',
  github: 'https://github.com/Nilaykumar25',
  githubHandle: 'Nilaykumar25',
  linkedin: 'https://www.linkedin.com/in/nilay--kumar',
  resumeHref: '/Nilay_Kumar_Resume.pdf',
  headline: 'I build retrieval-grounded AI systems and ship them as full-stack products.',
  intro:
    'B.Tech Computer Science at the University of Delhi. I built DocuMind, a hybrid-RAG system presented at IEEE IRAI 2026, and two other end-to-end AI products across agriculture and mental health.',
  availability: 'Open to AI/ML and software engineering internships, and research collaboration.',
  metaDescription:
    'Nilay Kumar, B.Tech CS at the University of Delhi. AI/ML and full-stack engineer. Built DocuMind, a hybrid-RAG system presented at IEEE IRAI 2026.',
} as const

export type Highlight = { value: string; label: string }

export const highlights: Highlight[] = [
  { value: 'IEEE IRAI 2026', label: 'Paper presented in Melbourne. Selected from 575 submissions, 57 countries.' },
  { value: '3rd place', label: 'Build With Gemini Hackathon, University of Delhi. 60+ teams.' },
  { value: '8.91 CGPA', label: 'B.Tech Computer Science, Faculty of Technology, University of Delhi.' },
]

export type FlowNode = { title: string; detail: string }

export type Project = {
  id: string
  name: string
  status: 'Research system' | 'Prototype'
  statusNote: string
  tagline: string
  problem: string
  users: string
  role: string
  approach: string
  architecture: FlowNode[]
  implementation: string[]
  results: { value?: string; text: string }[]
  resultsNote?: string
  learned: string
  stack: string[]
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    id: 'documind',
    name: 'DocuMind',
    status: 'Research system',
    statusNote: 'Peer-reviewed. IEEE IRAI 2026',
    tagline:
      'A hybrid-RAG agent that turns scattered project conversations into traceable Business Requirements Documents.',
    problem:
      'Project requirements live in Slack threads, email, PDFs and meeting transcripts. Turning them into a structured BRD is manual work, and the finished document rarely shows where each requirement came from.',
    users: 'Teams that gather requirements across chat, email, documents and transcripts.',
    role: 'Engineered and architected the retrieval pipeline, the synthesis engine and the quality auditor.',
    approach:
      'Pure vector search misses exact terms, and pure keyword search misses paraphrases. I combined both, then reranked the merged candidates with a cross-encoder before any text reached the language model. Every generated sentence carries a pointer back to its source.',
    architecture: [
      { title: 'Ingest', detail: 'Slack, Gmail, PDFs, transcripts' },
      { title: 'Label and index', detail: 'Gemini semantic labeling, embeddings' },
      { title: 'Hybrid retrieval', detail: 'BM25 + ChromaDB vectors + cross-encoder rerank' },
      { title: 'Synthesis', detail: 'Gemini 2.5 Flash, sections generated in parallel with inline citations' },
      { title: 'Quality audit', detail: 'Scores completeness, clarity, consistency. Detects gaps and patches them' },
    ],
    implementation: [
      'Multi-source ingestion pipeline feeding a hybrid retrieval layer that combines BM25, ChromaDB vector search and cross-encoder reranking.',
      'In the research version, snippets are classified with Gemini-powered semantic labeling and ranked by cosine similarity over a Firestore vector store.',
      'BRD Synthesis Engine on Gemini 2.5 Flash that generates structured sections simultaneously, with a three-dimension quality scoring algorithm and an AI Quality Auditor for real-time gap detection and document patching.',
      'Graph-based conflict detection between requirements, auto-generated PlantUML use-case diagrams and one-click PDF export.',
    ],
    results: [
      { value: '575', text: 'submissions at IEEE IRAI 2026 (57 countries). Paper accepted and presented.' },
      { value: '< 30 s', text: 'to generate a structured BRD from ingested sources.' },
      { value: '100%', text: 'sentence-level traceability from each generated requirement to its source.' },
      { value: '95%+', text: 'accuracy reported for graph-based conflict detection.' },
    ],
    resultsNote: 'Speed, traceability and accuracy figures are the project\u2019s own reported numbers.',
    learned:
      'Trust in generated documents comes from the data model, not the prompt. Keeping source identity attached to every chunk from ingestion onward is what made sentence-level citations and an automated audit possible.',
    stack: ['Python', 'Gemini 2.5 Flash', 'ChromaDB', 'BM25', 'Cross-encoder reranking', 'Firestore', 'PlantUML'],
    links: [],
  },
  {
    id: 'fasalsetu',
    name: 'FasalSetu',
    status: 'Prototype',
    statusNote: 'Working prototype, not deployed',
    tagline: 'Soil-sensor readings and a conversational advisor combined into personalized crop guidance for farmers.',
    problem:
      'Crop advice is usually generic. FasalSetu ties guidance to what the farmer\u2019s own field is reporting, and delivers it in a conversation rather than a dashboard they have to interpret.',
    users: 'Farmers, with a focus on rural digital adoption.',
    role: 'Designed and built the hardware-software system, the AI advisory layer and the business model.',
    approach:
      'Treat the sensor as the source of truth and the chatbot as the interface. Soil data triggers alerts automatically. The advisor explains what the numbers mean and what to do next, in Hindi, English or a mix of both.',
    architecture: [
      { title: 'Soil sensors', detail: 'NPK and moisture readings' },
      { title: 'Analysis', detail: 'Automated alerts, pest and disease detection' },
      { title: 'AI advisor', detail: 'Gemini chatbot with real-time, personalized guidance' },
      { title: 'Farmer', detail: 'Crop guidance, scheme discovery' },
    ],
    implementation: [
      'Integrated soil sensors (NPK, moisture) with a Gemini-powered chatbot that answers in Hindi, English or mixed Hindi-English.',
      'Plant disease detection with an EfficientNet model trained on the PlantVillage dataset (38 disease classes).',
      'Government scheme finder using ChromaDB semantic search over 50+ central and state schemes.',
      'Designed an in-house smart plant-growing kit for supplementary farmer income, plus a model combining kit sales, AI advisory subscriptions and platform partnerships.',
    ],
    results: [],
    resultsNote: 'No quantified results yet. This is a prototype, and I would rather show none than invent them.',
    learned:
      'A conversational layer lets one interface explain sensor data and model output in the farmer\u2019s own language. The harder part is the hardware-to-software loop, because a model is only as useful as the readings it receives.',
    stack: ['Gemini', 'Firebase', 'ChromaDB', 'EfficientNet', 'IoT sensors', 'React'],
    links: [],
  },
  {
    id: 'mannmitra',
    name: 'MannMitra',
    status: 'Prototype',
    statusNote: 'Working prototype, not deployed',
    tagline: 'A mental-wellness platform with AI conversation, voice therapy and on-device emotion detection.',
    problem:
      'Mental-health support has to feel culturally familiar, treat sensitive data carefully, and recognise when a conversation signals real risk.',
    users: 'People looking for private, accessible mental-wellness support.',
    role: 'Built the full stack: backend architecture, AI services, crisis engine and security.',
    approach:
      'Keep the most sensitive signal on the device and put a safety net behind every conversation. Camera-based emotion detection is processed locally. A separate crisis engine assesses risk and escalates.',
    architecture: [
      { title: 'Client', detail: 'PWA with chat, voice and camera input' },
      { title: 'Local processing', detail: 'Emotion detection stays on the device' },
      { title: 'Auth', detail: 'Firebase Auth, JWT' },
      { title: 'AI services', detail: 'Gemini / Vertex AI conversation with cultural adaptation' },
      { title: 'Crisis engine', detail: 'Risk assessment and emergency escalation protocols' },
    ],
    implementation: [
      'Full-stack platform with AI conversation, voice therapy and camera-based real-time emotion detection, adapted for cultural sensitivity.',
      'Multi-service backend on Google Gemini / Vertex AI and Firebase Firestore.',
      'Crisis detection engine with risk assessment and emergency escalation protocols.',
      'End-to-end security with JWT, Firebase Auth and local-first emotion processing, built with GDPR requirements in mind, plus PWA support.',
    ],
    results: [],
    resultsNote: 'No quantified results yet. This is a prototype, and I would rather show none than invent them.',
    learned:
      'For sensitive domains the architecture is the product. Deciding what never leaves the device, and what happens when risk is detected, shaped the system more than the choice of model.',
    stack: ['Gemini / Vertex AI', 'Firebase Firestore', 'Firebase Auth', 'JWT', 'PWA', 'React'],
    links: [],
  },
]

export type SkillGroup = { title: string; evidence: string; items: string[] }

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    evidence: 'Python in all three projects and the CodeAlpha internship. C and data structures from coursework.',
    items: ['Python', 'C', 'JavaScript', 'Data Structures'],
  },
  {
    title: 'AI and machine learning',
    evidence: 'Retrieval and generation in DocuMind. NLP in the CodeAlpha chatbot. Vision in FasalSetu.',
    items: [
      'Generative AI',
      'RAG',
      'Hybrid retrieval (BM25 + vectors)',
      'Cross-encoder reranking',
      'Google Gemini / Vertex AI',
      'NLP (NLTK, spaCy)',
      'Machine Learning',
      'EfficientNet',
    ],
  },
  {
    title: 'Backend and data',
    evidence: 'Firebase backs MannMitra and FasalSetu. ChromaDB backs DocuMind and FasalSetu.',
    items: ['Firebase Firestore', 'Firebase Auth', 'Cloud Functions', 'ChromaDB', 'JWT', 'Data Analysis'],
  },
  {
    title: 'Frontend',
    evidence: 'Used for the interfaces of all three projects.',
    items: ['React.js', 'Tailwind CSS', 'PWA'],
  },
  {
    title: 'Tools',
    evidence: 'Version control throughout. PlantUML for generated diagrams in DocuMind.',
    items: ['Git', 'GitHub', 'PlantUML'],
  },
]

export type TimelineEntry = {
  kind: 'Research' | 'Hackathon' | 'Internship'
  title: string
  org: string
  date: string
  points: string[]
}

export const timeline: TimelineEntry[] = [
  {
    kind: 'Research',
    title: 'DocuMind: AI-Powered BRD Generation System',
    org: 'IEEE International Conference on Responsible Artificial Intelligence (IRAI 2026), Melbourne',
    date: '2026',
    points: [
      'Paper accepted and presented. Selected from 575 submissions across 57 countries.',
      'Engineered and architected an end-to-end RAG pipeline: semantic labeling with Gemini, cosine-similarity ranking over a Firestore vector store.',
      'Designed the BRD Synthesis Engine and a three-dimension quality scoring algorithm with an AI Quality Auditor.',
    ],
  },
  {
    kind: 'Hackathon',
    title: '3rd place, Build With Gemini Hackathon',
    org: 'Design Innovation Centre, University of Delhi',
    date: '21 Nov 2025',
    points: [
      'Placed 3rd among 60+ teams in the finale, presenting an AI-driven mental health solution.',
      'Delivered a working prototype under strict timelines, then revised scalability and technical depth using feedback from judges.',
    ],
  },
  {
    kind: 'Internship',
    title: 'Artificial Intelligence Intern',
    org: 'CodeAlpha',
    date: 'Jan 2025 \u2013 Feb 2025',
    points: [
      'Built a language translation tool on external APIs for multi-language text conversion.',
      'Built an FAQ chatbot with NLTK and spaCy that answers user queries instantly.',
      'Delivered both projects within the one-month internship.',
    ],
  },
]

export const education = [
  { school: 'University of Delhi, Faculty of Technology', detail: 'B.Tech, Computer Science. 8.91 CGPA', date: '2024 \u2013 2028' },
  { school: 'Delhi Public School', detail: 'Higher Secondary Certificate. 92%', date: '2022 \u2013 2024' },
  { school: 'Ryan International School', detail: 'Secondary School Certificate. 96.8%', date: '2014 \u2013 2022' },
]

export const certifications = [
  'Introduction to Artificial Intelligence, IBM',
  'Machine Learning for All, University of London',
  'Natural Language Processing (certificate)',
  'Generative AI (certificate)',
  'Introduction to Git and GitHub, Google',
  'Introduction to Game Development using Scratch, Coursera',
]

export const about = {
  paragraphs: [
    'I like problems where messy, unstructured input has to become something a person can trust: scattered chat and documents turned into a requirements document, noisy sensor readings turned into advice a farmer can act on, a conversation that has to notice when someone is at risk.',
    'I build end to end, from system architecture to deployment, and I pick the technique that fits the failure mode. In DocuMind that meant hybrid retrieval and a quality auditor. In MannMitra it meant keeping sensitive signals on the device. I also practise data structures and competitive programming to keep my fundamentals sharp.',
    'I am looking for internships and research work in applied AI and software engineering, where I can own a piece of a system and explain why it works.',
  ],
  focus: ['Retrieval-augmented generation', 'Applied NLP', 'Full-stack AI products', 'Healthcare, agriculture, enterprise'],
}
