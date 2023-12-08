import React from "react";
import Swal from "sweetalert2";

const Toasty = () => {
  return <div></div>;
};

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

export const customSwalert = Swal.mixin({
  customClass: {
    cancelButton: "swal2-deny swal2-styled btn px-5 mt-3 mx-1 btn-secondary",
    confirmButton:
      "swal2-deny swal2-styled btn px-5 mt-3 mx-1 btn-danger btn-delete",
  },
  buttonsStyling: false,
});

export default Toasty;
