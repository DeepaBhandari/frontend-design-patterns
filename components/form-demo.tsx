"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

export const FormDemo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <input placeholder="Email" {...register("email")} className="border p-2" />
      {errors.email && <p className="text-red-500">Invalid email</p>}

      <input type="password" placeholder="Password" {...register("password")} className="border p-2" />
      {errors.password && <p className="text-red-500">Min 6 chars</p>}

      <button disabled={!isValid} className="bg-black text-white p-2">
        Submit
      </button>
    </form>
  );
}