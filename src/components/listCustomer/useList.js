import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useContext } from "react";
import { loginInfoContext } from "./../context/LoginInfo";

export const useList = () => {
  const { loginInfo } = useContext(loginInfoContext);
  const requestListCustomer = () => {
    axios
      .get(
        `http://45.156.186.15:3001/api/v1/BusinessCustomer/getAllByStatus?BusinessId=${loginInfo.organization._id} &skip=0&limit=10&Status=true`
      )
      .then((res) => {
        console.log(res);
      });
  };
  const { isLoading, isError, data } = useQuery(
    "listCustomer",
    requestListCustomer
  );
  return { data };
};
