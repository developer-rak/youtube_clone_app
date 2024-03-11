import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from "../utils/FetchFromAPI";

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState(null)

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
  }, [id])

  return (
    <div>
      {id}
    </div>
  )
}

export default ChannelDetail;
