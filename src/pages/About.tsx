import { motion } from "framer-motion";
import { FloatingOrb } from "@/components/FloatingOrb";
import { FlowingShape } from "@/components/FlowingShape";
import { TeamCard } from "@/components/TeamCard";
import { Target, Users, Award } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Shamme Alkhawaldeh",
      major: "AI Engineering",
      year: "3rd Year",
      description: "Specializes in machine learning models and AI architecture design.",
      linkedinUrl: "https://linkedin.com"
    },
    {
      name: "Ola Amro",
      major: "Data Science",
      year: "3rd Year",
      description: "Expert in data analysis and predictive modeling.",
      linkedinUrl: "https://linkedin.com"
    },
    {
      name: "Aws Alswini",
      major: "Software Engineering",
      year: "3rd Year",
      description: "Focuses on backend development and system architecture.",
      linkedinUrl: "https://linkedin.com"
    },
    {
      name: "Raneem Khanji",
      major: "Computer Science",
      year: "3rd Year",
      description: "Specializes in algorithms and optimization techniques.",
      linkedinUrl: "https://linkedin.com"
    },
    {
      name: "Ahamd Ibakhi",
      major: "IT Engineering",
      year: "3rd Year",
      description: "Expert in system integration and cloud infrastructure.",
      linkedinUrl: "https://linkedin.com"
    }
  ];
  
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#001F3F] via-[#002a57] to-[#000b18]">
      {/* Floating Orbs */}
      <FloatingOrb size={180} top="15%" right="10%" delay={0} />
      <FloatingOrb size={130} bottom="20%" left="5%" delay={1.5} />
      <FloatingOrb size={90} top="60%" right="15%" delay={2.5} />
      
      {/* Flowing Shapes */}
      <FlowingShape variant="wave1" className="top-0 left-0 w-full h-full" />
      <FlowingShape variant="wave3" className="bottom-0 left-0 w-full h-full" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 sphere-gradient rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_60px_rgba(245,196,0,0.4)]">
              <Users className="w-10 h-10 text-[#001F3F]" strokeWidth={2.5} />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Who <span className="text-gradient">We Are</span>
            </h1>
          </motion.div>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto"
          >
            <div className="glass-card rounded-3xl p-10 md:p-14 border-white/10 shadow-xl">
              <Award className="w-12 h-12 text-[#F5C400] mb-6 mx-auto" />
              <p className="text-lg md:text-2xl text-white/90 leading-relaxed text-center">
                Naba is built by five students from <span className="text-[#F5C400] font-semibold">Al-Hussein Technical University</span> as 
                part of an innovation challenge. We competed against students from multiple universities 
                across Jordan and were selected among the <span className="text-[#F5C400] font-semibold">top winning teams</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-white/70">
              Five passionate students building the future of inventory management
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <TeamCard
                key={member.name}
                {...member}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="glass-card rounded-3xl p-12 md:p-16 border-white/10 shadow-2xl">
              <div className="w-24 h-24 sphere-gradient rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_60px_rgba(245,196,0,0.5)]">
                <Target className="w-12 h-12 text-[#001F3F]" strokeWidth={2.5} />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Our <span className="text-gradient">Mission</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                We aim to help businesses make intelligent inventory decisions using data-driven, 
                ethical, and efficient AI technology.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
