import { HelpStep } from "../../types/help";

/**
 * エベントページのチュートリアルステップ
 * イベント画面のヘルプデータを定義します。
 */
export const eventHelpSteps: HelpStep[] = [
  // エベントページ
  {
    id: "event_overview",
    title: "イベント画面の概要",
    description: "このページでは、参加可能なイベントを確認できます。イベントに参加して特別な報酬を手に入れましょう。",
    imagePath: "/images/help/event3.png",
    targetSelector: ".event-list",
    order: 1,
    page: "event",
  },
  {
    id: "event_overview",
    title: "イベント参加",
    description: "このページでは、参加可能なイベントを確認できます。イベントに参加して特別な報酬を手に入れましょう。",
    imagePath: "/images/help/event.png",
    targetSelector: ".event-list",
    order: 2,
    page: "event",
  },
  {
    id: "event_overview",
    title: "イベントを作成るす",
    description: "このページでは、参加可能なイベントを確認できます。イベントに参加して特別な報酬を手に入れましょう。",
    imagePath: "/images/help/event2.png",
    targetSelector: ".create_event",
    order: 3,
    page: "create_event",
  },
  {
    id: "event_overview",
    title: "イベント画面の概要",
    description: "このページでは、参加可能なイベントを確認できます。イベントに参加して特別な報酬を手に入れましょう。",
    imagePath: "/images/help/event4.png",
    targetSelector: ".event-list",
    order: 4,
    page: "event",
  },
];
