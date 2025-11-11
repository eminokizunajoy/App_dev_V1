import { HelpStep } from "../../types/help";

/**
 * プログラミング問題詳細ページのチュートリアルステップ
 * プログラミング問題画面のヘルプデータを定義します。
 */
export const programmingProblemHelpSteps: HelpStep[] = [
  // プログラミング問題詳細ページ
  {
    id: "programming_problem_overview",
    title: "プログラミング問題詳細",
    description: "このページでは、プログラミング言語を使ってコードを書く問題に挑戦できます。問題文を読んで、コードを入力し、実行・提出してください。",
    imagePath: "/images/help/programming_problem_overview.png",
    targetSelector: ".h-screen.bg-gray-100.p-4.overflow-hidden",
    order: 1,
    page: "issue_list/programming_problem",
  },
  {
    id: "problem_description_programming",
    title: "問題文",
    description: "問題の説明とサンプルケースが表示されます。内容をよく読んで理解してください。",
    imagePath: "/images/help/problem_description_programming.png",
    targetSelector: ".bg-white.rounded-lg.border.border-gray-200.shadow-sm.flex.flex-col.h-full",
    order: 2,
    page: "issue_list/programming_problem",
  },
  {
    id: "code_editor_programming",
    title: "コードエディタ",
    description: "プログラミング言語を選択し、コードを入力します。言語はPython, JavaScript, Javaなどから選べます。",
    imagePath: "/images/help/code_editor_programming.png",
    targetSelector: ".bg-white.rounded-lg.border.border-gray-200.shadow-sm.flex.flex-col.h-full",
    order: 3,
    page: "issue_list/programming_problem",
  },
  {
    id: "execute_and_submit_programming",
    title: "実行と提出",
    description: "コードを入力したら、「実行」ボタンでテストし、「提出」ボタンで最終回答を送信します。",
    imagePath: "/images/help/execute_and_submit_programming.png",
    targetSelector: ".bg-white.rounded-lg.border.border-gray-200.shadow-sm.flex.flex-col.h-full",
    order: 4,
    page: "issue_list/programming_problem",
  },
  {
    id: "ai_chat_programming",
    title: "AIチャット",
    description: "AIアシスタントに質問できます。問題の理解が難しい場合にヒントをもらえます。",
    imagePath: "/images/help/ai_chat_programming.png",
    targetSelector: ".bg-white.rounded-lg.border.border-gray-200.shadow-sm.flex.flex-col.h-full",
    order: 5,
    page: "issue_list/programming_problem",
  },
];
