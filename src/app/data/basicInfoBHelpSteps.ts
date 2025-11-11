import { HelpStep } from "../../types/help";

/**
 * 基本情報技術者試験 科目B 問題詳細ページのチュートリアルステップ
 * 基本情報科目B問題画面のヘルプデータを定義します。
 */
export const basicInfoBHelpSteps: HelpStep[] = [
  // 基本情報技術者試験 科目B 問題詳細ページ
  {
    id: "basic_info_b_problem_overview",
    title: "基本情報技術者試験 科目B 問題詳細",
    description: "このページでは、基本情報技術者試験の科目Bの問題を解くことができます。問題文とプログラムを読んで、正解の選択肢を選んでください。",
    imagePath: "/images/help/basic_info_b_problem_overview.png",
    targetSelector: ".container",
    order: 1,
    page: "issue_list/basic_info_b_problem",
  },
  {
    id: "problem_statement",
    title: "問題文",
    description: "問題の説明とプログラムコードが表示されます。内容をよく読んで理解してください。",
    imagePath: "/images/help/problem_statement.png",
    targetSelector: ".bg-white.p-6.sm\\:p-8.rounded-xl.shadow-lg.border.border-gray-200.min-h-\\[calc\\(100vh-120px\\)\\].flex.flex-col",
    order: 2,
    page: "issue_list/basic_info_b_problem",
  },
  {
    id: "answer_options",
    title: "解答選択",
    description: "4つの選択肢から正解を選んでください。クリックして回答を送信します。",
    imagePath: "/images/help/answer_options.png",
    targetSelector: ".bg-white.p-6.sm\\:p-8.rounded-xl.shadow-lg.border.border-gray-200.min-h-\\[calc\\(100vh-120px\\)\\].flex.flex-col",
    order: 3,
    page: "issue_list/basic_info_b_problem",
  },
  {
    id: "trace_screen",
    title: "トレース画面",
    description: "プログラムの実行をステップバイステップで確認できます。現在の実行行がハイライトされます。",
    imagePath: "/images/help/trace_screen.png",
    targetSelector: ".bg-white.p-6.rounded-xl.shadow-lg.border.border-gray-200",
    order: 4,
    page: "issue_list/basic_info_b_problem",
  },
  {
    id: "variables_section",
    title: "変数セクション",
    description: "プログラム中の変数の現在の値を確認できます。トレース実行中に値が変化します。",
    imagePath: "/images/help/variables_section.png",
    targetSelector: ".bg-white.p-6.rounded-xl.shadow-lg.border.border-gray-200",
    order: 5,
    page: "issue_list/basic_info_b_problem",
  },
  {
    id: "trace_controls",
    title: "トレース制御",
    description: "トレースの開始、リセット、次のステップを実行できます。プリセットデータを選択してトレースを開始してください。",
    imagePath: "/images/help/trace_controls.png",
    targetSelector: ".bg-white.p-6.rounded-xl.shadow-lg.border.border-gray-200",
    order: 6,
    page: "issue_list/basic_info_b_problem",
  },
  {
    id: "ai_chat",
    title: "AIチャット (コハク)",
    description: "AIアシスタントのコハクに質問できます。問題の理解が難しい場合にヒントをもらえます。クレジットを使用して質問してください。",
    imagePath: "/images/help/ai_chat.png",
    targetSelector: ".bg-white.rounded-xl.shadow-lg.border.border-gray-200.overflow-hidden",
    order: 7,
    page: "issue_list/basic_info_b_problem",
  },
  {
    id: "explanation",
    title: "解説",
    description: "回答後に正解の解説が表示されます。理解を深めるために必ず読んでください。",
    imagePath: "/images/help/explanation.png",
    targetSelector: ".bg-white.p-6.sm\\:p-8.rounded-xl.shadow-lg.border.border-gray-200.min-h-\\[calc\\(100vh-120px\\)\\].flex.flex-col",
    order: 8,
    page: "issue_list/basic_info_b_problem",
  },
];
