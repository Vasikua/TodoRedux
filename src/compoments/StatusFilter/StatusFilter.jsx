import { Button } from '../Button/Button';
import css from './StatusFilter.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../../Redux/actions';  

export const StatusFilter = () => {
    const filter = useSelector(state => state.filters.status);
  const dispatch = useDispatch();
  const handleFilter = (status) => {
    dispatch(setStatusFilter(status));
    console.log(`Filter set to ${status}`);
}
  
    return (
    <div className={css.wrapper}>
      <Button onClick={()=>handleFilter("All")} >All</Button>
      <Button onClick={()=>handleFilter("Active")} >Active</Button>
      <Button onClick={()=>handleFilter("Completed")} >Completed</Button>
    </div>
  );
};
