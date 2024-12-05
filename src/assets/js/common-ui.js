var html = document.querySelector("html");
var body = document.querySelector("body");

let Sidebar = {
  init: function () {
    this.toggle();
  },
  toggle: function () {
    const btnMenu = document.querySelector(".sidebar-toggler");
    btnMenu?.addEventListener("click", function () {
      html.classList.toggle("sidebar-collapsed");
    });
  },
};

let Navbar = {
  init: function () {
    this.toggle();
  },
  toggle: function () {
    const btnAllmenu = document.querySelector(".btn-allmenu");
    btnAllmenu?.addEventListener("click", function () {
      html.classList.add("sidebar-show");
    });
    const btnAllmenuClose = document.querySelector(".btn-allmenu-close");
    btnAllmenuClose?.addEventListener("click", function () {
      html.classList.remove("sidebar-show");
    });
  },
};

let Common = {
  init: function () {
    this.datepicker();
    this.buttonDatepicker();
    this.inputDelete();
  },
  datepicker: function () {
    $("[data-picker='date']").datepicker({
      dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
      monthNames: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      monthNamesShort: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      changeYear: true,
      changeMonth: true,
      showMonthAfterYear: true,
      dateFormat: "yy-mm-dd",
    });
  },
  buttonDatepicker: function () {
    $("[data-value-picker='date']").datepicker({
      dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
      monthNames: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      monthNamesShort: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      changeYear: true,
      changeMonth: true,
      showMonthAfterYear: true,
      dateFormat: "yy-mm-dd",
      onSelect: function (dateText, inst) {
        // 선택된 날짜를 무효화
        $(this).val("시작일 변경");
      },
    });
  },
  inputDelete: function () {
    $(".input-form .form-control").on("input", function () {
      var $parent = $(this).closest(".form-field");
      var $button = $parent.find(".clear-button");
      if ($(this).val().length > 0) {
        $button.show();
      } else {
        $button.hide();
      }
    });

    $(".clear-button").on("click", function () {
      var $parent = $(this).closest(".form-field");
      var $input = $parent.find(".input-form .form-control");
      $input.val("");
      $(this).hide();
    });
  },
};

Sidebar.init();
Navbar.init();
Common.init();
