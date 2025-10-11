import LandingPagePhoneMockup from "@/assets/images/Image20250928172140 1.png";
import WavesBG from "@/assets/images/waves-bg.svg";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GradientInput } from "@/components/ui/gradient-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const LiveDemoSection = () => {
  return (
    <div className="w-full py-12 relative">
      <img
        src={WavesBG}
        className="-z-10 absolute top-3/4 -translate-y-1/2 left-0 w-full"
        alt=""
      />
      <div className="container">
        <div className="w-full flex flex-col items-center gap-2 text-center">
          <div className="flex flex-col gap-2 md:gap-3 items-center">
            <h3 className="font-arialRounded text-2xl md:text-4xl">
              Try Our{" "}
              <span className="text-primary-500">Live Demo</span>
            </h3>
            <p className="font-openSans text-xs md:text-sm text-[#B0B0B0]">
              No fees upfront. No strings attached. Pure performance.
            </p>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 py-12 items-center justify-center">
        <div className="hidden md:flex order-1 md:order-none items-center justify-center md:justify-end self-center ">
          <img src={LandingPagePhoneMockup} alt="" className="max-w-full " />
        </div>

        <div
          className="relative rounded-lg border-[5px] border-primary-500 p-5 md:p-6 md:px-8 bg-black shadow-[-30px_5px_0px_rgba(13,13,13,0.41)] flex items-center justify-center w-full max-w-md flex-col gap-5 h-min border-beam"
          style={{ ["--beam-align" as any]: "5px" }}
        >
          <h3 className="text-xl md:text-3xl font-semibold text-primary-500 font-arialRounded">
            Receive a call now
          </h3>

          {/* Fields */}
          <FormFields />
        </div>
      </div>
    </div>
  );
};

export default LiveDemoSection;

// Helper sub-component: matches the new design for fields
const FormFields = () => {
  const [country, setCountry] = useState<"AU" | "US" | "GB" | "CA" | "IN">(
    "AU"
  );

  const dialCodeMap: Record<typeof country, string> = {
    AU: "+61",
    US: "+1",
    GB: "+44",
    CA: "+1",
    IN: "+91",
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* First Name */}
      <div className="form-group flex flex-col gap-2 py-1 md:col-span-2">
        <Label className="text-[#D7D9FB] text-sm md:text-base">First Name</Label>
        <GradientInput placeholder="Enter your Name" className="text-white" />
      </div>

      {/* Phone Number with country selector */}
      <div className="form-group flex flex-col gap-2 py-1 md:col-span-2">
        <Label className="text-[#D7D9FB] text-sm md:text-base">Phone Number</Label>
        <div className="relative inline-block w-full p-[1px] rounded-md bg-gradient-to-r from-[#39D139] to-[#1D6B1D] overflow-hidden">
          <div className="flex items-center gap-2 bg-black rounded-md h-14 pl-2 pr-3 w-full overflow-hidden">
            <Select value={country} onValueChange={(v) => setCountry(v as any)}>
              <SelectTrigger className="!w-16 shrink-0 bg-transparent border-0 text-white h-10 px-2 justify-start">
                <SelectValue placeholder="AU" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AU">AU</SelectItem>
                <SelectItem value="US">US</SelectItem>
                <SelectItem value="GB">UK</SelectItem>
                <SelectItem value="CA">CA</SelectItem>
                <SelectItem value="IN">IN</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-white/70 text-xs md:text-sm tabular-nums w-12 shrink-0">
              {dialCodeMap[country]}
            </span>
            <input
              type="tel"
              placeholder="Enter your Number"
              className="flex-1 min-w-0 w-full bg-transparent border-0 outline-none text-white placeholder:text-[#939597] px-2"
            />
          </div>
        </div>
      </div>

      {/* Email - full width */}
      <div className="form-group flex flex-col gap-2 py-1 md:col-span-2">
        <Label className="text-[#D7D9FB] text-sm md:text-base">Email</Label>
        <GradientInput placeholder="Enter your Email" className="text-white" />
      </div>

      {/* Business Name - full width */}
      <div className="form-group flex flex-col gap-2 py-1 md:col-span-2">
        <Label className="text-[#D7D9FB] text-sm md:text-base">Business Name</Label>
        <GradientInput
          placeholder="Enter your Business Name"
          className="text-white"
        />
      </div>

      {/* Industry - full width select */}
      <div className="form-group flex flex-col gap-2 py-1 md:col-span-2">
        <Label className="text-[#D7D9FB] text-sm md:text-base">Industry</Label>
        <div className="relative inline-block w-full p-[1px] rounded-md bg-gradient-to-r from-[#39D139] to-[#1D6B1D]">
          <Select>
            <SelectTrigger className="bg-black border-0 text-white h-14">
              <SelectValue placeholder="Select your business industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="legal">Legal Services</SelectItem>
              <SelectItem value="medical">Medical & Healthcare</SelectItem>
              <SelectItem value="home">Home Services</SelectItem>
              <SelectItem value="realestate">Real Estate</SelectItem>
              <SelectItem value="retail">Retail & E‑commerce</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Button - full width */}
      <div className="md:col-span-2">
        <Button variant="primary" size="lg" className="rounded-lg w-full">
          Demo call
        </Button>
      </div>
    </div>
  );
};
