import React from "react";
import { useForm } from "react-hook-form";
function SearchBar(props) {
  const { register, handleSubmit } = useForm();
  function onSubmit(input) {
    props.setCity(input.city);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          City:{" "}
          <input {...register("city", { required: true })} type="search" />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}

export default SearchBar;
