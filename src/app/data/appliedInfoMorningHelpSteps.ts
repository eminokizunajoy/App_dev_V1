import { HelpStep } from "../../types/help";

/**
 * 応用情報午前問題詳細ページのチュートリアルステップ
 * 応用情報午前問題画面のヘルプデータを定義します。
 */
export const appliedInfoMorningHelpSteps: HelpStep[] = [
  // 応用情報午前問題詳細ページ
  {
    id: "applied_info_morning_problem_overview",
    title: "応用情報技術者試験 午前問題詳細",
    description: "このページでは、応用情報技術者試験の午前問題を解くことができます。問題文を読んで、正解の選択肢を選んでください。",
    imagePath: "/images/help/applied_info_morning_problem_overview.png",
    targetSelector: ".container",
    order: 1,
    page: "issue_list/applied_info_morning_problem",
  },
  {
    id: "problem_statement_morning",
    title: "問題文",
    description: "問題の説明が表示されます。内容をよく読んで理解してください。",
    imagePath: "/images/help/problem_statement_morning.png",
    targetSelector: ".bg-white.p-6.sm\\:p-8.rounded-xl.shadow-lg.border.border-gray-200.min-h-\\[calc\\(100vh-120px\\)\\].flex.flex-col",
    order: 2,
    page: "issue_list/applied_info_morning_problem",
  },
  {
    id: "answer_options_morning",
    title: "解答選択",
    description: "4つの選択肢から正解を選んでください。クリックして回答を送信します。",
    imagePath: "/images/help/answer_options_morning.png",
    targetSelector: ".bg-white.p-6.sm\\:p-8.rounded-xl.shadow-lg.border.border-gray-200.min-h-\\[calc\\(100vh-120px\\)\\].flex.flex-col",
    order: 3,
    page: "issue_list/applied_info_morning_problem",
  },
  {
    id: "explanation_morning",
    title: "解説",
    description: "回答後に正解の解説が表示されます。理解を深めるために必ず読んでください。",
    imagePath: "/images/help/explanation_morning.png",
    targetSelector: ".bg-white.p-6.sm\\:p-8.rounded-xl.shadow-lg.border.border-gray-200.min-h-\\[calc\\(100vh-120px\\)\\].flex.flex-col",
    order: 4,
    page: "issue_list/applied_info_morning_problem",
  },
];
