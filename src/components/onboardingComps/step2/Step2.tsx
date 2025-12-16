"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Building2, Target, Users } from "lucide-react";
import { StepProps } from "../nextFuncType";
import { StepIcon } from "../stepIcons";
import { businessFormData } from "../Schemas/step2Schema";
import { businessSchema } from "../Schemas/step2Schema";
import { zodResolver } from "@hookform/resolvers/zod";

const roleOptions = [
  "Owner / Founder",
  "Manager",
  "Marketing Lead",
  "Solo Freelancer",
  "Other",
];
const industryOptions = [
  "Fitness",
  "Real estate",
  "Software agency",
  "Food & Restaurants",
  "Fashion & Clothing",
  "Travel & Tourism",
  "Influencers / Personal Brands",
  "Construction / Architecture / Interior Design",
  "Automotive / Car Dealers",
  "Education / Online Courses",
  "Beauty & Skincare",
  "E-commerce / Online Stores",
];

const sizeOptions = [
  "Just Me",
  "2 - 10 Employees",
  "11 - 50 Employees",
  "50+ Employees",
];

export default function Step2({ next }: StepProps) {
  const form = useForm({
    resolver: zodResolver(businessSchema),
    defaultValues: {
      businessName: "",
      role: "",
      size: "",
      industry: "",
    },
  });

  const onSubmit = (data: businessFormData) => {
    let dataForStoring = JSON.stringify(data);
    localStorage.setItem("businessInformation", dataForStoring);
    next();
  };

  return (
    <div className="w-full max-h-[80vh] overflow-y-auto overflow-x-hidden">
      {/* Progress bar top */}
      <div className="flex justify-between items-center mb-6 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-lux-gray" />

        <div className="flex justify-between w-full relative z-10">
          <StepIcon icon={<User />} />
          <StepIcon active icon={<Building2 />} />
          <StepIcon icon={<Target />} />
          <StepIcon icon={<Users />} />
        </div>
      </div>

      {/* FORM */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg font-semibold text-lux-dark"
        >
          Tell us about your business
        </motion.h2>

        {/* Business name */}
        <div className="flex flex-col gap-2">
          <label className="text-lux-dark font-medium">Business Name</label>
          <Input
            placeholder="Example: Coreviax IT Solutions"
            {...form.register("businessName")}
          />
          {form.formState.errors.businessName && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.businessName.message}
            </p>
          )}
        </div>

        {/* Role selection */}
        <div className="space-y-2">
          <label className="text-lux-dark font-medium">Your Role</label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {roleOptions.map((r) => (
              <motion.div
                key={r}
                whileHover={{ scale: 1.03 }}
                onClick={() => form.setValue("role", r)}
                className={`cursor-pointer border rounded-xl p-3 text-sm
                  ${
                    form.watch("role") === r
                      ? "border-lux-blue bg-lux-blue/10"
                      : "border-lux-gray"
                  }`}
              >
                {r}
              </motion.div>
            ))}
          </div>

          {form.formState.errors.role && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.role.message}
            </p>
          )}
        </div>
        {/* Industry selection */}
        <div className="space-y-2">
          <label className="text-lux-dark font-medium">Your Industry</label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {industryOptions.map((r) => (
              <motion.div
                key={r}
                whileHover={{ scale: 1.03 }}
                onClick={() => form.setValue("industry", r)}
                className={`cursor-pointer border rounded-xl p-3 text-sm
                  ${
                    form.watch("industry") === r
                      ? "border-lux-blue bg-lux-blue/10"
                      : "border-lux-gray"
                  }`}
              >
                {r}
              </motion.div>
            ))}
          </div>

          {form.formState.errors.industry && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.industry.message}
            </p>
          )}
        </div>

        {/* Size selection */}
        <div className="space-y-2">
          <label className="text-lux-dark font-medium">Business Size</label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sizeOptions.map((s) => (
              <motion.div
                key={s}
                whileHover={{ scale: 1.03 }}
                onClick={() => form.setValue("size", s)}
                className={`cursor-pointer border rounded-xl p-3 text-sm
                  ${
                    form.watch("size") === s
                      ? "border-lux-blue bg-lux-blue/10"
                      : "border-lux-gray"
                  }`}
              >
                {s}
              </motion.div>
            ))}
          </div>

          {form.formState.errors.size && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.size.message}
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
  );
}
