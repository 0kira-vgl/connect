import Image from "next/image";
import logo from "@/assets/logo.svg";
import { Ranking } from "./ranking";
import { Status } from "./status";
import { InviteLinkInput } from "./inviteLinkInput";

export default function Invite() {
  const inviteLink = "https://matheustiburcio.vercel.app";

  return (
    <div className="flex min-h-dvh flex-col items-center justify-between gap-16 md:flex-row">
      <div className="flex w-full max-w-[550px] flex-col gap-10">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h2 className="font-heading text-4xl leading-none font-semibold text-gray-100">
            Inscrição confirmada!
          </h2>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
              Indique e Ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InviteLinkInput inviteLink={inviteLink} />

          <Status />
        </div>
      </div>

      <Ranking />
    </div>
  );
}
