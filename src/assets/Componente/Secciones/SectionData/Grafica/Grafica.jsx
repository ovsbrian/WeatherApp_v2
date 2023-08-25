import { Card, AreaChart, Title } from "@tremor/react";

const chartdata = [
  {
    date: "Week 1",
    SemiAnalysis: 30,
    "The Pragmatic Engineer": 30,
  },
  {
    date: "Week 2",
    SemiAnalysis: 25,
    "The Pragmatic Engineer": 25,
  },
  {
    date: "Week 3",
    SemiAnalysis: 20,
    "The Pragmatic Engineer": 20,
  },
  {
    date: "Week 4",
    SemiAnalysis: 10,
    "The Pragmatic Engineer": 10,
  },
];

const dataFormatter = (number) => {
  return Intl.NumberFormat("us").format(number).toString() + "° ";
};

export const Grafica = () => (
  <>
  <Title color="black">a</Title>
    <Card className="p-0 rounded-none no-borde" style={{ background: "none" }}>
      <AreaChart
        showGridLines={false}
        style={{ background: "none" }}
        className="h-60 bg-white pr-4"
        data={chartdata}
        index="date"
        categories={["The Pragmatic Engineer"]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  </>
);
