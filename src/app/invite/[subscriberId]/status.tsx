import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from "@/http/api";
import { LuBadgeCheck, LuMedal, LuMousePointerClick } from "react-icons/lu";

type StatusProps = {
  subscriberId: string;
};

export async function Status({ subscriberId }: StatusProps) {
  const { count: acessCount } = await getSubscriberInviteClicks(subscriberId);
  const { count: inviteCount } = await getSubscriberInviteCount(subscriberId);
  const { position: rankPosition } =
    await getSubscriberRankingPosition(subscriberId);

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative flex flex-col items-center justify-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
        <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
          {acessCount}
        </span>
        <span className="text-center text-sm leading-none text-gray-300">
          Acessos ao link
        </span>

        <LuMousePointerClick className="text-purple absolute top-3 left-3 size-5" />
      </div>

      <div className="relative flex flex-col items-center justify-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
        <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
          {inviteCount}
        </span>
        <span className="text-center text-sm leading-none text-gray-300">
          Inscrições feitas
        </span>

        <LuBadgeCheck className="text-purple absolute top-3 left-3 size-5" />
      </div>

      <div className="relative flex flex-col items-center justify-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
        <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
          {rankPosition ? `${rankPosition}°` : "-"}
        </span>
        <span className="text-center text-sm leading-none text-gray-300">
          Posição no ranking
        </span>

        <LuMedal className="text-purple absolute top-3 left-3 size-5" />
      </div>
    </div>
  );
}
