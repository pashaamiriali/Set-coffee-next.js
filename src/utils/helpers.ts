const swal = require("sweetalert");

const showSwal = (title:string, icon:string, text:string) => {

  swal({
    title,
    icon,
    buttons: {
      confirm: {
        text,
        value: true,
      },
    },
  });



};

export { showSwal };
