import React from 'react';
import {
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle,
  Play,
  Download,
  ExternalLink,
  Zap,
  Users,
  Target,
  TrendingUp,
  Award,
  Lightbulb,
  BarChart,
  Activity,
  Briefcase,
  PieChart,
  Layers,
  Compass,
  BadgeCheck,
  Building2,
  Goal,
  Network,
} from 'lucide-react';
import Image from 'next/image';

const NewPage: React.FC = () => {
  const services = [
    {
      title: 'Digital Transformation & Automation',
      description:
        'Complete digital overhaul services to modernize your business operations and implement cutting-edge automation solutions.',
      icon: <Layers className="w-8 h-8" />,
      image: '/images/digital-transformation.jpg',
    },
    {
      title: 'CRM Systems Implementation',
      description:
        'End-to-end CRM solutions tailored to your business needs, from selection to implementation and training.',
      icon: <Network className="w-8 h-8" />,
      image: '/images/crm-implementation.jpg',
    },
    {
      title: 'Project & Operations Management',
      description:
        'Streamline your operations with expert project management methodologies and operational efficiency improvements.',
      icon: <Activity className="w-8 h-8" />,
      image: '/images/project-management.jpg',
    },
    {
      title: 'Growth Marketing & Funnel Strategy',
      description:
        'Data-driven marketing strategies and sales funnel optimization to accelerate your business growth.',
      icon: <TrendingUp className="w-8 h-8" />,
      image: '/images/growth-marketing.jpg',
    },
    {
      title: 'Brand Building & Market Positioning',
      description:
        'Develop a powerful brand identity and strategic market positioning to stand out from competitors.',
      icon: <BarChart className="w-8 h-8" />,
      image: '/images/brand-building.jpg',
    },
    {
      title: 'Client Experience & Account Management',
      description:
        'Enhance customer satisfaction and retention through optimized client experience strategies.',
      icon: <Users className="w-8 h-8" />,
      image: '/images/client-experience.jpg',
    },
    {
      title: 'Business Strategy & Consulting',
      description:
        'Comprehensive business consulting services to develop strategies for long-term success and scalability.',
      icon: <Lightbulb className="w-8 h-8" />,
      image: '/images/business-strategy.jpg',
    },
  ];

  const latestUpdates = [
    {
      id: 1,
      title: 'Digital Transformation Masterclass',
      description:
        'Complete 12-week program covering advanced digital transformation strategies that scale businesses',
      category: 'COURSE LAUNCH',
      date: 'March 20, 2025',
      status: 'NEW',
      type: 'course',
      price: '$1,997',
      features: [
        '12 Live Sessions',
        'Private Community',
        'Templates & Tools',
        '1-on-1 Support',
      ],
      image: '/images/digital-masterclass.jpg',
    },
    {
      id: 2,
      title: 'CRM Implementation Toolkit 3.0',
      description:
        'Updated toolkit with 50+ templates, frameworks, and automation scripts for complete CRM transformation',
      category: 'RESOURCE UPDATE',
      date: 'March 15, 2025',
      status: 'UPDATED',
      type: 'toolkit',
      price: 'FREE',
      features: [
        '50+ Templates',
        'Automation Scripts',
        'Process Frameworks',
        'Video Tutorials',
      ],
      image: '/images/crmm-toolkit.jpg',
    },
    {
      id: 3,
      title: 'Growth Marketing Accelerator Program',
      description:
        '6-month intensive program to master growth marketing and funnel optimization strategies',
      category: 'PROGRAM LAUNCH',
      date: 'March 10, 2025',
      status: 'LAUNCHING SOON',
      type: 'program',
      price: '$4,997',
      features: [
        '6 Months Coaching',
        'Weekly Group Calls',
        'Done-with-You Funnels',
        'Marketing Automation',
      ],
      image: '/images/growth-accelerator.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-[#151515] text-white">
      {/* Services Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 text-sm font-bold uppercase tracking-wider mb-6">
              SPECIALIZATIONS
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-8">
              MY <span className="text-yellow-400">EXPERTISE</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With over 7 years of experience, I specialize in transforming
              businesses through digital innovation and strategic growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-lg hover:border-yellow-400 transition-colors group"
              >
                <div className="relative h-100 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Launches */}
      <div className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 text-sm font-bold uppercase tracking-wider mb-6">
              LATEST LAUNCHES
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-8">
              NEW <span className="text-yellow-400">RELEASES</span>
            </h2>
          </div>

          <div className="space-y-12">
            {latestUpdates.map((update, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={update.image}
                      alt={update.title}
                      width={800}
                      height={450}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <Play className="w-10 h-10" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase rounded">
                      {update.status}
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="inline-block bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4">
                    {update.category}
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    {update.title}
                  </h3>

                  <p className="text-gray-300 mb-8 text-lg">
                    {update.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {update.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-8">
                    <div className="text-3xl font-black text-yellow-400">
                      {update.price}
                    </div>
                    <div className="text-sm text-gray-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {update.date}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="bg-yellow-400 text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-yellow-300 transition-colors flex items-center gap-2">
                      {update.type === 'course'
                        ? 'Enroll Now'
                        : update.type === 'toolkit'
                        ? 'Download'
                        : 'Join Program'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 font-bold uppercase tracking-wider hover:bg-yellow-400 hover:text-black transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
