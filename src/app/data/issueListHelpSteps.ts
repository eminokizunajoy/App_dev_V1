import { HelpStep } from "../../types/help";

/**
 * 問題一覧ページのチュートリアルステップ
 * 問題一覧画面のヘルプデータを定義します。
 */
export const issueListHelpSteps: HelpStep[] = [
  {
    id: "question_categories",
    title: "出題項目",
    description: "ユーザーが挑戦したい問題のカテゴリを選択するセクションです。「基本情報科目A」、「基本情報科目B」、「応用情報午前」、「プログラミング」、「4択問題」、「作成した問題」などの選択肢があります。",
    imagePath: "/images/help/question_categories.png",
    targetSelector: ".question-categories-section",
    order: 1,
    page: "issue_list"
  },
  {
    id: "question_categories",
    title: "プログラミング問題",
    description: "プログラミング言語を使ってコードを書く問題です。エディタにコードを入力し、「実行」ボタンを押してテストしてください。正解の場合は緑色で表示され、不正解の場合は赤色で表示されます。デバッグが必要な場合は「トレース実行」機能を使って、コードの実行をステップバイステップで確認できます。変数の値や実行フローを視覚的に確認しながら修正しましょう。",
    imagePath: "/images/help/question_categories2.png",
    targetSelector: ".event-list",
    order: 3,
    page: "issue_list",
  },
  {
    id: "question_categories",
    title: "4択問題",
    description: "4つの選択肢から正解を選ぶ問題です。問題文をよく読み、選択肢をクリックして回答してください。正解の場合は緑色で表示され、不正解の場合は赤色で表示されます。間違えた場合は正解の選択肢がハイライトされ、解説を読んで理解を深めましょう。",
    imagePath: "/images/help/question_categories3.png",
    targetSelector: ".event-list",
    order:4,
    page: "issue_list",
  },
  {
    id: "question_categories",
    title: "作成した問題",
    description: "他のユーザーが作成したオリジナル問題に挑戦できます。問題の種類はプログラミングや選択問題など様々です。回答後、正解の場合は緑色、不正解の場合は赤色でフィードバックが表示されます。プログラミング問題の場合はトレース実行を使ってデバッグしましょう。",
    imagePath: "/images/help/question_categories4.png",
    targetSelector: ".event-list",
    order: 5,
    page: "issue_list",
  },
  {
    id: "question_categories",
    title: "AIコハク質問",
    description: "AIコハクが生成したインタラクティブな質問に答えることができます。チャット形式で質問が表示され、あなたの回答に対してAIがフィードバックを提供します。正解に近づくようにヒントをもらいながら学習を進めましょう。回答が正しい場合は緑色、不正解の場合は赤色で表示され、AIからのアドバイスを確認できます。",
    imagePath: "/images/help/question_categories5.png",
    targetSelector: ".event-list",
    order: 6,
    page: "issue_list",
  },
];
