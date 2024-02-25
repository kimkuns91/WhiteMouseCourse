"use client";

import { useEffect, useState } from "react";

type ProgressBarProps = {
  color: string;
  statistics: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ color, statistics }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 애니메이션 시작
    const percentage = (statistics / 10) * 100;

    // 막대 애니메이션
    const widthTimeoutId = setTimeout(() => {
      setWidth(percentage);
    }, 100); // 100ms 후에 애니메이션 시작

    return () => {
      clearTimeout(widthTimeoutId);
    };
  }, [statistics]);

  return (
    <div className="flex flex-col items-center">
      <div className="mr-3 h-6 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-6 rounded-full bg-blue-600 transition-all duration-500 ease-out"
          style={{ width: `${width}%`, backgroundColor: `${color}` }}
        />
      </div>
      <div className="text-sm font-medium text-gray-700">
        {(statistics / 10) * 100}%
      </div>
    </div>
  );
};

export default ProgressBar;
