const Select = ({ data, id, name, formik }) => {
  return (
    <select
      id={id}
      name={name}
      value={formik.values.province}
      {...formik.getFieldProps(name)}
    >
      <option value="">Select Province</option>
      {data.map((item) => (
        <option value={item.value}>{item.name}</option>
      ))}
    </select>
  );
};

export default Select;
