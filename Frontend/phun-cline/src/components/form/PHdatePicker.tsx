import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TDateProps = {
  name: string;
  label?: string;
};

const PHdatePicker = ({  name, label }: TDateProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker {...field} size="large" style={{ width: "100%" }} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHdatePicker;
