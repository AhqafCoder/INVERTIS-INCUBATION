"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

// Program data (same as in the main page)
const programs = [
  {
    title: "Webinar on National Startup Day",
    description: "Theme: Ignite Innovation – Start Local, Scale Global. Expert talk by Rahul Naidu on startup growth and innovation strategies.",
    fullContent: "On 16 January 2025, Invertis Innovation & Incubation Centre hosted a special webinar on National Startup Day with the theme 'Ignite Innovation – Start Local, Scale Global.' The event featured Rahul Naidu, a renowned expert in startup growth and innovation strategies, who shared valuable insights on navigating the entrepreneurial journey from local roots to global expansion. The session covered critical topics including business model validation, market entry strategies, scaling challenges, and investor readiness. Participants gained practical knowledge on leveraging local resources while building globally competitive startups.",
    date: "16 January 2025",
    sortDate: new Date("2025-01-16"),
    category: "Special Event",
    image: "/assets/national-startup-day 2025/nationalstartup.jpg",
    slug: "webinar-national-startup-day-2025"
  },
  {
    title: "Expert Talk on Design Thinking in Fashion",
    description: "Revolutionizing Fashion with Design Thinking to enhance creative problem-solving and innovation skills.",
    fullContent: "On 30th January 2025, our centre organized an expert talk focusing on the application of Design Thinking principles in the fashion industry. This innovative session explored how design thinking methodologies can revolutionize fashion by enhancing creative problem-solving and innovation skills. The workshop covered human-centered design approaches, prototyping techniques, and iterative development processes specific to fashion entrepreneurship. Participants learned how to apply these frameworks to create customer-centric fashion solutions that address real market needs.",
    date: "30th January 2025",
    sortDate: new Date("2025-01-30"),
    category: "Expert Talk",
    image: "/assets/design-thinking-fashion/fashion design workshop.jpeg",
    slug: "expert-talk-design-thinking-fashion"
  },
  {
    title: "Workshop on Startup Scaling & Market Expansion",
    description: "From Startup to Scale-Up: Strategies for Sustainable Growth & Market Expansion. Led by Om Raj Singh focusing on entrepreneurial readiness.",
    fullContent: "This comprehensive workshop, held on 16 January 2025 as part of National Startup Day celebrations, focused on the critical transition from startup to scale-up. Led by Om Raj Singh, the session provided actionable strategies for sustainable growth and market expansion. Topics included building scalable business models, resource optimization, talent acquisition and retention, funding strategies for growth stages, and building strategic partnerships. The workshop emphasized entrepreneurial readiness and the mindset required to navigate the challenges of rapid growth while maintaining company culture and values.",
    date: "16 January 2025",
    sortDate: new Date("2025-01-16"),
    category: "Workshop",
    image: "/assets/National startup day 2026/National Startup Day.png",
    slug: "workshop-startup-scaling-market-expansion"
  },
  {
    title: "Business Development Workshop",
    description: "Strengthening entrepreneurial competencies and market-oriented thinking. Session by Ravi Kumar on brand strategy and customer engagement.",
    fullContent: "Our Business Development Workshop, conducted on 10th March 2025, was designed to strengthen entrepreneurial competencies and develop market-oriented thinking among aspiring entrepreneurs. Led by Ravi Kumar, an expert in brand strategy and customer engagement, the session covered essential topics including market research and analysis, competitive positioning, brand identity development, customer acquisition strategies, and relationship management. Participants gained practical skills in creating effective business development plans and implementing customer-centric growth strategies.",
    date: "10th March 2025",
    sortDate: new Date("2025-03-10"),
    category: "Workshop",
    image: "/assets/Business development/businessdev.jpg",
    slug: "business-development-workshop"
  },
  {
    title: "Interactive Session on Brand Personality for Startups",
    description: "Focus on personal branding, startup identity, and market positioning. Conducted by Raunaq Chawla for student startups.",
    fullContent: "This interactive session, held on 7th March 2025, focused on the critical aspects of brand personality development for startups. Conducted by Raunaq Chawla, the workshop emphasized personal branding, startup identity creation, and strategic market positioning. Students learned how to define their unique value proposition, create consistent brand messaging, develop visual identity systems, and communicate their brand story effectively. The session included hands-on exercises where participants worked on their own startup's brand personality, receiving personalized feedback and guidance.",
    date: "7th March 2025",
    sortDate: new Date("2025-03-07"),
    category: "Workshop",
    image: "/assets/brand-personality/brandpersonality.jpg",
    slug: "brand-personality-startups"
  },
  {
    title: "MoU Signing for Incubation Support",
    description: "MoU signing with Mr. Professional to strengthen incubation, mentorship, and industry collaboration for student startups.",
    fullContent: "Invertis Innovation & Incubation Centre recently conducted a significant MoU signing ceremony to strengthen our incubation ecosystem. This partnership aims to provide enhanced support to student startups through expert mentorship, industry connections, and collaborative opportunities. The agreement encompasses several key areas including mentorship programs, access to industry experts, networking events, resource sharing, and potential investment opportunities. This collaboration marks a significant step in our mission to create a robust support system for aspiring entrepreneurs at Invertis University.",
    date: "Recently Conducted",
    sortDate: new Date("2024-12-01"),
    category: "Partnership",
    image: "/assets/Mou/Mou 1.jpeg",
    slug: "mou-signing-incubation-support"
  },
  {
    title: "Shark Tank Invertis - Season 1",
    description: "An exciting 3-phase event where students present innovative ideas to compete for the chance to turn their concepts into reality.",
    fullContent: "Shark Tank Invertis Season 1, conducted from 1st to 15th October 2024, was a groundbreaking event that brought the excitement of entrepreneurial pitching to our campus. This three-phase competition challenged students to present their innovative business ideas to a panel of expert judges. The event started with initial screening, followed by semi-finals, and culminated in a grand finale where the best ideas competed for prizes and incubation support. Participants gained invaluable experience in pitch preparation, business model refinement, and investor communication. The winning teams received seed funding and mentorship opportunities to turn their concepts into viable startups.",
    date: "1 - 15 October 2024",
    sortDate: new Date("2024-10-01"),
    category: "Shark Tank Invertis",
    image: "/assets/Shark Tank Season 1/all.JPG",
    slug: "shark-tank-invertis-season-1"
  },
  {
    title: "Shark Tank Invertis - Season 2",
    description: "The second season of our highly successful Shark Tank competition, bringing new opportunities for aspiring entrepreneurs.",
    fullContent: "Building on the tremendous success of Season 1, Shark Tank Invertis Season 2 was held on 6th November 2025. This edition saw even more innovative ideas and fierce competition as student entrepreneurs pitched their ventures to industry experts and potential investors. The event featured enhanced prize money, extended mentorship programs, and exclusive networking opportunities. Participants showcased ideas spanning technology, social impact, sustainability, and consumer products. The competition not only provided a platform for students to test their entrepreneurial mettle but also connected them with valuable resources and guidance to accelerate their startup journey.",
    date: "6th November 2025",
    sortDate: new Date("2025-11-06"),
    category: "Shark Tank Invertis",
    image: "/assets/sharktank season 2/DSC_1960~1.jpg",
    slug: "shark-tank-invertis-season-2"
  },
  {
    title: "Inverthon: The Coding Challenge",
    description: "A dynamic hackathon event bringing together talented coders and developers to develop creative solutions to real-world challenges.",
    fullContent: "Inverthon, held on 28 April 2025, was an intensive coding challenge that brought together the brightest coding minds on campus. This dynamic hackathon event challenged participants to develop creative technical solutions to real-world problems within a limited timeframe. The event focused on emerging technologies including AI/ML, blockchain, IoT, and web3. Teams worked collaboratively, combining their diverse skills in programming, design, and problem-solving. Expert mentors were available throughout the event to guide teams, and the best solutions were awarded prizes and recognition. The hackathon fostered innovation, teamwork, and rapid prototyping skills essential for the modern tech startup ecosystem.",
    date: "28 April 2025",
    sortDate: new Date("2025-04-28"),
    category: "Hackathon",
    image: "/assets/Inverthon/a.jpg",
    slug: "inverthon-coding-challenge"
  },
  {
    title: "HackBhoomi: Smart India Hackathon",
    description: "Internal 36-hour hackathon recognized under Smart India Hackathon with mentorship and real-world problem statements.",
    fullContent: "HackBhoomi, conducted on 12-13 September 2025, was an intensive 36-hour hackathon recognized under the Smart India Hackathon initiative. This event challenged participants to tackle real-world problem statements provided by government departments and industries. Teams worked round-the-clock to develop innovative solutions addressing critical issues in areas such as healthcare, agriculture, education, and governance. The hackathon provided continuous mentorship from industry experts, technical support, and resources to help teams build functional prototypes. Winning teams received recognition, prizes, and the opportunity to present their solutions at the national level Smart India Hackathon finals.",
    date: "12-13 September 2025",
    sortDate: new Date("2025-09-12"),
    category: "Hackathon",
    image: "/assets/hackbhoomi/a.jpg",
    slug: "hackbhoomi-smart-india-hackathon"
  },
  {
    title: "Innovation Showcasing",
    description: "A platform to showcase innovative projects and prototypes developed by our incubatees to potential investors and partners.",
    fullContent: `The Innovation Showcasing event, held on 23rd and 24th January 2026, marked a significant milestone in our journey to foster entrepreneurship and innovation at Invertis University. This two-day exhibition served as a premier platform where our talented incubatees unveiled their groundbreaking projects and prototypes to an audience of potential investors, industry partners, mentors, and the broader entrepreneurial ecosystem.

The Genesis of Innovation
The event brought together over 30 startups from our incubation program, each representing months of dedication, iteration, and innovation. These ventures spanned diverse sectors including artificial intelligence, sustainable technology, healthcare solutions, educational technology, and social impact initiatives. The showcase demonstrated the remarkable talent and entrepreneurial spirit thriving within our institution.

Day 1: Setting the Stage for Innovation
The first day commenced with an inspiring inaugural ceremony featuring keynote addresses from successful entrepreneurs and industry leaders who shared their journeys from ideation to market success. The morning session focused on technology-driven startups, where founders demonstrated cutting-edge solutions leveraging AI, machine learning, blockchain, and IoT technologies.

One of the standout presentations came from a team that developed an AI-powered agricultural advisory platform designed to help farmers optimize crop yields while reducing resource consumption. Their prototype showcased real-time soil analysis, weather prediction integration, and personalized crop recommendations—a solution addressing one of India's most pressing challenges.

Another highlight was a healthcare startup that created a telemedicine platform with diagnostic capabilities, making quality healthcare accessible to remote and underserved communities. Their live demonstration of the platform's features, including multilingual support and integration with local health workers, received enthusiastic response from healthcare industry representatives present at the event.

Exhibition Halls: A Hub of Innovation
The exhibition halls buzzed with energy as visitors moved between colorful booths, each telling a unique entrepreneurial story. Startups had designed their exhibition spaces to reflect their brand identity and value proposition. Interactive demonstrations allowed visitors to experience products and services firsthand, creating meaningful engagement opportunities.

The sustainable technology section featured innovations in renewable energy, waste management, and circular economy solutions. One team presented an innovative waste-to-energy converter designed for urban households, demonstrating how everyday waste could be transformed into usable cooking gas. Their working prototype attracted significant interest from environmental organizations and municipal authorities.

Educational technology startups showcased platforms addressing various challenges in the learning ecosystem. From personalized learning systems using adaptive algorithms to virtual reality-based skill training modules, these innovations demonstrated how technology could democratize quality education and make it more engaging and effective.

Pitch Sessions: Where Ideas Meet Capital
Throughout both days, structured pitch sessions provided startups with opportunities to present their business models, market strategies, and growth plans to angel investors, venture capitalists, and corporate innovation teams. These sessions followed a rigorous format, with each startup given eight minutes to pitch followed by a Q&A session.

The pitch sessions were organized thematically, allowing investors with specific sector interests to attend relevant presentations. Startups received valuable feedback not only from potential investors but also from experienced entrepreneurs serving as mentors. Many founders later remarked that the constructive criticism and insights gained during these sessions proved as valuable as the investment opportunities themselves.

Day 2: Expanding Horizons
The second day shifted focus to social impact ventures and consumer-oriented solutions. Morning sessions featured startups working on inclusive business models designed to create economic opportunities for marginalized communities while building sustainable enterprises.

One impactful presentation came from a social enterprise creating employment opportunities for differently-abled individuals through skill-based training and remote work placements. Their business model demonstrated how profitability and social impact could be seamlessly integrated, resonating strongly with impact investors in attendance.

The consumer products section showcased innovative solutions ranging from sustainable fashion brands to health and wellness products. Each presentation emphasized not just the product features but also the story behind the venture—the problem identified, the solution developed, and the impact created.

Networking: Building Bridges
Beyond formal presentations, the event facilitated numerous networking opportunities through scheduled networking sessions, lunch roundtables, and informal interactions. These connections proved invaluable, with many startups forming potential partnerships, finding mentors, and establishing relationships that would support their growth journey.

Industry roundtables brought together founders working in similar domains, enabling peer learning and collaboration opportunities. These sessions addressed common challenges, shared best practices, and explored potential synergies between complementary startups.

Media Spotlight and Public Recognition
The event attracted significant media attention, with coverage from leading newspapers, business magazines, and digital media platforms. This exposure provided startups with valuable brand visibility and credibility. Several founders participated in media interviews, articulating their vision and value proposition to a broader audience.

Social media engagement throughout the event generated substantial buzz, with real-time updates, behind-the-scenes content, and founder stories reaching thousands of aspiring entrepreneurs and ecosystem stakeholders. The event's official hashtag trended locally, amplifying the reach and impact of the showcase.

Outcomes and Impact
The Innovation Showcasing event resulted in tangible outcomes for participating startups. Multiple startups received expressions of interest from investors, with some progressing to advanced due diligence stages within weeks of the event. Several corporate partners identified startups for pilot projects and proof-of-concept collaborations.

Beyond immediate outcomes, the event provided startups with invaluable experience in presenting their ventures, handling investor questions, and articulating their vision under pressure. Many founders refined their pitches based on feedback received, strengthening their investor readiness.

Lessons in Resilience and Adaptation
Throughout the showcase, recurring themes emerged around resilience, customer-centricity, and sustainable growth. Successful startups emphasized the importance of validating assumptions through customer feedback, iterating based on market response, and building scalable solutions rather than pursuing short-term gains.

Founders shared honest stories of pivots, failures, and lessons learned—authentic narratives that resonated with student entrepreneurs in the audience who were earlier in their journeys. These stories demystified entrepreneurship, presenting it not as a glamorous path but as a challenging yet rewarding journey requiring perseverance and continuous learning.

Looking Forward
The Innovation Showcasing event exemplified our commitment to creating a vibrant entrepreneurial ecosystem where ideas can transform into viable businesses. It demonstrated the caliber of innovation emerging from our incubation program and the potential of our student entrepreneurs to address real-world challenges through innovative solutions.

For participating startups, the event represented a significant milestone—a public validation of their progress and a springboard for future growth. For the university, it reinforced our position as a hub of innovation and entrepreneurship, nurturing the next generation of business leaders and change-makers.

As we reflect on the success of this showcase, we remain committed to providing our incubatees with platforms, resources, and support systems that enable them to scale their ventures and create meaningful impact. The Innovation Showcasing event will continue as an annual tradition, celebrating entrepreneurial achievement and connecting innovation with opportunity.`,
    date: "23rd and 24th January 2026",
    sortDate: new Date("2026-01-23"),
    category: "Innovation Event",
    image: "/assets/Innovation Showcase 23rd January 2026/Innovation Showcase Where Ideas Turn into Prototypes (1).png",
    slug: "innovation-showcasing-2026"
  },
  {
    title: "Startup Launching",
    description: "An exclusive event where newly incubated startups are formally launched with media coverage and investor connections.",
    fullContent: `The Startup Launching ceremony held on 24th January 2026 was a momentous occasion that celebrated the entrepreneurial journey of our incubatees who successfully transformed their innovative ideas into viable, market-ready businesses. This exclusive event marked the formal entry of eight exceptional startups into the competitive business landscape, representing the culmination of intensive incubation, mentorship, and development within our program.

The Road to Launch
Each startup's journey to this launch day embodied months—and in some cases, years—of dedication, iteration, and perseverance. From initial ideation workshops to product development, market validation, and business model refinement, these entrepreneurs navigated the challenging path from concept to commercialization with determination and resilience.

Our incubation program provided comprehensive support throughout this journey, including access to mentors, workshops on business fundamentals, legal and compliance guidance, product development resources, and connections to potential customers and partners. The launching startups represented the successful outcomes of this holistic support ecosystem.

The Launching Startups: Innovation Across Sectors

1. EduSphere - Transforming Educational Access
EduSphere emerged as a comprehensive educational technology platform designed to bridge learning gaps in tier-2 and tier-3 cities. Their adaptive learning algorithm personalizes educational content based on individual student progress, making quality education accessible and affordable. The platform currently serves over 5,000 students across 50 schools, with plans to expand to 200 schools by year-end.

The founding team, comprising educators and technologists, identified the challenge of standardized education failing to address diverse learning needs. Their solution leverages AI to create customized learning paths while providing teachers with analytics to support targeted interventions. At launch, they announced partnerships with three state education boards and secured pre-Series A funding to accelerate growth.

2. GreenCycle Solutions - Sustainability Through Innovation
GreenCycle Solutions introduced an innovative waste management system that converts organic waste into nutrient-rich compost and biogas at the community level. Their modular units can be installed in residential complexes, educational institutions, and corporate campuses, enabling on-site waste processing and reducing transportation to landfills.

The startup addresses the dual challenge of waste management and renewable energy generation. Their technology reduces waste volume by 80% while producing usable biogas for cooking or electricity generation. With pilot installations in five locations demonstrating impressive results, they launched with purchase orders from multiple housing societies and institutional clients.

3. HealthConnect - Democratizing Healthcare Access  
HealthConnect developed a telemedicine platform specifically designed for rural and semi-urban healthcare delivery. Beyond standard teleconsultation features, their platform integrates with local health workers, diagnostic centers, and pharmacy networks to ensure comprehensive care delivery.

The team addressed the critical challenge of healthcare accessibility by creating a multilingual platform that works efficiently even on low-bandwidth connections. Their ecosystem approach ensures patients can access not just consultations but also diagnostics and medicines through integrated local partners. At launch, they announced coverage of 100 villages and partnerships with 50 healthcare providers.

4. FinTech Startup: CreditBridge
CreditBridge is revolutionizing access to credit for micro and small enterprises that traditional banking overlooks. Using alternative data sources and proprietary credit scoring algorithms, they assess creditworthiness beyond conventional parameters, enabling them to serve underbanked entrepreneurs.

Their platform has already disbursed over 500 micro-loans totaling ₹2 crore, with an impressive 97% repayment rate. The launch event featured testimonials from entrepreneurs whose businesses grew significantly through access to timely credit. The startup announced strategic partnerships with two NBFCs and secured funding to scale their lending capacity.

5. AgroTech Innovation: FarmWise
FarmWise launched an integrated agricultural advisory platform combining IoT sensors, satellite imagery, and AI analytics to provide farmers with actionable insights. Their solutions cover soil health monitoring, irrigation optimization, pest detection, and market price predictions.

The founding team, with backgrounds in agriculture and technology, spent extensive time understanding farmer challenges before developing their solution. Their platform currently serves 1,000 farmers across three states, helping increase yields by an average of 25% while reducing input costs. They launched with government recognition under the AgTech innovation program.

6. Sustainable Fashion: EcoThreads
EcoThreads entered the market with a sustainable fashion brand creating contemporary clothing from upcycled and organic materials. Beyond products, they built a transparent supply chain ensuring fair wages and environmental responsibility at every stage.

Their launch collection showcased how sustainability and style could coexist without premium pricing. By partnering with women's self-help groups for production, they created a business model generating livelihood opportunities while building a conscious brand. The launch event featured their first flagship store opening and announcement of an e-commerce platform.

7. Smart Logistics: RouteOptima  
RouteOptima developed an AI-powered logistics optimization platform helping last-mile delivery companies reduce costs and improve efficiency. Their software analyzes multiple parameters—traffic patterns, delivery windows, vehicle capacity, and fuel costs—to generate optimal delivery routes.

Early adopters reported 20-30% reduction in delivery costs and significant improvement in on-time delivery rates. The startup launched with three enterprise clients and a pipeline of pilots with major e-commerce companies. Their solution addresses the growing demand for efficient last-mile delivery in India's rapidly expanding e-commerce sector.

8. Mental Wellness: MindCare
MindCare launched a comprehensive mental wellness platform providing accessible, affordable, and confidential counseling services. Recognizing the growing mental health crisis and stigma barriers, they created a platform offering anonymous counseling, self-help resources, and community support.

Their team of licensed therapists and counselors provides support through chat, voice, and video sessions. The platform includes mood tracking, guided meditation, and crisis intervention features. At launch, they announced partnerships with three corporate organizations providing employee wellness programs and insurance coverage for platform services.

The Launch Ceremony: Celebrating Achievement

The formal launch ceremony began with a lamp-lighting ceremony symbolizing the illumination of new entrepreneurial paths. Distinguished guests included successful alumni entrepreneurs, angel investors, industry leaders, government officials, and academic administrators—all gathering to celebrate these emerging ventures.

Keynote Address: Lessons in Entrepreneurship
The keynote speaker, a successful entrepreneur who built and scaled multiple ventures, shared profound insights on the entrepreneurial journey. Key themes included the importance of solving real problems, building customer-centric solutions, embracing failure as learning, maintaining financial discipline, and building strong teams.

The address resonated deeply with launching founders, many of whom nodded in recognition as the speaker described challenges they had navigated during their incubation journey. The emphasis on persistence, adaptability, and continuous learning reinforced the mindset necessary for long-term entrepreneurial success.

Founder Stories: Authentic Narratives
Each launching startup had the opportunity to present their journey, sharing not just their success but also the challenges, pivots, and lessons learned. These authentic narratives provided valuable insights for aspiring entrepreneurs in the audience.

One founder candidly shared how their initial product completely failed market validation, forcing a painful but necessary pivot. Another spoke about the moment they almost gave up but found renewed motivation through customer feedback demonstrating their solution's impact. These honest stories humanized entrepreneurship, moving beyond glossy success narratives to reveal the real journey.

Investor Connections and Media Coverage
The launch event facilitated important connections between startups and potential investors. A dedicated networking session enabled founders to engage with angel investors, venture capitalists, and corporate venture arms present at the event. Several startups conducted one-on-one meetings with interested investors, initiating relationships that could lead to funding.

Media coverage amplified the launch's impact. Journalists from leading business publications interviewed founders, and the event generated coverage across print, digital, and broadcast media. This visibility provided startups with credibility and brand recognition as they entered the market.

The launch was live-streamed, enabling broader audience participation. Social media engagement created additional buzz, with highlights, quotes, and startup stories shared across platforms, reaching thousands of aspiring entrepreneurs and ecosystem stakeholders.

Startup Ecosystem Support
The launches were supported by a comprehensive ecosystem developed around our incubation program. Legal and accounting firms offered pro-bono or subsidized services to launching startups. Banks and financial institutions presented special packages for startup banking and payment solutions. Technology providers offered credits and support for cloud services and software tools.

Alumni entrepreneurs committed to mentoring relationships, offering ongoing guidance as these startups navigate early-stage challenges. This extended support system exemplifies our commitment to startup success beyond incubation completion.

Looking Ahead: The Journey Continues
While the launch ceremony marked an important milestone, all stakeholders recognized it as a beginning rather than an end. The real challenges of market competition, customer acquisition, financial sustainability, and scaling lie ahead. However, these founders are better prepared, having developed not just products but also resilience, market understanding, and support networks.

Our commitment to these startups continues through alumni programs, advanced mentorship, and access to resources and networks. We'll track their progress, celebrate their successes, learn from their challenges, and provide support as they grow from early-stage startups to established enterprises.

Impact Beyond Individual Startups
These launches created ripple effects throughout our entrepreneurial ecosystem. Student entrepreneurs saw tangible examples of what's possible, inspiring them to pursue their own ideas. Faculty witnessed the practical application of classroom concepts, enriching their teaching. And the university strengthened its reputation as an institution nurturing innovation and entrepreneurship.

The diversity of sectors represented—education, healthcare, agriculture, sustainability, fintech, and more—demonstrated that entrepreneurship offers pathways to address varied challenges. Each startup, in its own way, contributes to economic growth, job creation, and social impact.

A Testament to Ecosystem Strength
The successful launch of eight diverse, market-ready startups in a single ceremony testified to the strength of our incubation ecosystem. It reflected the quality of mentorship, the effectiveness of our programs, the dedication of founders, and the collective support of all stakeholders.

As we celebrated these launches, we also renewed our commitment to continuously improving our incubation program, anticipating future entrepreneur needs, and creating pathways for more innovative ideas to transform into successful ventures.

The Startup Launching ceremony of 24th January 2026 will be remembered not just for the ventures it introduced to the market, but for the entrepreneurial spirit it celebrated, the ecosystem strength it demonstrated, and the inspiration it provided to the next generation of innovators and changemakers at Invertis University.`,
    date: "24th January 2026",
    sortDate: new Date("2026-01-24"),
    category: "Innovation Event",
    image: "/assets/Startup Launching 24th January 2026/Edusphere.png",
    slug: "startup-launching-2026"
  },
  {
    title: "Founder's Forum",
    description: "An insightful workshop on startup financing with expert guidance on securing funding, pitching to investors, and managing finances.",
    fullContent: "The Founder's Forum, conducted on 15 February 2025, was an intensive workshop focused on the critical aspects of startup financing. This event provided expert guidance on navigating the complex world of startup funding, from bootstrapping to venture capital. Topics covered included understanding different funding stages, preparing for investor pitches, financial modeling and projections, valuation strategies, term sheet negotiations, and financial management for startups. Industry experts and successful founders shared their experiences and insights, providing practical advice on securing funding and managing startup finances effectively. The interactive format allowed participants to ask questions and receive personalized feedback on their funding strategies.",
    date: "15 February 2025",
    sortDate: new Date("2025-02-15"),
    category: "Workshop",
    image: "/assets/Founders Forum/banner.png",
    slug: "founders-forum-startup-financing"
  },
  {
    title: "Women's Day Workshop",
    description: "Sustainable entrepreneurship workshop featuring Dr. Megha Saxena on green innovation and eco-conscious business solutions.",
    fullContent: "To celebrate International Women's Day on 8 March 2025, we organized a special workshop on Sustainable Entrepreneurship featuring Dr. Megha Saxena. This empowering session focused on green innovation and eco-conscious business solutions, highlighting the role of women entrepreneurs in driving sustainability. Dr. Saxena shared insights on creating environmentally responsible businesses, circular economy principles, green technology innovations, and social impact entrepreneurship. The workshop emphasized the unique perspectives women bring to sustainable business development and provided practical guidance on building ventures that balance profitability with environmental and social responsibility. Participants left inspired to create businesses that contribute positively to society and the planet.",
    date: "8 March 2025",
    sortDate: new Date("2025-03-08"),
    category: "Workshop",
    image: "/assets/Womensday/businessdevelopmentworkshop.jpg",
    slug: "womens-day-workshop-2025"
  },
  {
    title: "Faculty Development Program (FDP)",
    description: "Workshop on Business Model Canvas for faculty members to enhance entrepreneurial teaching capabilities.",
    fullContent: "The Faculty Development Program, held on 10 April 2025, was designed to enhance the entrepreneurial teaching capabilities of our faculty members. This specialized workshop focused on the Business Model Canvas framework, a strategic management tool for developing new business models or documenting existing ones. Faculty participants learned how to effectively teach entrepreneurship concepts using this visual framework, enabling them to better guide student entrepreneurs. The program covered all nine building blocks of the Business Model Canvas, case studies of successful startups, interactive exercises, and assessment methodologies. By empowering our educators with advanced entrepreneurship teaching tools, this FDP strengthened our overall entrepreneurial ecosystem and improved the quality of mentorship available to student startups.",
    date: "10 April 2025",
    sortDate: new Date("2025-04-10"),
    category: "Workshop",
    image: "/assets/Faculty Development Program/fdp.jpg",
    slug: "faculty-development-program-fdp"
  }
].sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime());

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs.find(p => p.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="min-h-screen bg-white relative">
        {/* Header */}
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-6 pb-4">
          <Link 
            href="/incubation-program"
            className="inline-flex items-center gap-2 text-xs text-gray-600 hover:text-indigo-600 transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Programs
          </Link>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-6"
        >
          {/* Title & Meta */}
          <div className="mb-5">
            <div className="flex items-center gap-2.5 mb-3">
              <Badge className={`${
                program.category === 'Workshop' ? 'bg-blue-500' :
                program.category === 'Expert Talk' ? 'bg-purple-500' :
                program.category === 'Special Event' ? 'bg-orange-400' :
                program.category === 'Hackathon' ? 'bg-green-500' :
                program.category === 'Innovation Event' ? 'bg-pink-500' :
                program.category === 'Shark Tank Invertis' ? 'bg-red-500' :
                'bg-indigo-500'
              } text-white text-xs font-semibold px-2.5 py-0.5 rounded-full border-0`}>
                <Tag className="w-3 h-3 inline mr-1" />
                {program.category}
              </Badge>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                <span>{program.date}</span>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              {program.title}
            </h1>
            
            <p className="text-base text-gray-600 leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative w-full aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl mb-6">
            <Image
              src={program.image}
              alt={program.title}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="prose prose-base max-w-none"
          >
            <div className="bg-white rounded-lg p-4 sm:p-5">
              <h2 className="text-xl font-bold text-gray-900 mb-3">About This Program</h2>
              <p className="text-sm text-gray-700 leading-6 whitespace-pre-line">
                {program.fullContent}
              </p>
            </div>
          </motion.div>

          {/* Related Programs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Other Programs</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {programs
                .filter(p => p.slug !== program.slug && p.category === program.category)
                .slice(0, 3)
                .map((relatedProgram) => (
                  <Link
                    key={relatedProgram.slug}
                    href={`/incubation-program/${relatedProgram.slug}`}
                    className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={relatedProgram.image}
                        alt={relatedProgram.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-xs font-bold text-gray-900 mb-1.5 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                        {relatedProgram.title}
                      </h3>
                      <p className="text-xs text-gray-500">{relatedProgram.date}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
