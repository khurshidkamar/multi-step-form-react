import { useState } from "react";
import Footer from "./Footer";
import InputBox from "./InputBox";
import "./PersonalInfoStep.css";
import type { WizardFormData } from "../data/FormData";

type Props = {
  currentStep: number;
  data: WizardFormData;
  setData: React.Dispatch<React.SetStateAction<WizardFormData>>;
  onNext: () => void;
};

export default function PersonalInfoStep({
  currentStep,
  data,
  setData,
  onNext,
}: Props) {
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!data.name.trim()) newErrors.name = "Name is required";

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d+$/.test(data.phone)) {
      newErrors.phone = "Only digits allowed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onNext();
  };

  return (
    <div className="wizard-main-content">
      <h2 className="wizard-title">Personal info</h2>

      <h3 className="title-caption">
        Please provide your name, email address, and phone number.
      </h3>

      <form className="personal-details" onSubmit={handleSubmit}>
        <InputBox
          label="Name"
          placeholder="e.g. Stephen King"
          value={data.name}
          onChange={(val) => setData({ ...data, name: val })}
          error={errors.name}
        />

        <InputBox
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          value={data.email}
          onChange={(val) => setData({ ...data, email: val })}
          error={errors.email}
          type="email"
        />

        <InputBox
          label="Phone"
          placeholder="e.g. 9876543210"
          value={data.phone}
          onChange={(val) => setData({ ...data, phone: val })}
          error={errors.phone}
        />
        <Footer currentStep={currentStep} onNext={onNext} />
      </form>
    </div>
  );
}
