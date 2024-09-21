import { Task } from '../types'
import React from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns'

interface CalendarProps {
  tasks: Task[]
}

export default function Calendar({ tasks }: CalendarProps) {
  const today = new Date()
  const monthStart = startOfMonth(today)
  const monthEnd = endOfMonth(today)
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const getTasksForDate = (date: Date) => {
    return tasks.filter((task) => task.dueDate === format(date, 'yyyy-MM-dd'))
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-bold text-lg mb-4">{format(today, 'MMMM yyyy')}</h2>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-semibold text-gray-500">
            {day}
          </div>
        ))}
        {daysInMonth.map((date) => {
          const dayTasks = getTasksForDate(date)
          return (
            <div
              key={date.toString()}
              className={`p-2 rounded-lg border ${
                !isSameMonth(date, today) ? 'bg-gray-100' : ''
              } ${isToday(date) ? 'border-blue-500' : 'border-gray-200'}`}
            >
              <div className="text-sm font-semibold mb-1">{format(date, 'd')}</div>
              {dayTasks.length > 0 && (
                <div className="bg-blue-100 rounded-md p-1 text-xs">
                  <div className="font-semibold text-blue-800">{dayTasks.length} task(s)</div>
                  {dayTasks.map((task) => (
                    <div key={task.id} className="text-gray-600 truncate">
                      {task.id}: {task.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}