"use client";

import { IconButton } from "@/components/iconButton";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { LuLink, LuCopy } from "react-icons/lu";

type InviteLinkInputProps = {
  inviteLink: string;
};

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink); // copia o texto
  }

  return (
    <InputRoot>
      <InputIcon>
        <LuLink className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <LuCopy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
