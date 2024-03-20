import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Chip from "@mui/material/Chip";
import Intro from "./Intro";
import ListChapter from "./ListChapter";
import Fan from "./Fan";
import Comment from "./Comment";
import RatingNovel from "./RatingNovel";

const TabsDetailsNovel = ({ novel }) => {
  const [value, setValue] = useState("gioi-thieu");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabList = [
    {
      label: "Giới thiệu",
      value: "gioi-thieu",
      chip: null,
      content: <Intro text={novel.description} />,
    },
    {
      label: "Đánh giá",
      value: "danh-gia",
      chip: novel.numberOfRating,
      content: <RatingNovel novel={novel}/>,
    },
    {
      label: "Danh sách chương",
      value: "danh-sach-chuong",
      chip: novel.numberOfChapter,
      content: <ListChapter />,
    },
    {
      label: "Bình luận",
      value: "binh-luan",
      chip: novel.numberOfChapter,
      content: <Comment />,
    },
    {
      label: "Hâm mộ",
      value: "ham-mo",
      chip: null,
      content: <Fan />,
    },
  ];

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="Tabs details novel">
            {tabList.map((tab) => {
              return (
                <Tab
                  key={tab.value}
                  label={
                    <div className="flex items-center gap-2">
                      {tab.label}
                      {tab.chip !== null && <Chip label={tab.chip} />}
                    </div>
                  }
                  value={tab.value}
                  style={{
                    textTransform: "none",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                />
              );
            })}
          </TabList>
        </Box>
        {tabList.map((tab) => {
          return (
            <TabPanel
              key={tab.value}
              value={tab.value}
              style={{
                padding: 0,
                marginTop: "20px",
              }}
            >
              {tab.content}
            </TabPanel>
          );
        })}
      </TabContext>
    </Box>
  );
};

export default TabsDetailsNovel;
