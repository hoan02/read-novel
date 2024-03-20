import { useEffect, useState } from "react";
import { Rating, TextField, Divider } from "@mui/material";
import { IoSend } from "react-icons/io5";
import {
  MdOutlineSentimentVeryDissatisfied,
  MdOutlineSentimentDissatisfied,
  MdOutlineSentimentNeutral,
  MdSentimentSatisfiedAlt,
  MdSentimentVerySatisfied,
} from "react-icons/md";
import { TbLayoutGrid } from "react-icons/tb";
import { IoDocumentText } from "react-icons/io5";
import { createOrUpdateRating } from "@/lib/actions/rating.action";
import { toast } from "react-toastify";

const labels = {
  1: "1/10",
  2: "2/10",
  3: "3/10",
  4: "4/10",
  5: "5/10",
  6: "6/10",
  7: "7/10",
  8: "8/10",
  9: "9/10",
  10: "10/10",
};

const states = [
  {
    label: "Như shit",
    icon: <MdOutlineSentimentVeryDissatisfied size={30} />,
    color: "text-red-600",
  },
  {
    label: "Tạm ổn",
    icon: <MdOutlineSentimentDissatisfied size={30} />,
    color: "text-orange-600",
  },
  {
    label: "Được",
    icon: <MdOutlineSentimentNeutral size={30} />,
    color: "text-yellow-600",
  },
  {
    label: "Olake phết",
    icon: <MdSentimentSatisfiedAlt size={30} />,
    color: "text-green-600",
  },
  {
    label: "Tuyệt đỉnh",
    icon: <MdSentimentVerySatisfied size={30} />,
    color: "text-blue-600",
  },
];

const RatingNovel = ({ novel }) => {
  const [rating, setRating] = useState(0);
  const [valueCharacter, setValueCharacter] = useState(0);
  const [valuePlot, setValuePlot] = useState(0);
  const [valueWorld, setValueWorld] = useState(0);
  const [hoverCharacter, setHoverCharacter] = useState(-1);
  const [hoverPlot, setHoverPlot] = useState(-1);
  const [hoverWorld, setHoverWorld] = useState(-1);
  const [ratingContent, setRatingContent] = useState("");
  const [state, setState] = useState(null);

  useEffect(() => {
    const roundedRating = (
      (valueCharacter + valuePlot + valueWorld) /
      3
    ).toFixed(1);
    setRating(parseFloat(roundedRating));
    const indexState = parseInt((rating - 0.0001) / 2);
    setState(states[indexState]);
  }, [valueCharacter, valuePlot, valueWorld, rating]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      valueCharacter === 0 ||
      valuePlot === 0 ||
      valueWorld === 0 ||
      ratingContent.length < 10
    ) {
      toast.warning(
        "Vui lòng đánh giá đầy đủ 3 mục thông tin và mô tả! Đọc lưu ý phía bên dưới!"
      );
      return;
    }
    const formData = {
      novelId: novel._id,
      valueCharacter,
      valuePlot,
      valueWorld,
      ratingContent,
    };
    try {
      createOrUpdateRating(formData);
      console.log(formData);
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  return (
    <div className="flex gap-4 font-source-sans-pro text-green-700">
      <div className="w-2/3">
        <form className="bg-green-50 p-4 rounded-lg" onSubmit={handleSubmit}>
          <div className="flex">
            <div className="w-2/3 font-semibold">
              <div className="p-2 flex items-center gap-4">
                <p className="w-[160px]">Tính cách nhân vật</p>
                <Rating
                  name="hover-feedback-character"
                  value={valueCharacter}
                  max={10}
                  icon={<MdSentimentVerySatisfied color="green" />}
                  emptyIcon={<MdSentimentVerySatisfied />}
                  onChange={(event, newValue) => {
                    setValueCharacter(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHoverCharacter(newHover);
                  }}
                />
                {valueCharacter !== null &&
                  labels[
                    hoverCharacter !== -1 ? hoverCharacter : valueCharacter
                  ]}
              </div>
              <div className="p-2 flex items-center gap-4">
                <p className="w-[160px]">Nội dung cốt truyện</p>
                <Rating
                  name="hover-feedback-plot"
                  value={valuePlot}
                  max={10}
                  icon={<IoDocumentText color="green" />}
                  emptyIcon={<IoDocumentText />}
                  onChange={(event, newValue) => {
                    setValuePlot(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHoverPlot(newHover);
                  }}
                />
                {valuePlot !== null &&
                  labels[hoverPlot !== -1 ? hoverPlot : valuePlot]}
              </div>
              <div className="p-2 flex items-center gap-4">
                <p className="w-[160px]">Bố cục thế giới</p>
                <Rating
                  name="hover-feedback-world"
                  value={valueWorld}
                  max={10}
                  icon={<TbLayoutGrid color="green" />}
                  emptyIcon={<TbLayoutGrid />}
                  onChange={(event, newValue) => {
                    setValueWorld(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHoverWorld(newHover);
                  }}
                />
                {valueWorld !== null &&
                  labels[hoverWorld !== -1 ? hoverWorld : valueWorld]}
              </div>
            </div>
            <div className="w-1/3 flex items-center gap-4">
              <div className="w-[80px] h-[80px] bg-white rounded-[40px] flex items-center justify-center">
                <p className="text-xl font-bold text-red-500">{rating}/10</p>
              </div>
              {state && (
                <div className={`flex items-center gap-2 ${state.color}`}>
                  <p className="font-semibold">{state.label}</p>
                  {state.icon}
                </div>
              )}
            </div>
          </div>
          <div className="mt-6 w-full relative">
            <TextField
              label="Đánh giá của bạn về truyện này"
              variant="outlined"
              multiline
              rows={3}
              value={ratingContent}
              onChange={(e) => setRatingContent(e.target.value)}
              fullWidth
            />
            <div
              className="absolute bottom-4 right-4 rounded-[24px] bg-green-600 p-3 cursor-pointer text-white hover:bg-green-700"
              onClick={handleSubmit}
            >
              <IoSend size={24} />
            </div>
          </div>
        </form>
        <div>Nội dung</div>
      </div>
      <div className="w-1/3">
        <div className="bg-green-50 p-4 rounded-lg space-y-4">
          <p className="text-lg font-semibold">
            Đã có {novel.numberOfRating} đánh giá
          </p>
          <Divider />
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="p-2">Tính cách nhân vật</td>
                <td className="p-2">10 điểm</td>
              </tr>
              <tr>
                <td className="p-2">Nội dung cốt truyện</td>
                <td className="p-2">10 điểm</td>
              </tr>
              <tr>
                <td className="p-2">Bố cục thế giới</td>
                <td className="p-2">10 điểm</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-green-50 p-4 rounded-lg mt-4 space-y-4">
          <p className="text-lg font-semibold">Lưu ý khi đánh giá</p>
          <Divider />
          <ul className="list-decimal ml-4 p-2 space-y-1">
            <li>
              Phải đánh giá đủ cả 3 yếu tố: tính cách nhân vật, nội dung cốt
              truyện và bố cục thế giới.
            </li>
            <li>Nội dung đánh giá tốt thiểu 10 kí tự.</li>
            <li>Không được dẫn link hoặc nhắc đến website khác.</li>
            <li>
              Không được có những từ ngữ gay gắt, đả kích, xúc phạm người khác.
            </li>
            <li>
              Đánh giá hoặc bình luận không liên quan tới truyện sẽ bị xóa.
            </li>
            <li>
              Đánh giá hoặc bình luận chê truyện một cách chung chung không mang
              lại giá trị cho người đọc sẽ bị xóa.
            </li>
            <li>
              Đánh giá có điểm số sai lệch quá lớn, không khách quan sẽ bị xóa.
            </li>
          </ul>
          <p className="italic text-sm">
            Vui lòng xem và tuân theo đầy đủ các quy định tại Điều Khoản Dịch Vụ
            khi sử dụng website
          </p>
        </div>
      </div>
    </div>
  );
};

export default RatingNovel;
