import React, { useState } from "react";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Control } from "react-hook-form";
import { z } from "zod";
import { authformSchema } from "@/lib/utils";

const formSchema = authformSchema('sign-up')

interface CustomeInputProps {
  label: string;
  placeholder: string;
  name: "email" | "password"| "firstName" | "lastName" | "dateOfBirth" | "Address" | "State" | "postalCode"|"ssn"|"city";
  control: Control<z.infer<typeof formSchema>>;
}

const CustomeInput = ({ label, placeholder, name, control }: CustomeInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="relative w-full">
            <FormControl>
              <div className="relative">
                <Input
                  type={name === "password" && !showPassword ? "password" : "text"}
                  placeholder={placeholder}
                  className="input-class"
                  {...field}
                />
                {name === "password" && (
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </div>
                )}
              </div>
            </FormControl>
            <FormMessage className="form-message" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomeInput;
