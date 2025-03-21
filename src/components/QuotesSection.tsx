'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface QuoteProps {
  text: string;
  author: string;
  delay: number;
}

const Quote: React.FC<QuoteProps> = ({ text, author, delay }) => {
  return (
    <motion.div 
      className="card p-6 backdrop-blur-sm relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="absolute text-7xl text-purple-600 opacity-20 -top-4 -left-4">"</div>
      <p className="text-lg text-gray-300 italic mb-4 relative z-10">{text}</p>
      <p className="text-right text-sm text-gray-400">— {author}</p>
    </motion.div>
  );
};

const QuotesSection = () => {
  const quotes = [
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay"
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
      author: "Mark Zuckerberg"
    },
    {
      text: "Great things in business are never done by one person. They're done by a team of people.",
      author: "Steve Jobs"
    },
    {
      text: "If you're not embarrassed by the first version of your product, you've launched too late.",
      author: "Reid Hoffman"
    }
  ];

  return (
    <section id="quotes" className="vertical-section py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="purple-gradient">Favorite</span> Quotes
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((quote, index) => (
            <Quote
              key={index}
              text={quote.text}
              author={quote.author}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection; 