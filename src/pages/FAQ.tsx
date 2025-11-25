import { motion } from "framer-motion";
import { FloatingOrb } from "@/components/FloatingOrb";
import { FlowingShape } from "@/components/FlowingShape";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Naba?",
      answer: "Naba is an AI-powered inventory management and forecasting tool designed to help companies understand their stock needs, reduce losses, and make better purchasing decisions."
    },
    {
      question: "How can companies benefit from it?",
      answer: "By subscribing to Naba, companies receive accurate demand forecasting, inventory optimization insights, and predictive analytics that support smarter decision-making."
    },
    {
      question: "What features do you offer?",
      answer: "We offer: Core Feature: AI-powered demand forecasting with lead-time and shipping prediction, Smart inventory optimization, Data integration, and Scenario simulation and what-if analysis (XAI)."
    },
    {
      question: "How accurate is your model?",
      answer: "Our AI model achieved 94% accuracy based on real data, continuous monitoring, and automatic retraining."
    },
    {
      question: "Who can use Naba?",
      answer: "Retailers, warehouses, distributors, manufacturers, and any business that manages inventory or supply chains."
    },
    {
      question: "How do subscriptions work?",
      answer: "Companies choose a plan, create an account, connect their data, and activate the features they need."
    },
    {
      question: "Is our data safe?",
      answer: "Yes. All data is handled securely and used only for generating insights and forecasts."
    }
  ];
  
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#001F3F] via-[#002a57] to-[#000b18]">
      {/* Floating Orbs */}
      <FloatingOrb size={200} top="10%" left="5%" delay={0} />
      <FloatingOrb size={150} bottom="15%" right="8%" delay={1} />
      <FloatingOrb size={100} top="50%" left="85%" delay={2} />
      
      {/* Flowing Shapes */}
      <FlowingShape variant="wave1" className="top-0 left-0 w-full h-full" />
      <FlowingShape variant="wave2" className="bottom-0 left-0 w-full h-full" />
      
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
              <HelpCircle className="w-10 h-10 text-[#001F3F]" strokeWidth={2.5} />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Everything you need to know about Naba
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="glass-card rounded-3xl px-8 border-white/10 hover:border-[#F5C400]/30 transition-all duration-500 shadow-lg hover:shadow-[0_20px_60px_rgba(245,196,0,0.15)]"
                  >
                    <AccordionTrigger className="text-left text-lg md:text-xl font-semibold hover:no-underline py-8 text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 leading-relaxed pb-8 pt-2 text-base md:text-lg">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
