import { useSelector , useDispatch } from "react-redux";
import styled from "styled-components";
import {MdDeleteForever} from 'react-icons/all.js';
import { removeUser } from "../store/slices/UserSlice";


const DisplayUsers = () => {

    const dispatch = useDispatch();

const data = useSelector ((state) => {
    return state.users;
});

const deleteUser = (user) => {
    dispatch(removeUser(user))
}
  return <Wrapper>
    {
        data.map((user,id) => {
            return <li key={id}>
            {user}
            <button className="btn-delete" onClick={()=>deleteUser(user)}>
            <MdDeleteForever className='delete-icon' />
            </button>
            </li>
        })
    }
  </Wrapper>
}

const Wrapper = styled.section`

`

export default DisplayUsers