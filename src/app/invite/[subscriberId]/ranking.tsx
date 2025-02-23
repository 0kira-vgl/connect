import Image from "next/image";
import gold from "@/assets/medalGold.svg";
import silver from "@/assets/medalSilver.svg";
import cooper from "@/assets/medalCooper.svg";
import { getRanking } from "@/http/api";

export async function Ranking() {
  const { ranking } = await getRanking();

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1;

          return (
            <div
              key={item.id}
              className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6"
            >
              <span className="text-sm leading-none text-gray-300">
                <span className="font-semibold">{rankingPosition}°</span> |{" "}
                {item.name}
              </span>

              <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
                {item.score}
              </span>

              {rankingPosition === 1 && (
                <Image src={gold} alt="" className="absolute top-0 right-8" />
              )}
              {rankingPosition === 2 && (
                <Image src={silver} alt="" className="absolute top-0 right-8" />
              )}
              {rankingPosition === 3 && (
                <Image src={cooper} alt="" className="absolute top-0 right-8" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
