export interface FormData {
  firstName: string;
  lastName: string;
  age: string;
  phone: string;
  profession: string;
  city: string;
  region: string;
  motivation: string;
  skills: string;
  experience: string;
  availability: string;
  partyLogo: File | null;
  partyLogoPreview: string;
}

export interface JoinModalFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onSubmit: (e: React.FormEvent) => void;
}

export interface SectionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}