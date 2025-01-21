import { Form, Select } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

type THPselectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined|any;
  disabled?: boolean;
  mode?: "multiple" | undefined;
  onValueChange: (value: string) => void;
};

const PHselectorWithWatch = ({
  label,
  name,
  options,
  disabled,
  mode,
  onValueChange,
}: THPselectProps) => {
  const { control } = useFormContext();
  const inputValue = useWatch({ control, name });
  useEffect(() => {
    onValueChange(inputValue);
  }, [inputValue]);
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            mode={mode}
            style={{ width: "100%" }}
            {...field}
            options={options}
            size="large"
            disabled={disabled}
          />
          {error && <div style={{ color: "red" }}>{error.message}</div>}
        </Form.Item>
      )}
    />
  );
};

export default PHselectorWithWatch;
