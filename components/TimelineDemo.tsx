import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CheckCircle2 } from "lucide-react";

export function TimelineDemo() {
  const data = [
    {
      title: "March 2024 - Precent",
      content: (
        <div>
          <div className="mb-4">
            <h3>Cambio Software</h3>
          </div>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex gap-2"><CheckCircle2 className="text-emerald-300" /><span>Developed a new feature for the app</span></li>
            <li className="flex gap-2"><CheckCircle2 className="text-emerald-300" /><span>Fixed a bug in the app</span></li>
            <li className="flex gap-2"><CheckCircle2 className="text-emerald-300" /><span>Refactored the codebase</span></li>
            <li className="flex gap-2"><CheckCircle2 className="text-emerald-300" /><span>Improved the performance of the app</span></li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
