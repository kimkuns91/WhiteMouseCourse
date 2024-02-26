"use client";

import { cn } from "@/utils/style";
import { useEffect, useState } from "react";

type ProgressBarProps = {
  color: string;
  statistics: number; // 0에서 1 사이의 비율
};

const ProgressBar: React.FC<ProgressBarProps> = ({ color, statistics }) => {
  const [width, setWidth] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // 통계 값을 퍼센트로 변환하여 상태 업데이트
    const newPercentage = Math.round(statistics * 100); // 0에서 1 사이의 비율을 퍼센트로 변환
    setPercentage(newPercentage); // 상태 업데이트

    // 막대 애니메이션
    const widthTimeoutId = setTimeout(() => {
      setWidth(newPercentage); // 직접 계산된 percentage를 너비로 설정
    }, 100); // 100ms 후에 애니메이션 시작

    return () => {
      clearTimeout(widthTimeoutId); // 컴포넌트 언마운트 시 타이머 제거
    };
  }, [statistics]);

  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "mr-3 h-6 w-full overflow-hidden rounded-full bg-gray-200"
        )}
      >
        <div
          className="h-6 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${width}%`, backgroundColor: color }} // 직접 넘겨받은 color 사용
        />
      </div>
      <div className="text-sm font-medium text-gray-700">
        {percentage} % Complete
      </div>
    </div>
  );
};

export default ProgressBar;
