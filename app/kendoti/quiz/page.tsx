'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react'
import { questions } from '@/lib/kendoti/questions'
import { scoreAnswers, resolveTypeCode } from '@/lib/kendoti/scoring'
import { QuizCard } from '@/components/kendoti/QuizCard'
import { ProgressBar } from '@/components/kendoti/ProgressBar'

const STORAGE_KEY = 'kendoti.progress.v1'

type AnswerMap = Record<number, 0 | 1 | 2>

export default function QuizPage() {
  const router = useRouter()
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState<AnswerMap>({})
  const [restored, setRestored] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const data = JSON.parse(raw) as { idx: number; answers: AnswerMap }
        if (typeof data.idx === 'number' && data.answers) {
          setIdx(Math.min(data.idx, questions.length - 1))
          setAnswers(data.answers)
        }
      }
    } catch {}
    setRestored(true)
  }, [])

  useEffect(() => {
    if (!restored) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ idx, answers }))
  }, [idx, answers, restored])

  const q = questions[idx]
  const done = useMemo(() => Object.keys(answers).length === questions.length, [answers])

  useEffect(() => {
    if (!done) return
    const score = scoreAnswers(questions, answers)
    const code = resolveTypeCode(score)
    localStorage.setItem('kendoti.result.v1', JSON.stringify({ code, score, answers }))
    localStorage.removeItem(STORAGE_KEY)
    router.replace(`/kendoti/result/${code}`)
  }, [done, answers, router])

  function handleAnswer(choice: 0 | 1 | 2) {
    if (!q) return
    setAnswers((prev) => ({ ...prev, [q.id]: choice }))
    setIdx((i) => Math.min(i + 1, questions.length - 1))
  }

  function handleBack() {
    setIdx((i) => Math.max(i - 1, 0))
  }

  function handleReset() {
    if (!confirm('確定清除答題進度,重新開始?')) return
    localStorage.removeItem(STORAGE_KEY)
    setAnswers({})
    setIdx(0)
  }

  if (!restored) {
    return (
      <div className="max-w-[720px] mx-auto px-4 md:px-8 py-20 text-center font-sans text-sm text-kendo-black/50">
        載入中…
      </div>
    )
  }

  if (!q) return null

  return (
    <div className="max-w-[720px] mx-auto px-4 md:px-8 py-10">
      <Link
        href="/kendoti"
        className="inline-flex items-center gap-2 font-sans text-xs text-kendo-black/50 hover:text-kendo-red transition-colors mb-6"
      >
        <ArrowLeft size={12} />
        回介紹頁
      </Link>

      <div className="mb-10">
        <ProgressBar current={idx + 1} total={questions.length} axis={q.axis} />
      </div>

      <div className="min-h-[420px]">
        <QuizCard question={q} onAnswer={handleAnswer} />
      </div>

      <div className="flex justify-between items-center mt-10 pt-6 border-t border-border">
        <button
          onClick={handleBack}
          disabled={idx === 0}
          className="font-sans text-xs text-kendo-black/50 hover:text-kendo-red transition-colors disabled:opacity-30 disabled:hover:text-kendo-black/50"
        >
          ← 上一題
        </button>
        <button
          onClick={handleReset}
          className="font-sans text-xs text-kendo-black/40 hover:text-kendo-red transition-colors"
        >
          重新開始
        </button>
      </div>
    </div>
  )
}
