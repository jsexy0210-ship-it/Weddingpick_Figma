import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

export function Checklist() {
  const [items, setItems] = useState([
    {
      category: '예식 준비',
      tasks: [
        { id: 1, title: '예식장 예약', completed: true },
        { id: 2, title: '날짜 확정', completed: true },
        { id: 3, title: '하객 수 파악', completed: true },
        { id: 4, title: '청첩장 디자인', completed: false },
        { id: 5, title: '청첩장 발송', completed: false },
      ],
    },
    {
      category: '스튜디오 촬영',
      tasks: [
        { id: 6, title: '스튜디오 선택', completed: true },
        { id: 7, title: '촬영 콘셉트 정하기', completed: true },
        { id: 8, title: '촬영 예약', completed: false },
        { id: 9, title: '본촬영', completed: false },
        { id: 10, title: '사진 선택', completed: false },
      ],
    },
    {
      category: '예복',
      tasks: [
        { id: 11, title: '드레스샵 방문', completed: true },
        { id: 12, title: '드레스 선택', completed: false },
        { id: 13, title: '예복 대여', completed: false },
        { id: 14, title: '한복 대여', completed: false },
        { id: 15, title: '최종 피팅', completed: false },
      ],
    },
    {
      category: '뷰티',
      tasks: [
        { id: 16, title: '메이크업샵 예약', completed: true },
        { id: 17, title: '메이크업 시연', completed: false },
        { id: 18, title: '헤어 스타일 결정', completed: false },
        { id: 19, title: '피부 관리', completed: false },
      ],
    },
    {
      category: '기타',
      tasks: [
        { id: 20, title: '예물 구매', completed: true },
        { id: 21, title: '신혼여행 예약', completed: false },
        { id: 22, title: '혼수 준비', completed: false },
        { id: 23, title: '식순 확정', completed: false },
      ],
    },
  ]);

  const toggleTask = (categoryIdx: number, taskId: number) => {
    setItems(prev =>
      prev.map((category, idx) =>
        idx === categoryIdx
          ? {
              ...category,
              tasks: category.tasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
              ),
            }
          : category
      )
    );
  };

  const totalTasks = items.reduce((sum, cat) => sum + cat.tasks.length, 0);
  const completedTasks = items.reduce(
    (sum, cat) => sum + cat.tasks.filter(t => t.completed).length,
    0
  );
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1>체크리스트</h1>

      <Card className="bg-gradient-to-r from-green-50 to-teal-50">
        <CardHeader>
          <CardTitle>전체 진행률</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">완료된 항목</span>
            <span className="text-green-600">
              {completedTasks} / {totalTasks}
            </span>
          </div>
          <Progress value={progress} className="h-3" />
          <p className="text-sm text-gray-500">{progress.toFixed(1)}% 완료</p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {items.map((category, categoryIdx) => {
          const categoryCompleted = category.tasks.filter(t => t.completed).length;
          const categoryTotal = category.tasks.length;
          const categoryProgress = (categoryCompleted / categoryTotal) * 100;

          return (
            <Card key={categoryIdx}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-base">{category.category}</CardTitle>
                  <Badge variant="outline">
                    {categoryCompleted} / {categoryTotal}
                  </Badge>
                </div>
                <Progress value={categoryProgress} className="h-1 mt-2" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.tasks.map(task => (
                    <div key={task.id} className="flex items-center gap-3">
                      <Checkbox
                        id={`task-${task.id}`}
                        checked={task.completed}
                        onCheckedChange={() => toggleTask(categoryIdx, task.id)}
                      />
                      <label
                        htmlFor={`task-${task.id}`}
                        className={`flex-1 cursor-pointer ${
                          task.completed ? 'line-through text-gray-400' : ''
                        }`}
                      >
                        {task.title}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
