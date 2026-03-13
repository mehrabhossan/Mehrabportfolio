export interface PersonalInfo {
  name: string;
  initials: string;
  title: string;
  photo?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Mehrab Hossan Mahin",
  initials: "MH",
  title: "NOC Engineer",
  photo: "/src/assets/myself.png",
};

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  status: "deployed" | "active" | "completed";
}

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
  type: "current" | "previous" | "education";
}

export interface ToolkitItem {
  name: string;
  category: string;
  icon: string;
}

export interface StatItem {
  label: string;
  icon: string;
}

export const stats: StatItem[] = [
  { label: "MTCNA Certified", icon: "shield-check" },
  { label: "3+ Years Experience", icon: "clock" },
  { label: "NOC Specialist", icon: "monitor" },
  { label: "ISP Infrastructure", icon: "server" },
  { label: "Network Monitoring", icon: "activity" },
];

export const projects: Project[] = [
  {
    id: "hotel-network",
    title: "Hotel Full-Stack Network Deployment",
    subtitle: "Enterprise Hospitality Infrastructure",
    description:
      "Designed and deployed a complete network infrastructure for a multi-floor hotel including guest Wi-Fi, VLAN segmentation, IP telephony, and centralized management through MikroTik routers and managed switches.",
    tags: ["MikroTik", "VLANs", "QoS", "Wi-Fi", "IP Telephony"],
    metrics: [
      { label: "Floors Covered", value: "5+" },
      { label: "Access Points", value: "30+" },
      { label: "Uptime", value: "99.9%" },
    ],
    status: "deployed",
  },
  {
    id: "ielts-center",
    title: "IELTS Exam Center Setup",
    subtitle: "High-Reliability Testing Infrastructure",
    description:
      "Built a redundant, low-latency network for an IELTS examination center. Implemented dual-WAN failover, bandwidth management, and strict firewall policies to ensure uninterrupted exam sessions.",
    tags: ["Failover", "Firewall", "Bandwidth Mgmt", "Redundancy"],
    metrics: [
      { label: "Redundancy", value: "Dual-WAN" },
      { label: "Latency", value: "<5ms" },
      { label: "Reliability", value: "99.99%" },
    ],
    status: "active",
  },
  {
    id: "coaching-center",
    title: "Coaching Center Infrastructure",
    subtitle: "Educational Network Design",
    description:
      "Architected scalable network infrastructure for a coaching center with multiple classrooms, computer labs, and administrative offices. Implemented content filtering, user authentication, and bandwidth allocation per zone.",
    tags: ["Hotspot", "Content Filter", "User Auth", "Scalable"],
    metrics: [
      { label: "Zones", value: "8+" },
      { label: "Concurrent Users", value: "200+" },
      { label: "Labs Connected", value: "4" },
    ],
    status: "completed",
  },
];

export const timeline: TimelineEntry[] = [
  {
    id: "noc-engineer",
    year: "Jun 2024 — Present",
    title: "NOC Technical Support Engineer",
    company: "SOL-BD",
    description:
      "Monitoring and maintaining ISP backbone infrastructure. Handling escalated network incidents, configuring MikroTik and Cisco devices, and ensuring SLA compliance for enterprise clients.",
    type: "current",
  },
  {
    id: "admin-support",
    year: "May 2024 — Nov 2024",
    title: "Admin & Customer Experience",
    company: "CubeIn Ltd.",
    description:
      "Managed customer onboarding, service provisioning, and first-level technical support. Gained deep understanding of ISP operations and customer lifecycle management.",
    type: "previous",
  },
  {
    id: "education",
    year: "2024 — Present",
    title: "BSc in Computer Engineering",
    company: "University",
    description:
      "Pursuing Bachelor of Computer Engineering with focus on networking, system administration, and software development fundamentals.",
    type: "education",
  },
];

export const toolkit: ToolkitItem[] = [
  { name: "MikroTik RouterOS", category: "Routing & Switching", icon: "router" },
  { name: "Cisco IOS", category: "Routing & Switching", icon: "network" },
  { name: "Python", category: "Automation", icon: "code" },
  { name: "Zabbix / PRTG", category: "Monitoring", icon: "activity" },
  { name: "Wireshark", category: "Analysis", icon: "search" },
  { name: "Linux / CLI", category: "Systems", icon: "terminal" },
  { name: "Winbox", category: "Management", icon: "settings" },
  { name: "Grafana", category: "Visualization", icon: "bar-chart" },
];
