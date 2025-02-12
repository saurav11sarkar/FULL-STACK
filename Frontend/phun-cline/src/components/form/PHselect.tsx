import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type THPselectProps = {
  label: string;
  name: string;
  option: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
};

const PHselect = ({ label, name, option, disabled,mode }: THPselectProps) => {

  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            mode={mode}
            style={{ width: "100%" }}
            {...field}
            options={option}
            size="large"
            disabled={disabled}
          />
          {error && <div style={{ color: "red" }}>{error.message}</div>}
        </Form.Item>
      )}
    />
  );
};

export default PHselect;
