import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Plus } from 'lucide-react';

export function Budget() {
  const [budgetItems, setBudgetItems] = useState([
    { category: '스튜디오', budget: 5000000, used: 3000000 },
    { category: '드레스/예복', budget: 8000000, used: 6000000 },
    { category: '예식장', budget: 15000000, used: 10000000 },
    { category: '한복', budget: 3000000, used: 2000000 },
    { category: '메이크업', budget: 2000000, used: 1500000 },
    { category: '예물', budget: 10000000, used: 5000000 },
    { category: '신혼여행', budget: 7000000, used: 500000 },
  ]);

  const totalBudget = budgetItems.reduce((sum, item) => sum + item.budget, 0);
  const totalUsed = budgetItems.reduce((sum, item) => sum + item.used, 0);
  const totalProgress = (totalUsed / totalBudget) * 100;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1>예산 관리</h1>
        <Button className="bg-pink-500 hover:bg-pink-600">
          <Plus className="w-4 h-4 mr-2" />
          항목 추가
        </Button>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle>전체 예산</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">사용 금액</p>
              <p className="text-indigo-600">{totalUsed.toLocaleString()}원</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">총 예산</p>
              <p>{totalBudget.toLocaleString()}원</p>
            </div>
          </div>
          <Progress value={totalProgress} className="h-3" />
          <p className="text-sm text-gray-500">
            남은 금액: {(totalBudget - totalUsed).toLocaleString()}원
          </p>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {budgetItems.map((item, idx) => {
          const progress = (item.used / item.budget) * 100;
          return (
            <Card key={idx}>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3>{item.category}</h3>
                    <span className="text-sm text-gray-500">
                      {item.used.toLocaleString()} / {item.budget.toLocaleString()}원
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{progress.toFixed(1)}% 사용</span>
                    <span>잔여: {(item.budget - item.used).toLocaleString()}원</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
