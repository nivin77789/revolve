import { ResponsiveLine } from "@nivo/line";
const data = [
  {
    id: "japan",
    color: "hsl(340, 70%, 50%)",
    data: [
      {
        x: "jan",
        y: 36,
      },
      {
        x: "feb",
        y: 156,
      },
      {
        x: "mar",
        y: 163,
      },
      {
        x: "apr",
        y: 286,
      },
      {
        x: "may",
        y: 193,
      },
      {
        x: "jun",
        y: 196,
      },
      {
        x: "jul",
        y: 290,
      },
      {
        x: "aug",
        y: 168,
      },
      {
        x: "sep",
        y: 24,
      },
      {
        x: "oct",
        y: 14,
      },
      {
        x: "nov",
        y: 206,
      },
      {
        x: "dec",
        y: 254,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(176, 70%, 50%)",
    data: [
      {
        x: "jan",
        y: 233,
      },
      {
        x: "feb",
        y: 39,
      },
      {
        x: "mar",
        y: 16,
      },
      {
        x: "apr",
        y: 47,
      },
      {
        x: "may",
        y: 109,
      },
      {
        x: "jun",
        y: 223,
      },
      {
        x: "jul",
        y: 65,
      },
      {
        x: "aug",
        y: 94,
      },
      {
        x: "sep",
        y: 151,
      },
      {
        x: "oct",
        y: 280,
      },
      {
        x: "nov",
        y: 15,
      },
      {
        x: "dec",
        y: 265,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(326, 70%, 50%)",
    data: [
      {
        x: "jan",
        y: 98,
      },
      {
        x: "feb",
        y: 269,
      },
      {
        x: "mar",
        y: 295,
      },
      {
        x: "apr",
        y: 112,
      },
      {
        x: "may",
        y: 119,
      },
      {
        x: "jun",
        y: 55,
      },
      {
        x: "jul",
        y: 68,
      },
      {
        x: "aug",
        y: 217,
      },
      {
        x: "sep",
        y: 212,
      },
      {
        x: "oct",
        y: 245,
      },
      {
        x: "nov",
        y: 55,
      },
      {
        x: "dec",
        y: 74,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(186, 70%, 50%)",
    data: [
      {
        x: "jan",
        y: 58,
      },
      {
        x: "feb",
        y: 289,
      },
      {
        x: "mar",
        y: 207,
      },
      {
        x: "apr",
        y: 122,
      },
      {
        x: "may",
        y: 1,
      },
      {
        x: "jun",
        y: 292,
      },
      {
        x: "jul",
        y: 106,
      },
      {
        x: "aug",
        y: 249,
      },
      {
        x: "sep",
        y: 16,
      },
      {
        x: "oct",
        y: 201,
      },
      {
        x: "nov",
        y: 252,
      },
      {
        x: "dec",
        y: 224,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(14, 70%, 50%)",
    data: [
      {
        x: "jan",
        y: 166,
      },
      {
        x: "feb",
        y: 16,
      },
      {
        x: "mar",
        y: 177,
      },
      {
        x: "apr",
        y: 141,
      },
      {
        x: "may",
        y: 253,
      },
      {
        x: "jun",
        y: 180,
      },
      {
        x: "jul",
        y: 66,
      },
      {
        x: "aug",
        y: 123,
      },
      {
        x: "sep",
        y: 74,
      },
      {
        x: "oct",
        y: 124,
      },
      {
        x: "nov",
        y: 139,
      },
      {
        x: "dec",
        y: 112,
      },
    ],
  },
];
const Linechart = () => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="natural"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      colors={{ scheme: "set1" }}
      lineWidth={3}
      enablePoints={false}
      pointSize={10}
      pointColor="#000000"
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      areaOpacity={0.15}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          justify: false,
          translateX: 75,
          translateY: 46,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 76,
          itemHeight: 19,
          itemOpacity: 0.75,
          symbolSize: 9,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};
export default Linechart;
