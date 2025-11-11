import { HelpStep } from "../../types/help";

/**
 * 作成した問題一覧ページのチュートリアルステップ
 * 作成した問題一覧画面のヘルプデータを定義します。
 */
export const mineIssueListHelpSteps: HelpStep[] = [
  // 作成した問題一覧ページ
  {
    id: "mine_issue_list_overview",
    title: "作成した問題一覧",
    description: "このページでは、自分が作成した問題の一覧を確認できます。問題を編集したり、公開設定を変更できます。",
    imagePath: "/images/help/mine_issue_list_overview.png",
    targetSelector: ".container",
    order: 1,
    page: "issue_list/mine_issue_list",
  },
  {
    id: "problem_list_mine",
    title: "問題リスト",
    description: "作成した問題が一覧表示されます。各問題のタイトル、ステータス、編集ボタンが表示されます。",
    imagePath: "/images/help/problem_list_mine.png",
    targetSelector: ".event-list",
    order: 2,
    page: "issue_list/mine_issue_list",
  },
  {
    id: "edit_problem_mine",
    title: "問題編集",
    description: "問題をクリックして編集できます。問題文、選択肢、解説などを変更できます。",
    imagePath: "/images/help/edit_problem_mine.png",
    targetSelector: ".event-list",
    order: 3,
    page: "issue_list/mine_issue_list",
  },
];
