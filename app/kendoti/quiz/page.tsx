'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { questions } from '@/lib/kendoti/questions'
import { scoreAnswers, resolveTypeCode } from '@/lib/kendoti/scoring'
import { QuizCard } from '@/components/kendoti/QuizCard'
import { ProgressBar } from '@/components/kendoti/ProgressBar'

const STORAGE_KEY = 'kendoti.progress.v1'
const NICK_KEY = 'kendoti.nickname.v1'

type AnswerMap = Record<number, 0 | 1 | 2>

export default function QuizPage() {
  const router = useRouter()
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState<AnswerMap>({})
  const [restored, setRestored] = useState(false)
  const [nickname, setNickname] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const data = JSON.parse(raw) as { idx: number; answers: AnswerMap }
        if (typeof data.idx === 'number' && data.answers) {
          setIdx(Math.min(data.idx, questions.length - 1))
          setAnswers(data.answers)
          setStarted(true)
        }
      }
      const savedNick = localStorage.getItem(NICK_KEY)
      if (savedNick) setNickname(savedNick)
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
    const savedNick = (typeof window !== 'undefined' ? localStorage.getItem(NICK_KEY) : '') || ''
    localStorage.setItem('kendoti.result.v1', JSON.stringify({ code, score, answers, nickname: savedNick }))
    localStorage.removeItem(STORAGE_KEY)
    const q = savedNick ? `?name=${encodeURIComponent(savedNick)}` : ''
    router.replace(`/kendoti/result/${code}${q}`)
  }, [done, answers, router])

  function handleStart() {
    const trimmed = nickname.trim().slice(0, 20)
    setNickname(trimmed)
    if (trimmed) localStorage.setItem(NICK_KEY, trimmed)
    else localStorage.removeItem(NICK_KEY)
    setStarted(true)
  }

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

  if (!started) {
    return (
      <div className="max-w-[560px] mx-auto px-4 md:px-8 py-14">
        <Link
          href="/kendoti"
          className="inline-flex items-center gap-2 font-sans text-xs text-kendo-black/50 hover:text-kendo-red transition-colors mb-10"
        >
          <ArrowLeft size={12} />
          回介紹頁
        </Link>

        <div className="text-center mb-10">
          <p className="font-serif text-xs text-kendo-red tracking-[0.3em] mb-3">STEP 0 / 45</p>
          <h1 className="font-serif text-3xl md:text-4xl font-black text-kendo-black mb-3">
            先告訴我怎麼稱呼你
          </h1>
          <p className="font-sans text-sm text-kendo-black/60 leading-relaxed">
            結果頁會顯示你的暱稱,分享時道場同伴一看就知道是你。
            <br />
            不想填?直接按「開始測驗」也可以。
          </p>
        </div>

        <div className="mb-8">
          <label htmlFor="nickname" className="block font-sans text-xs text-kendo-black/50 tracking-[0.2em] mb-2">
            暱稱(可留空,最多 20 字)
          </label>
          <input
            id="nickname"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value.slice(0, 20))}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleStart()
            }}
            placeholder="例:小林、Yao、道場阿偉"
            maxLength={20}
            className="w-full px-4 py-3 bg-paper border border-border focus:border-kendo-red focus:outline-none font-serif text-lg text-kendo-black placeholder:text-kendo-black/30 transition-colors"
            autoFocus
          />
        </div>

        <button
          onClick={handleStart}
          className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-kendo-red text-white font-serif text-lg font-semibold rounded-sm hover:bg-kendo-red/90 active:scale-[0.99] transition-all"
        >
          開始測驗
          <ArrowRight size={20} weight="bold" />
        </button>
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
