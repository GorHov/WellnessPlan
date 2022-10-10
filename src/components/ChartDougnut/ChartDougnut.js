import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ChartDougnut({ percent, event, completed }) {
  const [booked, setBooked] = useState(0);
  const [bookNow, setBookNow] = useState(0);

  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [booked?.length, completed?.length, bookNow?.length],
        backgroundColor: ["#B0D4E2", "#61B058", "#F1F2F3"],
        borderColor: ["#B0D4E2", "#61B058", "#F1F2F3"],
        borderWidth: 1,
        width: 1,
      },
    ],
  };

  const options = {
    cutout: "80%",
  };

  const plugins = [
    {
      beforeDraw: function (chart) {
        let width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        let fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        let text = Math.floor(percent) + "%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  useEffect(() => {
    if (event.length > 0) {
      setBooked(
        event.filter((i) => {
          return i.status === 2;
        })
      );
      setBookNow(
        event.filter((i) => {
          return i.status === 3;
        })
      );
    }
  }, [event.length]);

  return (
      <div className="circul">
        <Doughnut data={data} options={options} plugins={plugins} />
        <span className="d-title">
          Completed <br /> appointments
        </span>
      </div>
  );
}

export default ChartDougnut;
