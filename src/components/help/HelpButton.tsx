// src/components/help/HelpButton.tsx
"use client";

import React, { useState, useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import HelpTour from "./HelpTour";
import { HelpStep } from "@/types/help";

const HelpButton: React.FC = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  let page = pathname.split('/').slice(1, 4).join('/') || 'home'; // 例: /issue_list/basic_info_b_problem/1 -> issue_list/basic_info_b_problem/1, /group -> group, / -> home

  // Special handling for event pages
  if (pathname.startsWith('/event/event_detail') || pathname === '/event/event_list') {
    page = 'event';
  }
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [helpSteps, setHelpSteps] = useState<HelpStep[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // ヘルプコンテンツをAPIから取得する関数
  const fetchHelpSteps = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Next.js APIルートからデータを取得
      const url = page ? `/api/help?page=${encodeURIComponent(page)}` : "/api/help";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("APIからのデータ取得に失敗しました。");
      }
      const data = await response.json();
      setHelpSteps(data.steps);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("ヘルプコンテンツの読み込み中にエラーが発生しました。");
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  // Hide help button on login page
  if (!isClient || pathname === '/auth/login') {
    return null;
  }

  // ボタンクリックでツアーを開始
  const handleStartTour = async () => {
    // 常に最新のデータをロード
    await fetchHelpSteps();

    // データがロードされていればツアーを開始
    if (helpSteps.length > 0) {
      setIsTourOpen(true);
    }
  };

  const handleCloseTour = () => {
    setIsTourOpen(false);
  };

  return (
    <>
      {/* 画面右上に固定表示されるヘルプボタン（ヘッダーの下） */}
      {!isTourOpen && (
        <div className="help-button-container fixed top-24 right-4 z-[10000]">
          <button
            onClick={handleStartTour}
            disabled={isLoading}
            className="w-14 h-14 bg-[#b2ebf2] hover:bg-[#D3F7FF] text-black font-bold rounded-full shadow-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
            aria-label="ヘルプツアーを開始"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div>
            ) : (
              <span className="text-2xl font-bold">?</span>
            )}
          </button>
        </div>
      )}

      {/* ヘルプツアーの表示 */}
      {isTourOpen && helpSteps.length > 0 && (
        <HelpTour steps={helpSteps} onClose={handleCloseTour} />
      )}

      {/* エラーメッセージの表示 */}
      {error && (
        <div className="fixed bottom-16 right-4 p-3 bg-red-500 text-white rounded shadow-lg z-[9999]">
          {error}
        </div>
      )}
    </>
  );
};

export default HelpButton;
