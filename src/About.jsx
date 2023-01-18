import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveData } from "./redux/actions/APIs";
const About = () => {
  const dispatch = useDispatch();
  const { response } = useSelector((state) => state.collections);
  const _onSubmit = (e, formData) => {
    e.preventDefault();
    let firstName = e.target?.firstName.value;
    dispatch(saveData(firstName));
  };
  useEffect(() => {
    if (response) {
      alert(response?.message);
    }
  }, [response]);
  return (
    <div>
      <form onSubmit={_onSubmit}>
        <label>First Name</label>
        <input type="text" name="firstName" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default About;
