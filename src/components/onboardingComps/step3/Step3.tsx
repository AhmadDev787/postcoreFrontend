"use client";

import { motion } from "framer-motion";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Target, Users, User, Building2 } from "lucide-react";
import { StepProps } from "../nextFuncType";
import { StepIcon } from "../stepIcons";
import { contentSchema } from "../Schemas/step3Schema";
import { contentFormData } from "../Schemas/step3Schema";
import { zodResolver } from "@hookform/resolvers/zod";

const brandVoices = [
  "Professional",
  "Friendly",
  "Bold",
  "Luxury",
  "Minimal & Clean",
  "Tech-Savvy",
];

const audiences = [
  "Business Owners",
  "Freelancers",
  "Influencers",
  "Marketers",
  "General Public",
  "Students",
];

const contentGoals = [
  "Increase Engagement",
  "Grow Followers",
  "Drive Sales",
  "Educate Audience",
  "Build Trust",
  "Brand Awareness",
];

export default function Step3({ next }: StepProps) {
  const form = useForm({
    resolver: zodResolver(contentSchema),
    defaultValues: {
      brandVoice: "",
      audience: [],
      goals: [],
    },
  });

  const toggleMultiSelect = (field: "audience" | "goals", value: string) => {
    const current = form.watch(field) || [];
    if (current.includes(value)) {
      form.setValue(
        field,
        current.filter((v: string) => v !== value)
      );
    } else {
      form.setValue(field, [...current, value]);
    }
  };
  const onSubmit = (data: contentFormData) => {
    let dataForStorage = JSON.stringify(data);
    localStorage.setItem("Step3 Data", dataForStorage);
    next();
  };

  return (
    <div className="w-full max-h-[80vh] flex flex-col">
      {/* scrollable */}
      <div className="flex-1 overflow-y-auto px-2 pb-24">
        {/* Progress bar top */}
        <div className="flex justify-between items-center mb-6 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-lux-gray" />

          <div className="flex justify-between w-full relative z-10">
            <StepIcon icon={<User />} />
            <StepIcon icon={<Building2 />} />
            <StepIcon active icon={<Target />} />
            <StepIcon icon={<Users />} />
          </div>
        </div>

        <form
          id="step3Form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg font-semibold text-lux-dark"
          >
            Content Strategy & Audience
          </motion.h2>

          {/* Brand Voice */}
          <div className="space-y-2">
            <label className="text-lux-dark font-medium">Brand Voice</label>

            <Select
              onValueChange={(v) => form.setValue("brandVoice", v)}
              defaultValue={form.watch("brandVoice")}
            >
              <SelectTrigger className="border-lux-gray">
                <SelectValue placeholder="Select brand personality" />
              </SelectTrigger>

              <SelectContent>
                {brandVoices.map((v) => (
                  <SelectItem key={v} value={v}>
                    {v}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {form.formState.errors.brandVoice && (
              <p className="text-red-500 text-sm">
                {/* {typeof form.formState.errors.brandVoice.message === "string"
                  ? form.formState.errors.brandVoice.message
                  : ""} */}
                {form.formState.errors.brandVoice.message}
              </p>
            )}
          </div>

          {/* Target Audience */}
          <div className="space-y-2">
            <label className="text-lux-dark font-medium">
              Target Audience (Select multiple)
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {audiences.map((a) => (
                <motion.div
                  key={a}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => toggleMultiSelect("audience", a)}
                  className={`
                    cursor-pointer border rounded-xl p-3 text-sm
                    ${
                      (form.watch("audience") || []).includes(a)
                        ? "border-lux-blue bg-lux-blue/10"
                        : "border-lux-gray"
                    }
                  `}
                >
                  {a}
                </motion.div>
              ))}
            </div>

            {form.formState.errors.audience && (
              <p className="text-red-500 text-sm">
                {typeof form.formState.errors.audience.message === "string"
                  ? form.formState.errors.audience.message
                  : ""}
              </p>
            )}
          </div>

          {/* Content Goals */}
          <div className="space-y-2">
            <label className="text-lux-dark font-medium">
              Content Goals (Select multiple)
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contentGoals.map((goal) => (
                <motion.div
                  key={goal}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => toggleMultiSelect("goals", goal)}
                  className={`
                    cursor-pointer border rounded-xl p-3 text-sm
                    ${
                      (form.watch("goals") || []).includes(goal)
                        ? "border-lux-blue bg-lux-blue/10"
                        : "border-lux-gray"
                    }
                  `}
                >
                  {goal}
                </motion.div>
              ))}
            </div>

            {form.formState.errors.goals && (
              <p className="text-red-500 text-sm">
                {typeof form.formState.errors.goals.message === "string"
                  ? form.formState.errors.goals.message
                  : ""}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-lux-dark hover:bg-lux-dark/80 text-white"
          >
            Next
          </Button>
        </form>
      </div>
    </div>
  );
}
