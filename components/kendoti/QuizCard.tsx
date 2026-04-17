'use client'

import { motion, AnimatePresence } from 'framer-motion'
import type { Question } from '@/lib/kendoti/types'

export function QuizCard({
  question,
  onAnswer,
}: {
  question: Question
  onAnswer: (idx: 0 | 1 | 2) => void
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="w-full"
      >
        <span className="inline-block px-2 py-0.5 mb-4 text-[10px] font-sans font-medium text-kendo-red bg-kendo-red/10 rounded-sm tracking-wider">
          {question.genre}
        </span>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-kendo-black leading-snug mb-8 whitespace-pre-line">
          Q{question.id}. {question.prompt}
        </h2>
        <div className="flex flex-col gap-3">
          {question.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => onAnswer(i as 0 | 1 | 2)}
              className="group text-left px-5 py-4 md:px-6 md:py-5 border border-border bg-paper hover:border-kendo-red hover:bg-kendo-red/5 active:scale-[0.995] transition-all rounded-sm"
            >
              <span className="font-serif text-xs text-kendo-black/40 tracking-[0.2em] mr-3 group-hover:text-kendo-red transition-colors">
                {['A', 'B', 'C'][i]}
              </span>
              <span className="font-sans text-base text-kendo-black/90 group-hover:text-kendo-black leading-relaxed">
                {opt.label}
              </span>
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
