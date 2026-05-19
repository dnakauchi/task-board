import { useState } from 'react'

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="タスクを入力..."
        className="task-input__field"
      />
      <button type="submit" className="task-input__btn">追加</button>
    </form>
  )
}
