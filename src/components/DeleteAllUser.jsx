import React from "react";
import { deleteUsers } from "../store/slices/UserSlice";
import {MdDeleteForever} from 'react-icons/all.js';
import {  useDispatch } from "react-redux";


export const DeleteAllUser = () => {

  const dispatch = useDispatch();

  const deleteAllUser = () => {
    dispatch(deleteUsers())
}

  return <div >
  <button className="btn-delete" onClick={()=>deleteAllUser()} >
  DeleteAllUser
            <MdDeleteForever className='delete-icon' />
            </button>

  </div>;
};

