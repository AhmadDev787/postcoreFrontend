"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { User, Building2, Target, Users, X } from "lucide-react";
import { StepIcon } from "../stepIcons";
import { lastSchema } from "../Schemas/step4Schema";
import { lastContentType } from "../Schemas/step4Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import apiReq from "@/lib/axios";
import { useAuth } from "@clerk/nextjs";
import toast, { Toaster } from "react-hot-toast";

const formats = [
  "Reels",
  "Carousel Posts",
  "Single Image Posts",
  "Short Videos",
  "Long Form Content",
  "Infographics",
];

export default function Step4() {
  const form = useForm<lastContentType>({
    resolver: zodResolver(lastSchema),
    defaultValues: {
      preferredFormats: [],
      offerings: [],
      uniqueValue: "",
    },
  });
  const [customOffering, setCustomOffering] = useState("");

  // Add offering
  const addCustomOffering = () => {
    const value = customOffering.trim();
    if (!value) return;

    const current = form.watch("offerings") || [];
    form.setValue("offerings", [...current, value], {
      shouldValidate: true,
    });
    setCustomOffering("");
  };

  // Delete offering
  const removeOffering = (value: string) => {
    const current = form.watch("offerings") || [];
    form.setValue(
      "offerings",
      current.filter((item: string) => item !== value)
    );
  };

  const toggleMulti = (field: any, value: string) => {
    const current = (form.watch(field) as string[]) ?? [];

    form.setValue(
      field,
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value],
      { shouldValidate: true }
    );
  };

  let { getToken } = useAuth();
  const onSubmit = async (data: lastContentType) => {
    let token = await getToken();
    console.log("Step4 data:", data);
    let s1 = localStorage.getItem("persona");
    let s2 = localStorage.getItem("businessInformation");
    let s3 = localStorage.getItem("Step3 Data");
    let s4 = JSON.stringify(data);
    let dataForSending = {
      s1,
      s2,
      s3,
      s4,
    };
    console.log("here");
    let response = await apiReq.post(
      "/dashboard/onboarding",
      { onboardingData: dataForSending },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    localStorage.removeItem("persona");
    localStorage.removeItem("businessInformation");
    localStorage.removeItem("Step3 Data");
    if (response.status == 200) {
      toast.success(response.data.message);
      window.location.reload();
    }
  };

  return (
    <div className="w-full h-[90vh] flex flex-col">
      <Toaster />
      <div className="flex-1 overflow-y-auto px-2 pb-24">
        {/* Progress bar */}
        <div className="flex justify-between items-center mb-6 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-lux-gray" />
          <div className="flex justify-between w-full relative z-10">
            <StepIcon icon={<User />} />
            <StepIcon icon={<Building2 />} />
            <StepIcon icon={<Target />} />
            <StepIcon active icon={<Users />} />
          </div>
        </div>

        <form
          id="step4Form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg font-semibold text-lux-dark"
          >
            Final Details
          </motion.h2>

          {/* Preferred Formats */}
          <div className="space-y-2">
            <label className="text-lux-dark font-medium">
              Preferred Content Formats (Select multiple)
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {formats.map((f) => (
                <motion.div
                  key={f}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => toggleMulti("preferredFormats", f)}
                  className={`cursor-pointer border rounded-xl p-3 text-sm 
                    ${
                      (form.watch("preferredFormats") || []).includes(f)
                        ? "border-lux-blue bg-lux-blue/10"
                        : "border-lux-gray"
                    }
                  `}
                >
                  {f}
                </motion.div>
              ))}
            </div>

            {form.formState.errors.preferredFormats && (
              <p className="text-red-500 text-sm">
                {typeof form.formState.errors.preferredFormats.message ===
                "string"
                  ? form.formState.errors.preferredFormats.message
                  : ""}
              </p>
            )}
          </div>

          {/* Custom Offerings Only */}
          <div className="space-y-2">
            <label className="text-lux-dark font-medium">
              Your Offerings (Custom Only)
            </label>

            {/* Input + Add Button */}
            <div className="flex gap-2">
              <Input
                value={customOffering}
                onChange={(e) => setCustomOffering(e.target.value)}
                placeholder="Add a new offering"
                className="border-lux-gray"
              />
              <Button
                type="button"
                onClick={addCustomOffering}
                className="bg-lux-blue text-white hover:bg-lux-blue/80"
              >
                Add
              </Button>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-2">
              {(form.watch("offerings") || []).map((item: string) => (
                <div
                  key={item}
                  className="flex items-center gap-1 bg-lux-blue/10 border border-lux-blue px-3 py-1 rounded-full text-sm"
                >
                  {item}
                  <button type="button" onClick={() => removeOffering(item)}>
                    <X size={14} className="text-lux-blue" />
                  </button>
                </div>
              ))}
            </div>

            {form.formState.errors.offerings && (
              <p className="text-red-500 text-sm">
                {typeof form.formState.errors.offerings.message === "string"
                  ? form.formState.errors.offerings.message
                  : ""}
              </p>
            )}
          </div>

          {/* Unique Value */}
          <div className="space-y-2">
            <label className="text-lux-dark font-medium">
              Unique Value (Optional)
            </label>

            <Input
              placeholder="What makes your business unique?"
              className="border-lux-gray"
              {...form.register("uniqueValue")}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-lux-dark hover:bg-lux-dark/80 text-white"
          >
            Finish
          </Button>
        </form>
      </div>
    </div>
  );
}
