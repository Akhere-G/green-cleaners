"use client";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { ZodError, z } from "zod";
import { SnackbarProvider } from "notistack";

const FormDataSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be at less than 30 characters"),
  email: z
    .string()
    .email("Email is not valid")
    .min(3, "Email must be at least 3 characters")
    .max(100, "Email must be at less than 100 characters"),
  query: z
    .string()
    .min(3, "Query must be at least 3 characters")
    .max(250, "Query must be at less than 250 characters"),
});
type FormData = z.infer<typeof FormDataSchema>;

type FormErrors = { name: string[]; email: string[]; query: string[] };

function JoinUsSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    query: "",
  });
  const [errorMessage, setErrorMessage] = useState<FormErrors>({
    name: [],
    email: [],
    query: [],
  });

  const { enqueueSnackbar } = useSnackbar();

  const updateFormData = (newData: Partial<FormData>) =>
    setFormData({ ...formData, ...newData });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name as keyof FormData;
    updateFormData({ [name]: e.target.value });
    if (errorMessage[name].length === 0) {
      return;
    }
    const result = FormDataSchema.safeParse({
      ...formData,
      [name]: e.target.value,
    });
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      setErrorMessage((prev) => ({ ...prev, [name]: errors[name] ?? [] }));
    } else {
      setErrorMessage((prev) => ({ ...prev, [name]: [] }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    const name = e.target.name as keyof FormData;
    const result = FormDataSchema.safeParse(formData);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      setErrorMessage((prev) => ({
        ...prev,
        [e.target.name]: errors[name] ?? [],
      }));
    } else {
      setErrorMessage((prev) => ({ ...prev, [e.target.name]: [] }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = FormDataSchema.safeParse(formData);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      setErrorMessage((prev) => ({ ...prev, ...errors }));
    } else {
      updateFormData({ name: "", email: "", query: "" });
      enqueueSnackbar(
        "Thanks for you query! We'll respone as soon as we can!",
        { variant: "success" }
      );
    }
  };

  return (
    <div>
      <h2 className="text-center bg-green-950 text-white font-bold -mt-12 p-10">
        All our services provide the best, high quality service
      </h2>
      <form className="card my-8" onSubmit={handleSubmit}>
        <h2 className="title-primary mb-4">Contact us</h2>
        <label>
          {errorMessage.name.length > 0 && (
            <span className="error-message">
              {errorMessage.name.join(", ")}
            </span>
          )}
          <span>Name</span>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>
        <label>
          {errorMessage.email.length > 0 && (
            <span className="error-message">
              {errorMessage.email.join(", ")}
            </span>
          )}
          <span>Email</span>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>
        <label>
          {errorMessage.query.length > 0 && (
            <span className="error-message">
              {errorMessage.query.join(", ")}
            </span>
          )}
          <span>Query</span>
          <textarea
            name="query"
            value={formData.query}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>
        <button className="btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default function JointUsSectionWithSnackbarProvider() {
  return (
    <SnackbarProvider>
      <JoinUsSection />
    </SnackbarProvider>
  );
}
