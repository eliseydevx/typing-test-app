import axios from "axios";

async function getText(sentence: string) {
  const response = await axios.get<string>("https://baconipsum.com/api/", {
    params: {
      type: "all-meat",
      sentence,
      format: "text",
    },
  });

  return response;
}

export default getText;
