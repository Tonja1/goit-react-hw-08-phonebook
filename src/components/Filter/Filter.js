import { Input, Label } from "./FilterStyled";
import { useDispatch } from "react-redux";
import { addFilter } from "redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const hendlerFilter = evt => {
    dispatch(addFilter(evt.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input name="filter" onChange={hendlerFilter}/>
    </Label>
  );
};