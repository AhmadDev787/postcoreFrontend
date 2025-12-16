"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Step1 from "@/components/onboardingComps/step1/Step1";
import Step2 from "@/components/onboardingComps/step2/Step2";
import Step3 from "@/components/onboardingComps/step3/Step3";
import Step4 from "@/components/onboardingComps/step4/Step4";
const OnboardingModal = (): React.ReactElement => {
  const [step, setStep] = useState(1);
  function nextStep() {
    setStep((s) => s + 1);
  }
  return (
    <div>
      <Dialog open={true}>
        <DialogContent className="max-w-lg">
          <DialogTitle>Onboarding Form!</DialogTitle>
          {step === 1 && <Step1 next={nextStep} />}
          {step === 2 && <Step2 next={nextStep} />}
          {step === 3 && <Step3 next={nextStep} />}
          {step === 4 && <Step4 />}
        </DialogContent>
        {/* <form>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="@peduarte"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form> */}
      </Dialog>
    </div>
  );
};

export default OnboardingModal;
