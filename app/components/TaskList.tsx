import { Task } from '../types'

'use client'

import React, { useRef } from 'react'
import { useDrop } from 'react-dnd'
import TaskCard from './TaskCard'

interface TaskListProps {
  id: string
  title: string
  tasks: Task[]
  onDrop: (item: Task, listId: string) => void
}

export default function TaskList({ id, title, tasks, onDrop }: TaskListProps) {
  const dropRef = useRef(null)
  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item: Task) => onDrop(item, id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  })

  drop(dropRef)

  return (
    <div
      ref={dropRef}
      className={`bg-white p-4 rounded-lg shadow-md w-full md:w-1/3 transition-all duration-200 ${
        isOver ? 'scale-105 shadow-lg' : ''
      }`}
    >
      <h2 className="font-bold text-lg mb-4">{title}</h2>
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}