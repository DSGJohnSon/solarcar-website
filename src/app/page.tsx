"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { LucideArrowLeft, LucideArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const maxStep = 3;
  const [stepInForm, setStepInForm] = useState<number>(0);

  return (
    <main className="w-full h-full min-h-screen flex items-center justify-center bg-zinc-950">
      <Card className="w-[50svw] max-h-[90svh]">
        <CardHeader className="bg-zinc-50 rounded-t-md relative">
          <Progress
            value={(stepInForm / maxStep) * 100}
            className="absolute -top-[1px] left-0 w-full m-0 rounded-none rounded-t-md"
          />
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/logo-blason-or.svg"
              width={60}
              height={60}
              alt="Logo SolarCar"
            />
            <div>
              <CardTitle className="">Réservation d&apos;un créneau</CardTitle>
              <CardDescription className="text-xs text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                tincidunt, dolor in ultricies ultricies, purus nisl consectetur
                libero, et luctus mi ligula
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="p-8">
          <p className="text-xs text-muted-foreground">
            Étape {stepInForm + 1} / {maxStep + 1}
          </p>
        </CardContent>
        <Separator />
        <CardFooter className="bg-zinc-50 rounded-b-md py-6">
          <div className="flex w-full gap-4">
            {stepInForm === 0 && <ButtonReturnHome />}
            {stepInForm > 0 && (
              <ButtonPreviousStep
                stepInForm={stepInForm}
                setStepInForm={setStepInForm}
              />
            )}
            {stepInForm === maxStep ? (
              <ButtonSubmitForm />
            ) : (
              <ButtonNextStep
                stepInForm={stepInForm}
                setStepInForm={setStepInForm}
              />
            )}
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}

const ButtonNextStep = ({
  stepInForm,
  setStepInForm,
}: {
  stepInForm: number;
  setStepInForm: (stepInForm: number) => void;
}) => {
  return (
    <Button
      variant={"default"}
      size={"sm"}
      className="w-full group"
      onClick={() => setStepInForm(stepInForm + 1)}>
      Étape suivante
      <LucideArrowRight className="mr-2 size-3 group-hover:-translate-x-2 transition-all" />
    </Button>
  );
};

const ButtonPreviousStep = ({
  stepInForm,
  setStepInForm,
}: {
  stepInForm: number;
  setStepInForm: (stepInForm: number) => void;
}) => {
  return (
    <Button
      variant={"outline"}
      size={"sm"}
      className="w-full group"
      onClick={() => setStepInForm(stepInForm - 1)}>
      <LucideArrowLeft className="mr-2 size-3 group-hover:translate-x-2 transition-all" />
      Étape précédente
    </Button>
  );
};

const ButtonSubmitForm = () => {
  return (
    <Button variant={"primary"} size={"sm"} className="w-full">
      Réserver
    </Button>
  );
};

const ButtonReturnHome = () => {
  return (
    <Button variant={"outline"} size={"sm"} className="w-full group">
      <LucideArrowLeft className="mr-2 size-3 group-hover:translate-x-1 transition-all" />
      Retour à la homepage
    </Button>
  );
};
