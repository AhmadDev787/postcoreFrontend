"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { User, Building2, Target, Users } from "lucide-react";
import { StepProps } from "../nextFuncType";
import { StepIcon } from "../stepIcons";
import { zodResolver } from "@hookform/resolvers/zod";
import { personaSchema } from "../Schemas/step1Schema";
import { personaFormData } from "../Schemas/step1Schema";
const personaOptions = [
  { id: "business_owner", label: "Business Owner", icon: Building2 },
  { id: "influencer", label: "Influencer", icon: Users },
  { id: "marketer", label: "Marketer", icon: Target },
  { id: "other", label: "Something Else", icon: User },
];

export default function Step1({ next }: StepProps) {
  const form = useForm({
    resolver: zodResolver(personaSchema),
    defaultValues: { persona: "" },
  });

  const onSubmit = (data: personaFormData) => {
    // if (!data.persona) {
    //   alert("Please Select Anyone Option!");
    // } else {
    localStorage.setItem("persona", data?.persona);
    next();
    // }
  };

  return (
    <div className="w-full">
      {/* Progress bar top */}
      <div className="flex justify-between items-center mb-6 relative">
        {/* Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-lux-gray" />

        {/* Icons */}
        <div className="flex justify-between w-full relative z-10">
          <StepIcon active icon={<User />} />
          <StepIcon icon={<Building2 />} />
          <StepIcon icon={<Target />} />
          <StepIcon icon={<Users />} />
        </div>
      </div>

      {/* Form */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg font-semibold text-lux-dark"
        >
          Who are you?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {personaOptions.map((opt) => {
            const Icon = opt.icon;

            return (
              <motion.div
                key={opt.id}
                whileHover={{ scale: 1.03 }}
                className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3
                  transition-all duration-200
                  ${
                    form.watch("persona") === opt.id
                      ? "border-lux-blue bg-[#38b6ff]/10"
                      : "border-lux-gray bg-white"
                  }
                `}
                onClick={() => form.setValue("persona", opt.id)}
              >
                <Icon size={28} className="text-lux-dark" />
                <span className="font-medium text-lux-dark">{opt.label}</span>
              </motion.div>
            );
          })}
        </div>

        {form.formState.errors.persona && (
          <p className="text-red-500 text-sm mt-1">
            {form.formState.errors.persona.message}
          </p>
        )}

        <Button
          type="submit"
          className="w-full bg-lux-dark hover:bg-[#010b19]/80 text-white"
        >
          Next
        </Button>
      </form>
    </div>
  );
}
