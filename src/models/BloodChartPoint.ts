export default interface BloodChartPoint {
  systolic: number;
  diastolic: number;
  heart_rate: {
    value: number,
    levels: string
  };
  respiratory_rate: {
      value: number,
      levels: string
  };
  temperature: {
      value: number,
      levels: string
  };
}
