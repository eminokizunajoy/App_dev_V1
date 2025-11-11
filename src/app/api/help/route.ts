import { NextResponse } from "next/server";
// @/app/data/helpData のパスは、プロジェクトのエイリアス設定に合わせて調整してください
import { helpSteps } from "@/app/data/helpData";
import { HelpApiResponse } from "@/types/help";
import { getSession } from "@/lib/session";

/**
 * ヘルプコンテンツのリストを返すAPI
 * GET /api/help?page=pageName
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');

    // セッションからユーザーロールを取得
    const session = await getSession();
    const user = session.user;

    let filteredSteps = helpSteps;

    if (page) {
      // 指定されたページに関連するステップのみをフィルタリング
      filteredSteps = helpSteps.filter(step => step.page === page);
    }

    // ページがgroupの場合、ロールに基づいてフィルタリング
    if (page && page.startsWith('group/')) {
      const role = page.includes('/admin') ? 'admin' : 'member';
      filteredSteps = filteredSteps.filter(step => step.role === role || !step.role);
    }

    // 順序(order)に基づいてソート
    const sortedSteps = filteredSteps.sort((a, b) => a.order - b.order);

    const response: HelpApiResponse = {
      steps: sortedSteps,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch help steps:", error);
    return NextResponse.json(
      { message: "ヘルプコンテンツの取得に失敗しました。" },
      { status: 500 }
    );
  }
}
