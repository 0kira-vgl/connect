"use client";

import { Button } from "@/components/button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LuUser, LuMail, LuArrowRight } from "react-icons/lu";
import { z } from "zod";

const subscriptionSchema = z.object({
  name: z.string().min(2, "Digite seu nome completo"),
  email: z.string().email("Digite um e-mail válido"),
});

type SubscriptionSchema = z.infer<typeof subscriptionSchema>;
export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data: SubscriptionSchema) => console.log(data))}
      className="w-full space-y-6 rounded-2xl border border-gray-600 bg-gray-700 p-8 md:max-w-[440px]"
    >
      <h2 className="font-heading text-xl font-semibold text-gray-200">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <LuUser />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
              {...register("name")}
            />
          </InputRoot>

          {errors.name && (
            <p className="text-danger text-xs font-semibold">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <LuMail />
            </InputIcon>
            <InputField
              type="email"
              placeholder="E-mail"
              {...register("email")}
            />
          </InputRoot>
        </div>

        {errors.email && (
          <p className="text-danger text-xs font-semibold">
            {errors.email.message}
          </p>
        )}
      </div>

      <Button type="submit">
        Confirmar
        <LuArrowRight className="size-6" />
      </Button>
    </form>
  );
}
