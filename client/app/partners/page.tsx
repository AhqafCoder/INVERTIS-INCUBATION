"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function PartnersPage() {
  // Knowledge Partners
  const knowledgePartners = [
    { name: "LinkedIn", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
    { name: "UltraTech Cement", logo: "https://th.bing.com/th/id/OIP.SqQrQq4T2JRS9eTBddBNxQHaEN?rs=1&pid=ImgDetMain" },
    { name: "JARDS", logo: "https://jards.in/wp-content/uploads/2021/05/JARDS-LOGO3-1-1024x412.png" },
    { name: "Business Standard", logo: "https://www.themediaant.com/blog/wp-content/uploads/2021/09/business-standard-logo.png" },
    { name: "Institute of Company Secretaries of India", logo: "/assets/PatnerImage/ic.png" },
    { name: "CESIM", logo: "https://www.cesim.com/hs-fs/hubfs/cesimlogo.png?width=462&name=cesimlogo.png" },
    { name: "Vaave", logo: "https://www.vaave.com/media/logo-black.png" },
    { name: "Shape my skills by Ducat", logo: "https://th.bing.com/th/id/OIP.shbieuaKaovD31MOtMmORAHaDt?rs=1&pid=ImgDetMain" },
    { name: "NIDM (National Institute of Disaster Management)", logo: "https://th.bing.com/th?id=OIP.eCr8UbHQzlES3GfJvDZJ4gHaDm&w=349&h=169&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" },
    { name: "Infosys Springboard", logo: "https://th.bing.com/th?id=OIP.u9H0rrSvh_1M2QzisiaOYQAAAA&w=191&h=117&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" },
    { name: "Livingstone College, USA", logo: "https://th.bing.com/th?id=OIP.Z1MpELZqJavwf-dJrAnPtgAAAA&w=186&h=183&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" },
    { name: "Energy Swaraj Foundation", logo: "https://th.bing.com/th?id=OIP.5kAJ6reYEdDBdoeqxDkORgHaG4&w=259&h=240&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" },
    { name: "Istanbul Gedik University, Turkiye", logo: "https://th.bing.com/th?id=OIP.KTN7emixJSDb1yR8uJMAvgAAAA&w=159&h=159&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" },
    { name: "Istanbul Gelisim University, Turkiye", logo: "https://th.bing.com/th?id=OIP.e4oLtMlznaVhO68skyouXwHaHa&w=249&h=250&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" },
    { name: "Istanbul Medipol University, Turkey", logo: "https://th.bing.com/th/id/OIP.4mQCmiBrLyxGMngU78TW7QHaCP?w=280&h=105&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Istanbul University, Turkiye", logo: "https://th.bing.com/th/id/OIP.vPsx87aqyWQt3v_kBgC9XAHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "UP Council of Sugarcane Research", logo: "https://th.bing.com/th/id/OIP.pzqDDNbQAaBiPiWLgSCkiwAAAA?rs=1&pid=ImgDetMain" },
    { name: "Virtual Lab nodal centre, IIT Roorkee", logo: "https://th.bing.com/th/id/OIP.1Pm6DtRMxUdt0-o88GXvoQAAAA?w=293&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" }
  ];

  // Certification Partners
  const certificationPartners = [
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Adobe", logo: "https://th.bing.com/th?id=OIP.10iTkgrDM76aXqCxm2HhfwHaEK&w=333&h=187&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" },
    { name: "Microsoft", logo: "/assets/PatnerImage/microsoft.png" },
    { name: "EduSkills", logo: "/assets/PatnerImage/eduskill.jpg" },
    { name: "Google Developer", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Shape my skills", logo: "https://th.bing.com/th/id/OIP.shbieuaKaovD31MOtMmORAHaDt?rs=1&pid=ImgDetMain" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Juniper", logo: "/assets/PatnerImage/Juniper_Networks_logo.png" },
    { name: "Zscaler", logo: "/assets/PatnerImage/zscaler.png" },
    { name: "Mindas", logo: "/assets/PatnerImage/midas.png" }
  ];

  // Technology Providers
  const technologyProviders = [
    { name: "PTC", logo: "/assets/PatnerImage/ptc.png" },
    { name: "Dassault Systèmes", logo: "/assets/PatnerImage/dassault.png" },
    { name: "Mastercam", logo: "/assets/PatnerImage/mastercam.png" },
    { name: "Ansys", logo: "/assets/PatnerImage/ansys.png" },
    { name: "Intel", logo: "/assets/PatnerImage/Intellogo.png" },
    { name: "HP", logo: "/assets/PatnerImage/hplogo.png" },
    { name: "Adobe", logo: "/assets/PatnerImage/adobe.png" },
    { name: "IBM", logo: "/assets/PatnerImage/ibm.png" },
    { name: "LinkedIn", logo: "/assets/PatnerImage/linkedin.png" }
  ];

  // Incubated Startups
  const incubatedStartups = [
    { name: "Physis Living Private Limited", logo: "/assets/startups/PHYSIS LIVING PRIVATE LIMITED.jpeg" },
    { name: "Eco Char LLP", logo: "/assets/startups/ecochar.jpg" },
    { name: "Kalpit Infotech", logo: "/assets/startups/kalpit.jpg" },
    { name: "Fovty Private Limited", logo: "/assets/startups/fovty.jpg" },
    { name: "SS Parts Planet Private Limited", logo: "/assets/startups/SS PARTS LOGO.jpg" },
    { name: "Composite Innovations Private Limited", logo: "/assets/startups/COMPOPSITE INNOVATION PRIVATE LIMITED.jpg" },
    { name: "Ucyber Digital Innovations Pvt Ltd", logo: "/assets/startups/ucyber.jpg" },
    { name: "Aqin Biotech Pvt Ltd", logo: "/assets/startups/Aqin.png" },
    { name: "Cladbe Platforms LLP", logo: "/assets/startups/cladbe.jpg" },
    { name: "Clothing Vibe", logo: "/assets/startups/clothingvibe.png" },
    { name: "Kolega Creations India Pvt. Ltd.", logo: "/assets/startups/KOLEGA CREATIONS INDIA PVT. LTD.jpg" },
    { name: "Heuk Care Private Limited", logo: "/assets/startups/HEUK CARE PRIVATE LIMITED.png" },
    { name: "Nextinera Technologies Private Limited", logo: "/assets/startups/NEXTINERA TECHNOLOGIES PRIVATE LIMITED.png" },
    { name: "SGSC Spiritual Tours Private Limited", logo: "/assets/startups/SGSC Spiritual Tours Private Limited ,DarshanNiti.png" },
    { name: "Parom Manufacturers Private Limited", logo: "/assets/startups/PAROM MANUFRACTURERS PRIVATE LIMITED.png" },
    { name: "Oddiant Techlabs LLP", logo: "/assets/startups/ODDIANT TECHLABS LLP.png" },
    { name: "Kenshu Transcend Training & Consulting Solutions LLP", logo: "/assets/startups/KENSHU TRANSCEND TRANING & CONSULTING SOLUTIONS LLP.png" },
    { name: "Nearbix Trade LLP", logo: "/assets/startups/NearBix.png" },
    { name: "Wizzymaids Allied Services Private Limited", logo: "/assets/startups/WIZZYMAIDS ALLIED SERVICES PRIVATE LIMITED.jpg" },
    { name: "Brahmabyte Innovations and Technologies Private Limited", logo: "/assets/startups/brahmabyte.jpeg" },
    { name: "Edusphere", logo: "/assets/startups/edusphere_logo.png" },
    { name: "Velaste", logo: "/assets/startups/VELASTE_logo.svg" },
    { name: "Darshan", logo: "/assets/startups/darshan.png" },
    { name: "Invitation", logo: "/assets/startups/invitation.png" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1] as const
      },
    },
  };

  return (
    <HeroHighlight containerClassName="min-h-screen w-full !h-auto">
      <div className="min-h-screen bg-gradient-to-b from-white/80 via-blue-50/20 to-white/80 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Header Section */}
        <section className="pt-6 pb-4 md:pt-8 md:pb-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                OUR PARTNERS
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-snug max-w-4xl mx-auto px-4">
                Collaborating with <Highlight className="text-gray-900 px-2">industry leaders</Highlight> to empower{" "}
                <span className="inline-flex items-baseline whitespace-nowrap gap-1">
                  <PointerHighlight><span className="text-gray-900">innovation</span></PointerHighlight>
                </span>.
              </h2>
            </motion.div>
          </div>
        </section>

        {/* Knowledge Partners */}
        <section className="py-4 md:py-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6 md:mb-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">
                KNOWLEDGE PARTNERS
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4"
            >
              {knowledgePartners.map((partner, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="group relative overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-lg h-full bg-white flex flex-col items-center justify-center p-3 md:p-4 gap-2">
                    <div className="relative h-16 md:h-20 w-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                        className="object-contain transition-all duration-300"
                      />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-gray-700 text-center line-clamp-2">{partner.name}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Incubated Startups */}
        <section className="py-4 md:py-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6 md:mb-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">
                INCUBATED STARTUPS
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4"
            >
              {incubatedStartups.map((startup, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="group relative overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-lg h-full bg-white flex flex-col items-center justify-center p-3 gap-2">
                    <div className="relative h-14 md:h-16 w-full">
                      <Image
                        src={startup.logo}
                        alt={startup.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-xs font-medium text-gray-700 text-center line-clamp-2">{startup.name}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Certification Partners */}
        <section className="py-4 md:py-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6 md:mb-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">
                CERTIFICATION PARTNERS
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4"
            >
              {certificationPartners.map((partner, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="group relative overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-lg h-full bg-white flex flex-col items-center justify-center p-3 md:p-4 gap-2">
                    <div className="relative h-16 md:h-20 w-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                        className="object-contain transition-all duration-300"
                      />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-gray-700 text-center line-clamp-2">{partner.name}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technology Providers */}
        <section className="py-4 md:py-6 pb-8 md:pb-12">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6 md:mb-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">
                TECHNOLOGY PROVIDERS
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4"
            >
              {technologyProviders.map((partner, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="group relative overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-lg h-full bg-white flex flex-col items-center justify-center p-3 md:p-4 gap-2">
                    <div className="relative h-16 md:h-20 w-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                        className="object-contain transition-all duration-300"
                      />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-gray-700 text-center line-clamp-2">{partner.name}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </HeroHighlight>
  );
}
