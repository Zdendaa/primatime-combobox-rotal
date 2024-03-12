export type University = {
    name: string,
    web_pages?: string[]
}

export type FormData = {
    universityName: string
    name: string
}

export type FieldRulesType = {
    required: string | boolean;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
};