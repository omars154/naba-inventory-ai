import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

interface TeamCardProps {
  name: string;
  major: string;
  year: string;
  description: string;
  linkedinUrl: string;
  delay?: number;
}

export const TeamCard = ({ 
  name, 
  major, 
  year, 
  description, 
  linkedinUrl,
  delay = 0 
}: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="glass-card rounded-3xl p-8 border-white/10 hover:border-[#F5C400]/30 transition-all duration-500 shadow-lg hover:shadow-[0_20px_60px_rgba(245,196,0,0.2)] group"
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="w-16 h-16 sphere-gradient rounded-2xl flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(245,196,0,0.3)] group-hover:shadow-[0_0_60px_rgba(245,196,0,0.5)] transition-all duration-500">
            <span className="text-2xl font-bold text-[#001F3F]">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">
            {name}
          </h3>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#F5C400] font-semibold text-sm">
              {major}
            </span>
            <span className="text-white/40">•</span>
            <span className="text-white/60 text-sm">
              {year}
            </span>
          </div>
        </div>
        
        <p className="text-white/70 leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#F5C400] hover:text-[#F5C400]/80 transition-colors duration-300 font-medium group/link"
        >
          <Linkedin className="w-5 h-5" />
          <span className="group-hover/link:translate-x-1 transition-transform duration-300">
            Connect on LinkedIn
          </span>
        </a>
      </div>
    </motion.div>
  );
};
