import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/actions/APIs";
const Home = () => {
  const dispatch = useDispatch();
  const { getInfoData } = useSelector((state) => state.collections);
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <table className="table table-responsive">
      <tr>
        <td>Sr. No</td>
        <td>Description</td>
        <td>URL</td>
      </tr>
      {getInfoData?.entries.map((value, key) => (
        <tr>
          <td>{key + 1}</td>
          <td>{value?.Description}</td>
          <td>{value?.Link}</td>
        </tr>
      ))}
    </table>
  );
};

export default Home;
