import heroImg from '../assets/hero.png'

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Industries', to: '/industries' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const homeMetrics = [
  { value: '3', label: 'major service pillars' },
  { value: '6+', label: 'industry focus areas' },
  { value: 'End-to-end', label: 'delivery and support model' },
  { value: 'Sri Lanka + South Asia', label: 'regional project reach' },
]

export const homeHero = {
  eyebrow: 'Building systems for modern facilities',
  title: 'BMS Solutions, ELV Systems, Networking Solutions, and Smart Building Technologies.',
  summary:
    'We provide integrated building automation, ELV systems, networking, and technology solutions across Sri Lanka and South Asia.',
  image: heroImg,
  imageAlt: 'Modern smart building interface and control dashboard',
  tags: ['BMS Solutions', 'Networking Solutions', 'ELV Solutions', 'Smart Building Technologies'],
}

export const homeHighlights = [
  {
    icon: 'layers',
    title: 'Vendor-aware integration',
    text: 'Seamless deployment across major engineering platforms.',
  },
  {
    icon: 'target',
    title: 'Technical precision',
    text: 'Focus on accuracy in design and commissioning.',
  },
  {
    icon: 'shield-check',
    title: 'Reliable performance',
    text: 'Long-term dependability for critical facilities.',
  },
  {
    icon: 'globe',
    title: 'South Asian reach',
    text: 'Proven project delivery across the regional market.',
  },
]

export const serviceCards = [
  {
    slug: 'bms',
    title: 'BMS',
    eyebrow: 'Building Management Systems',
    description:
      'Building automation systems that unify HVAC, lighting, energy, and critical facilities control.',
    image: 'https://images.unsplash.com/photo-1558444479-c8f027d6a5ad?q=80&w=800&auto=format&fit=crop',
    icon: 'building',
    items: ['HVAC control', 'Lighting control', 'Energy management', 'System integration'],
    intro:
      'Our BMS projects connect major building systems into a single operational view so teams can monitor, optimize, and control environments efficiently.',
    whatWeDo: ['Design', 'Installation', 'Integration', 'Monitoring', 'Maintenance', 'Support'],
    industries: ['Pharmaceutical', 'Manufacturing', 'Hotels', 'Commercial Buildings'],
    faq: [
      {
        q: 'What is a building management system?',
        a: 'A BMS is a centralized platform that monitors and controls building services such as HVAC, lighting, and energy systems.',
      },
      {
        q: 'What are the main benefits?',
        a: 'Reduced energy waste, improved comfort, better visibility, and more reliable operations.',
      },
      {
        q: 'Can you customize the system?',
        a: 'Yes. Every project is tailored to the site requirements, vendor ecosystem, and operational goals.',
      },
    ],
    relatedProjects: ['majestic-city', 'kelun-lifesciences'],
  },
  {
    slug: 'elv',
    title: 'ELV',
    eyebrow: 'Extra-Low Voltage Systems',
    description:
      'Low-voltage infrastructure that supports safety, communications, and seamless site-wide connectivity.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    icon: 'zap',
    items: ['CCTV', 'Access control', 'Fire alarm systems', 'Communication systems'],
    intro:
      'ELV systems form the digital and physical backbone of a facility. We design and deliver solutions that improve safety, communication, and control.',
    whatWeDo: ['Design', 'Installation', 'Integration', 'Monitoring', 'Maintenance', 'Support'],
    industries: ['Hospitals', 'Hotels', 'Commercial Buildings', 'Mixed-Use Developments'],
    faq: [
      {
        q: 'What does ELV cover?',
        a: 'ELV covers systems such as CCTV, access control, fire alarms, intercoms, and structured communication networks.',
      },
      {
        q: 'Is ELV important for security?',
        a: 'Yes. It is essential for physical security, incident response, and daily operational control.',
      },
      {
        q: 'Can ELV integrate with BMS?',
        a: 'Absolutely. We frequently integrate ELV, BMS, and networking into one coordinated platform.',
      },
    ],
    relatedProjects: ['barcelo-whale-lagoon', 'colombo-port-city'],
  },
  {
    slug: 'networking-integration',
    title: 'Networking & Integration',
    eyebrow: 'Networking & Integration',
    description:
      'Reliable network architecture, structured cabling, and integrated control for modern facilities.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
    icon: 'network',
    items: ['Structured cabling', 'WiFi design', 'Core switches', 'Support and maintenance'],
    intro:
      'Modern buildings rely on secure and stable networks. We create the infrastructure that makes digital systems perform reliably.',
    whatWeDo: ['Design', 'Installation', 'Integration', 'Monitoring', 'Maintenance', 'Support'],
    industries: ['Manufacturing', 'Commercial Buildings', 'Healthcare', 'Education'],
    faq: [
      {
        q: 'Why is network design so important?',
        a: 'The network is the transport layer for nearly every smart building subsystem. Poor design creates instability and downtime.',
      },
      {
        q: 'Do you provide WiFi and data networking?',
        a: 'Yes. We design and deploy WiFi, data, switching, and structured cabling solutions.',
      },
      {
        q: 'Can you integrate third-party systems?',
        a: 'Yes. Integration is part of our core delivery model across multiple platforms and device types.',
      },
    ],
    relatedProjects: ['celogen-lanka', 'kanola-hospital'],
  },
  {
    slug: 'cyber-security',
    title: 'Cyber Security Solutions',
    eyebrow: 'Cyber Security Solutions',
    description:
      'Protection services that reduce risk across connected infrastructure and devices.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    icon: 'shield',
    items: ['Network hardening', 'Access policies', 'Monitoring', 'Incident response'],
    intro:
      'As buildings become more connected, cyber security becomes a core requirement. We help reduce risk across systems, devices, and operational access paths.',
    whatWeDo: ['Design', 'Installation', 'Integration', 'Monitoring', 'Maintenance', 'Support'],
    industries: ['Commercial Buildings', 'Healthcare', 'Manufacturing', 'Hotels'],
    faq: [
      {
        q: 'Why do smart buildings need cyber security?',
        a: 'Connected systems can be targeted if they are not properly protected. Security measures reduce exposure and keep operations safe.',
      },
      {
        q: 'Do you secure the network as well?',
        a: 'Yes. We address network segmentation, access controls, and operational policies where required.',
      },
      {
        q: 'Can you support existing infrastructure?',
        a: 'We can assess existing systems and recommend a practical improvement plan.',
      },
    ],
    relatedProjects: ['colombo-port-city'],
  },
  {
    slug: 'smart-home-automation',
    title: 'Smart Home Automation',
    eyebrow: 'Smart Home Automation',
    description:
      'Automation for comfort, convenience, and energy efficiency in residential and premium spaces.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop',
    icon: 'home',
    items: ['Lighting scenes', 'Climate control', 'Security integration', 'Mobile control'],
    intro:
      'Smart home automation connects comfort, convenience, and energy management into a responsive living environment.',
    whatWeDo: ['Design', 'Installation', 'Integration', 'Monitoring', 'Maintenance', 'Support'],
    industries: ['Residential', 'Luxury Villas', 'Hospitality Residences', 'Mixed-Use Developments'],
    faq: [
      {
        q: 'What can be automated in a home?',
        a: 'Lighting, climate, shading, security, AV, and access can all be integrated depending on project scope.',
      },
      {
        q: 'Is it only for luxury homes?',
        a: 'No. Solutions can be scaled for different budgets and requirements.',
      },
      {
        q: 'Can it be controlled from a phone?',
        a: 'Yes. Mobile and web interfaces are commonly part of the solution.',
      },
    ],
    relatedProjects: [],
  },
  {
    slug: 'solar-power',
    title: 'Solar Power',
    eyebrow: 'Solar Power',
    description:
      'Renewable power systems that support cost reduction and sustainability goals.',
    image: 'https://images.unsplash.com/photo-1509391366360-fe5bb6583e22?q=80&w=800&auto=format&fit=crop',
    icon: 'sun',
    items: ['Solar design', 'Inverters', 'Monitoring', 'Maintenance'],
    intro:
      'Solar solutions help organizations reduce grid dependence, control operating costs, and move toward sustainability targets.',
    whatWeDo: ['Design', 'Installation', 'Integration', 'Monitoring', 'Maintenance', 'Support'],
    industries: ['Commercial Buildings', 'Industrial Sites', 'Hospitality', 'Education'],
    faq: [
      {
        q: 'Can solar integrate with building systems?',
        a: 'Yes. Monitoring and energy management can be connected to broader facility systems.',
      },
      {
        q: 'Do you provide maintenance?',
        a: 'Yes. We provide ongoing support to preserve system performance over time.',
      },
      {
        q: 'Is solar suitable for commercial buildings?',
        a: 'In many cases, yes. We assess feasibility based on load, site, and ROI requirements.',
      },
    ],
    relatedProjects: [],
  },
  {
    slug: 'public-address-systems',
    title: 'Public Address Systems',
    eyebrow: 'Public Address Systems',
    description:
      'Clear communications and emergency broadcast infrastructure for safe, reliable messaging.',
    icon: 'volume-2',
    items: ['Paging', 'Evacuation alerts', 'Zone control', 'Voice messaging'],
    intro:
      'Public address systems are essential for communication in large facilities, especially where safety announcements and operational paging are required.',
    whatWeDo: ['Design', 'Installation', 'Integration', 'Monitoring', 'Maintenance', 'Support'],
    industries: ['Hospitals', 'Hotels', 'Commercial Buildings', 'Transport Hubs'],
    faq: [
      {
        q: 'Can PA be integrated with fire alarms?',
        a: 'Yes. Emergency voice messaging and alarm coordination are common requirements.',
      },
      {
        q: 'Is zoning possible?',
        a: 'Yes. We can design paging and broadcast zones by area or function.',
      },
      {
        q: 'Do you support maintenance?',
        a: 'Yes. We offer ongoing support and periodic testing plans.',
      },
    ],
    relatedProjects: [],
  },
  {
    slug: 'centralized-clock-systems',
    title: 'Centralized Clock Systems',
    eyebrow: 'Centralized Clock Systems',
    description:
      'Time synchronization systems for accurate coordination across buildings and operations.',
    icon: 'clock',
    items: ['Master clocks', 'Time sync', 'Display clocks', 'Distributed control'],
    intro:
      'Centralized clock systems are often overlooked, but they are vital for accurate scheduling, coordination, and emergency response in large facilities.',
    whatWeDo: ['Design', 'Installation', 'Integration', 'Monitoring', 'Maintenance', 'Support'],
    industries: ['Hospitals', 'Manufacturing', 'Education', 'Commercial Buildings'],
    faq: [
      {
        q: 'Why use a centralized clock system?',
        a: 'It keeps distributed clocks synchronized across the site for operational accuracy and coordination.',
      },
      {
        q: 'Can it integrate with other systems?',
        a: 'Yes. Clock systems can be tied into broader communications and safety infrastructure.',
      },
      {
        q: 'Is maintenance required?',
        a: 'Yes. Periodic checks help ensure synchronization and reliability.',
      },
    ],
    relatedProjects: [],
  },
  {
    slug: 'ems',
    title: 'EMS',
    eyebrow: 'Energy / Environment Management Systems',
    description:
      'Monitoring and optimization systems for energy, utility, and environmental performance.',
    icon: 'bar-chart',
    items: ['Energy dashboards', 'Utility monitoring', 'Alerts', 'Optimization'],
    intro:
      'EMS solutions help owners and operators understand usage patterns and improve efficiency across energy and environmental metrics.',
    whatWeDo: ['Design', 'Installation', 'Integration', 'Monitoring', 'Maintenance', 'Support'],
    industries: ['Commercial Buildings', 'Manufacturing', 'Hotels', 'Healthcare'],
    faq: [
      {
        q: 'What is the difference between EMS and BMS?',
        a: 'EMS focuses on energy and environmental performance, while BMS covers broader building control and automation.',
      },
      {
        q: 'Can EMS reduce operating costs?',
        a: 'Yes. Monitoring and optimization help identify inefficiencies and reduce waste.',
      },
      {
        q: 'Is reporting included?',
        a: 'Yes. Dashboards and reports are typically part of the solution.',
      },
    ],
    relatedProjects: [],
  },
]

export const serviceOfferings = [
  {
    title: 'DATA Network Systems',
    summary: 'Structured LAN/WAN design, configuration, cabling, and commissioning for dependable site connectivity.',
    accent: 'Network backbone',
    services: [
      'Firewall configuration (LAN / WAN)',
      'Router configuration (LAN / WAN)',
      'Core network configuration (LAN / WAN)',
      'L2 network configuration with any topology',
      'Network passive cabling (Cat 5/6/7) and commissioning',
    ],
  },
  {
    title: 'Communication & Media Systems',
    summary: 'Reliable voice, wireless, television, and announcement systems for daily operations and guest experience.',
    accent: 'Communication systems',
    services: [
      'Wireless Network System',
      'Telephone System',
      'Television System',
      'Public Address and Audio System',
      'Smart Clock System',
    ],
  },
  {
    title: 'Security & Life Safety Systems',
    summary: 'Integrated protection, access, response, and monitoring systems for commercial and critical environments.',
    accent: 'Safety and control',
    services: [
      'Closed-Circuit Television System',
      'Access Control System',
      'Emergency Alarm System',
      'Nurse Call System for Hospitals',
      'Guard Tour System',
    ],
  },
  {
    title: 'Smart Building Systems',
    summary: 'Automation and intelligent control platforms that improve comfort, visibility, and operational efficiency.',
    accent: 'Smart operations',
    services: [
      'Guest Room Management System',
      'IOT Solutions',
      'Building Management System',
    ],
  },
]

export const whyChooseUs = [
  {
    title: 'Smart Building Solutions',
    description: 'Human-centered automation designed for energy efficiency, comfort, and visibility.',
  },
  {
    title: 'Security Systems',
    description: 'CCTV, access control, perimeter systems, and fire safety designed for real operations.',
  },
  {
    title: 'Automation',
    description: 'Centralized monitoring and intelligent control that reduces manual intervention.',
  },
  {
    title: 'Long-term Support',
    description: 'Maintenance, tuning, and lifecycle support to keep systems dependable after handover.',
  },
]

export const serviceCategories = [
  {
    title: 'Building Management Systems',
    description: 'Design, installation, and maintenance of integrated building automation platforms.',
    points: ['HVAC automation', 'Lighting automation', 'Energy monitoring', 'Centralized control'],
  },
  {
    title: 'ELV & Networking Solutions',
    description: 'Structured low-voltage systems that connect devices, people, and critical services.',
    points: ['Structured cabling', 'Access control', 'CCTV', 'Fire alarms'],
  },
  {
    title: 'CCTV & Access Control',
    description: 'Physical security solutions for site protection, monitoring, and managed entry.',
    points: ['Video surveillance', 'Door controllers', 'Visitor flows', 'Audit trails'],
  },
  {
    title: 'Networking & Integration',
    description: 'Infrastructure, communication, and interoperability across subsystems and teams.',
    points: ['LAN/WAN', 'WiFi', 'Gateways and APIs', 'Monitoring dashboards'],
  },
  {
    title: 'Cyber Security Solutions',
    description: 'Protection services that reduce risk across connected infrastructure and devices.',
    points: ['Network hardening', 'Access policies', 'Monitoring', 'Incident response'],
  },
]

export const partners = [
  'Schneider Electric',
  'Siemens',
  'Honeywell',
  'ABB',
  'Johnson Controls',
  'Cisco',
  'Hikvision',
  'Axis',
]

export const solutionCards = [
  'BMS',
  'EMS',
  'ELV',
  'Smart Home Automation',
  'Public Address Systems',
  'Solar Power',
  'Centralized Clock Systems',
]

export const projects = [
  {
    slug: 'barcelo-whale-lagoon',
    name: 'Barcelo Whale Lagoon Maldives',
    type: 'ELV System Deployment',
    location: 'Maldives',
    industry: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop',
    overview:
      'A comprehensive hospitality project focused on the deployment of a highly dependable ELV infrastructure across all guest rooms, public spaces, and operational areas. This large-scale resort required a sophisticated integration of multiple systems to ensure seamless guest experiences and robust operational safety. Our team managed the end-to-end design and implementation, ensuring that the technology blends perfectly with the resort’s aesthetic while providing the powerful backbone needed for modern digital services, high-speed connectivity, and site-wide security monitoring.',
    challenge:
      'The client needed a dependable low-voltage backbone that could support guest experience and operational safety without disrupting the resort environment.',
    solution:
      'We deployed ELV systems with careful site coordination, including structured communications, security, and integration-ready infrastructure.',
    results: ['Improved operational visibility', 'Cleaner infrastructure management', 'Reduced maintenance complexity'],
    technologyStack: ['Structured cabling', 'CCTV', 'Access Control', 'Communications'],
    industries: ['Hospitality', 'Resort Operations'],
  },
  {
    slug: 'kelun-lifesciences',
    name: 'Kelun Lifesciences',
    type: 'Building Management System',
    location: 'Sri Lanka',
    industry: 'Pharmaceutical',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    overview:
      'A state-of-the-art pharmaceutical manufacturing facility requiring absolute precision in automation and environmental monitoring. For Kelun Lifesciences, we implemented a sophisticated Building Management System (BMS) designed to maintain strict climate controls and monitor critical process points. This system ensures full compliance with international pharmaceutical standards while optimizing energy usage and providing the facility management team with real-time data insights into every aspect of the building’s performance, from cleanroom stability to utility efficiency.',
    challenge:
      'The client required tighter visibility and control of building services to support stable operations and efficiency.',
    solution:
      'We implemented a BMS framework to coordinate HVAC and critical monitoring points from a centralized platform.',
    results: ['Better system visibility', 'Improved operational control', 'Supportable lifecycle management'],
    technologyStack: ['BMS controllers', 'HVAC automation', 'Energy monitoring', 'Dashboards'],
    industries: ['Pharmaceutical', 'Controlled Environments'],
  },
  {
    slug: 'celogen-lanka',
    name: 'Celogen Lanka',
    type: 'Network + WiFi + BMS',
    location: 'Sri Lanka',
    industry: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
    overview:
      'A complex multi-system integration for a leading manufacturing facility, combining high-speed network infrastructure, facility-wide WiFi connectivity, and a robust Building Management System. The project focused on creating a unified digital environment where operational technology (OT) and information technology (IT) work in harmony. By bridging these systems, we provided Celogen Lanka with a scalable platform that supports their current production needs while offering the flexibility to integrate future smart manufacturing technologies and advanced data analytics.',
    challenge:
      'The organization needed reliable connectivity for operations plus a building control layer that could support future expansion.',
    solution:
      'We delivered network, WiFi, and BMS integration to support operational continuity and building visibility.',
    results: ['Stronger connectivity', 'Integrated control layer', 'Scalable future-ready design'],
    technologyStack: ['LAN/WAN', 'WiFi', 'BMS integration', 'Monitoring'],
    industries: ['Manufacturing', 'Operations'],
  },
  {
    slug: 'colombo-port-city',
    name: 'Colombo Port City',
    type: 'ICT + CCTV + Access Control',
    location: 'Colombo',
    industry: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    overview:
      'As one of the most prestigious developments in the region, the Colombo Port City project demanded a world-class ICT and security infrastructure. Our contribution involved the design and deployment of advanced CCTV surveillance systems and sophisticated access control mechanisms integrated with a high-performance ICT backbone. This system provides comprehensive perimeter security and internal monitoring for a dense commercial environment, ensuring a safe and connected space for businesses, residents, and visitors alike in this landmark maritime city.',
    challenge:
      'The project demanded consistent ICT performance together with strong perimeter and entry control across a complex site.',
    solution:
      'We implemented ICT, CCTV, and access control systems to support site operations, visibility, and security.',
    results: ['Improved security operations', 'Centralized ICT support', 'Site-wide monitoring readiness'],
    technologyStack: ['ICT infrastructure', 'CCTV', 'Access Control', 'Security integration'],
    industries: ['Commercial', 'Mixed-Use'],
  },
  {
    slug: 'kanola-hospital',
    name: 'Kanola Hospital',
    type: 'Hospital ICT Infrastructure',
    location: 'Sri Lanka',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    overview:
      'A critical healthcare infrastructure project aimed at providing Kanola Hospital with a robust and redundant ICT foundation. In a medical environment, system uptime is paramount; therefore, we designed a high-availability network with logical segmentation to separate clinical data, administrative traffic, and guest WiFi. This implementation supports modern digital healthcare applications, electronic medical records, and real-time communication between departments, ensuring that the hospital’s digital services are as reliable as its medical care.',
    challenge:
      'The hospital needed a stable and well-organized ICT foundation to serve clinical and administrative functions.',
    solution:
      'We designed and delivered hospital ICT infrastructure with attention to uptime, segmentation, and maintainability.',
    results: ['Improved uptime', 'Cleaner support structure', 'Reliable digital operations'],
    technologyStack: ['Structured cabling', 'Switching', 'WiFi', 'Network support'],
    industries: ['Healthcare', 'Hospitals'],
  },
  {
    slug: 'majestic-city',
    name: 'Majestic City',
    type: 'Chiller Plant BMS',
    location: 'Colombo',
    industry: 'Commercial',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&auto=format&fit=crop',
    overview:
      'This major commercial renovation focused on the modernization of the Majestic City chiller plant through advanced BMS integration. We replaced aging controls with a centralized automation platform that provides deep visibility into cooling performance and energy consumption. The solution includes intelligent sequencing for chillers and pumps, real-time alerting for maintenance issues, and a user-friendly dashboard that allows facility managers to optimize the building’s thermal environment while significantly reducing operational costs and carbon footprint.',
    challenge:
      'The client needed stronger monitoring and control of the chiller plant to improve operational efficiency and response time.',
    solution:
      'We implemented a BMS solution for the chiller plant with monitoring and centralized control points.',
    results: ['Energy optimization', 'Greater control visibility', 'Improved maintenance planning'],
    technologyStack: ['BMS', 'Chiller controls', 'Energy monitoring', 'Central dashboards'],
    industries: ['Commercial Buildings', 'Retail'],
  },
]

export const industries = [
  {
    slug: 'pharmaceutical',
    title: 'Pharmaceutical',
    description: 'Controlled environments, compliance, and critical monitoring.',
    overview:
      'Pharmaceutical facilities require stable operations, environmental control, and well-documented infrastructure.',
    useCases: ['Controlled HVAC', 'Critical monitoring', 'Access control', 'Energy tracking'],
    recommendedServices: ['BMS', 'ELV', 'Networking & Integration'],
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    description: 'Reliable infrastructure for operations, safety, and uptime.',
    overview:
      'Manufacturing environments benefit from resilient networks, automation, and monitoring systems that reduce downtime.',
    useCases: ['Plant automation', 'Network reliability', 'Security systems', 'Utilities monitoring'],
    recommendedServices: ['BMS', 'Networking & Integration', 'Cyber Security Solutions'],
  },
  {
    slug: 'hotels',
    title: 'Hotels',
    description: 'Guest comfort, energy optimization, and seamless services.',
    overview:
      'Hotels need smooth guest experience, reliable communications, and efficient building performance.',
    useCases: ['Guest room systems', 'Security and access', 'Energy management', 'PA systems'],
    recommendedServices: ['BMS', 'ELV', 'Public Address Systems'],
  },
  {
    slug: 'commercial-buildings',
    title: 'Commercial Buildings',
    description: 'Efficient building operations, security, and occupant experience.',
    overview:
      'Commercial buildings require integrated systems that support productivity, safety, and lifecycle efficiency.',
    useCases: ['Lobby access', 'Energy dashboards', 'CCTV', 'Centralized control'],
    recommendedServices: ['BMS', 'ELV & Networking Solutions', 'Cyber Security Solutions'],
  },
  {
    slug: 'healthcare',
    title: 'Hospitals',
    description: 'Reliable communications, safety systems, and integrated control.',
    overview:
      'Healthcare facilities depend on dependable infrastructure that supports clinical operations and patient safety.',
    useCases: ['ICT backbone', 'Emergency communications', 'Access control', 'Monitoring'],
    recommendedServices: ['ELV', 'Networking & Integration', 'Centralized Clock Systems'],
  },
  {
    slug: 'mixed-use',
    title: 'Mixed-Use Developments',
    description: 'Scalable systems for multi-tenant, multi-purpose environments.',
    overview:
      'Mixed-use developments need scalable architecture to coordinate multiple building uses, tenants, and services.',
    useCases: ['Multi-tenant control', 'Shared security', 'Energy management', 'Interoperability'],
    recommendedServices: ['BMS', 'ELV', 'Networking & Integration'],
  },
]

export const testimonials = [
  {
    quote:
      'Their BMS delivery improved visibility across critical systems and helped our teams respond faster.',
    author: 'Facilities Manager',
    sector: 'Pharmaceutical sector',
  },
  {
    quote:
      'The project team understood hospital operations and delivered a dependable ICT backbone with minimal disruption.',
    author: 'Project Director',
    sector: 'Hospitals',
  },
  {
    quote:
      'From design to handover, the team was structured, responsive, and technically strong.',
    author: 'Operations Lead',
    sector: 'Manufacturing facilities',
  },
]

export const articles = [
  {
    slug: 'smart-building-management-access-control',
    category: 'Building Management Systems',
    title: 'Smart Building Management & Access Control',
    summary: 'How integrated access and automation improve security, reporting, and day-to-day operations.',
    intro:
      'Smart building management becomes significantly more powerful when access control and automation are connected in one operational view.',
    challenges: [
      'Multiple standalone systems create fragmented control.',
      'Manual access and reporting slow down operations.',
      'Security and building teams often work in separate silos.',
    ],
    technology:
      'A connected platform can unify access, monitoring, and building automation to improve visibility and response times.',
    benefits: [
      'Improved security oversight',
      'Faster event response',
      'Better reporting and audit trails',
    ],
    recommendations:
      'Start with a clear system architecture and define how access, monitoring, and automation should interact across the site.',
    conclusion:
      'With a well-planned integration strategy, access control becomes part of a smarter and more responsive facility.',
  },
  {
    slug: 'smart-building-management-home-automation',
    category: 'Home Automation',
    title: 'Smart Building Management and Home Automation',
    summary: 'Where commercial-grade control ideas meet comfort, convenience, and energy reduction.',
    intro:
      'Home automation has matured into a practical and scalable way to improve comfort, convenience, and energy use.',
    challenges: [
      'Complex interfaces reduce adoption.',
      'Disconnected devices limit value.',
      'Energy usage can be difficult to understand without monitoring.',
    ],
    technology:
      'Unified control scenes, sensors, and mobile interfaces make homes easier to manage while still supporting advanced functionality.',
    benefits: ['Comfort control', 'Energy savings', 'Simplified user experience'],
    recommendations:
      'Focus on user experience first, then add automation depth based on real lifestyle requirements.',
    conclusion:
      'When designed well, home automation improves daily life without adding complexity.',
  },
  {
    slug: 'future-of-bms',
    category: 'BMS Strategy',
    title: 'Future of Building Management Systems',
    summary: 'Key trends in analytics, predictive maintenance, and connected facility management.',
    intro:
      'The next generation of BMS is becoming more intelligent, more connected, and more focused on measurable outcomes.',
    challenges: [
      'Legacy systems often lack data visibility.',
      'Maintenance is still too reactive in many facilities.',
      'Owners need better insight into energy and performance trends.',
    ],
    technology:
      'Analytics, dashboards, and connected sensors are transforming BMS from a control system into an operations platform.',
    benefits: [
      'Predictive maintenance',
      'Data-driven decision making',
      'Improved sustainability reporting',
    ],
    recommendations:
      'Invest in scalable infrastructure and establish clear performance metrics from the beginning of each project.',
    conclusion:
      'A modern BMS is no longer just about control—it is a strategic tool for building performance.',
  },
]

export const contactDetails = {
  phones: ['+94 777 226 444', '+94 117 221 747', '+94 719 557 557'],
  email: 'info@ispl.com',
  hours: 'Monday - Friday : 08.00 - 17:00',
  offices: [
    '301/2, Mihidu Mawatha, Makola North, Makola, Sri Lanka',
    '18, First Floor, Regency Park Commercial Unit, Pallekale, Kundasale, Sri Lanka',
  ],
}

export const getServiceBySlug = (slug) => serviceCards.find((service) => service.slug === slug)
export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug)
export const getIndustryBySlug = (slug) => industries.find((industry) => industry.slug === slug)
export const getArticleBySlug = (slug) => articles.find((article) => article.slug === slug)
