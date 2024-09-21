import React, { useRef, useEffect } from "react"
import { useDrag } from "react-dnd"
import { Task } from "../types"

interface TaskCardProps {
  task: Task
}

export default function TaskCard({ task }: TaskCardProps) {
  const dragRef = useRef(null)
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: task,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  useEffect(() => {
    drag(dragRef)
  }, [drag])

  return (
    <div
      ref={dragRef}
      className={`bg-white p-4 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 ${
        isDragging
          ? "opacity-50 scale-95"
          : "hover:shadow-md hover:-translate-y-1"
      }`}
    >
      <h3 className="font-semibold text-gray-800">
        {task.id}: {task.title}
      </h3>
      <p className="text-sm text-gray-500 mt-1">{task.description}</p>
      <p className="text-xs text-gray-400 mt-2">Due: {task.dueDate}</p>
    </div>
  )
}
