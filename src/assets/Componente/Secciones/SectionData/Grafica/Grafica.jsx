import { Card, AreaChart, Title } from "@tremor/react";

const chartdata = [
  {
    date: "Week 1",
    SemiAnalysis: 30,
    "Temp": 30,
  },
  {
    date: "Week 2",
    SemiAnalysis: 25,
    "Temp": 25,
  },
  {
    date: "Week 3",
    SemiAnalysis: 20,
    "Temp": 20,
  },
  {
    date: "Week 4",
    SemiAnalysis: 10,
    "Temp": 10,
  },
];

const dataFormatter = (number) => {
  return Intl.NumberFormat("us").format(number).toString() + "° ";
};

export const Grafica = () => (
  <>
    <Title color="black">Average Weekly Temperature</Title>
    <Card className="p-0 rounded-none " style={{ background: "none" }}>
      <AreaChart
        showGridLines={false}
        style={{ background: "none" }}
        className="h-48 bg-white pr-4"
        data={chartdata}
        index="date"
        categories={["Temp"]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  </>
);
