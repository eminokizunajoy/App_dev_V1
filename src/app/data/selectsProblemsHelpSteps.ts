import { HelpStep } from "../../types/help";

/**
 * 4択問題詳細ページのチュートリアルステップ
 * 4択問題画面のヘルプデータを定義します。
 */
export const selectsProblemsHelpSteps: HelpStep[] = [
  // 4択問題詳細ページ
  {
    id: "selects_problems_overview",
    title: "4択問題詳細",
    description: "このページでは、4つの選択肢から正解を選ぶ問題に挑戦できます。問題文を読んで回答してください。",
    imagePath: "/images/help/selects_problems_overview.png",
    targetSelector: ".container",
    order: 1,
    page: "issue_list/selects_problems",
  },
  {
    id: "problem_statement_selects",
    title: "問題文",
    description: "問題の説明が表示されます。内容をよく読んで理解してください。",
    imagePath: "/images/help/problem_statement_selects.png",
    targetSelector: ".bg-white.p-6.sm\\:p-8.rounded-xl.shadow-lg.border.border-gray-200.min-h-\\[calc\\(100vh-120px\\)\\].flex.flex-col",
    order: 2,
    page: "issue_list/selects_problems",
  },
  {
    id: "answer_options_selects",
    title: "解答選択",
    description: "4つの選択肢から正解を選んでください。クリックして回答を送信します。",
    imagePath: "/images/help/answer_options_selects.png",
    targetSelector: ".bg-white.p-6.sm\\:p-8.rounded-xl.shadow-lg.border.border-gray-200.min-h-\\[calc\\(100vh-120px\\)\\].flex.flex-col",
    order: 3,
    page: "issue_list/selects_problems",
  },
  {
    id: "kohaku_chat_selects",
    title: "コハクチャット",
    description: "AIアシスタントのコハクがインタラクティブに質問します。回答に対してフィードバックをもらえます。",
    imagePath: "/images/help/kohaku_chat_selects.png",
    targetSelector: ".bg-white.rounded-xl.shadow-lg.border.border-gray-200.overflow-hidden",
    order: 4,
    page: "issue_list/selects_problems",
  },
  {
    id: "explanation_selects",
    title: "解説",
    description: "回答後に正解の解説が表示されます。理解を深めるために必ず読んでください。",
    imagePath: "/images/help/explanation_selects.png",
    targetSelector: ".bg-white.p-6.sm\\:p-8.rounded-xl.shadow-lg.border.border-gray-200.min-h-\\[calc\\(100vh-120px\\)\\].flex.flex-col",
    order: 5,
    page: "issue_list/selects_problems",
  },
];
