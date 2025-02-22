import Image from "next/image";
import gold from "@/assets/medalGold.svg";
import silver from "@/assets/medalSilver.svg";
import cooper from "@/assets/medalCooper.svg";

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-sm leading-none text-gray-300">
            <span className="font-semibold">1°</span> | Matheus Tiburcio
          </span>

          <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
            1030
          </span>

          <Image src={gold} alt="" className="absolute top-0 right-8" />
        </div>

        <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-sm leading-none text-gray-300">
            <span className="font-semibold">2°</span> | Matheus Tiburcio
          </span>

          <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
            1030
          </span>

          <Image src={silver} alt="" className="absolute top-0 right-8" />
        </div>

        <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-sm leading-none text-gray-300">
            <span className="font-semibold">3°</span> | Matheus Tiburcio
          </span>

          <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
            1030
          </span>

          <Image src={cooper} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  );
}
