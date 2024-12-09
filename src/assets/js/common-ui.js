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

    document.addEventListener("DOMContentLoaded", function () {
      const menuToggle = document.getElementById("menu-toggle");
      const sidebarLinks = document.querySelectorAll(".sidebar-link");
      const sidebar = document.getElementById("sidebar");
      const accordionCollapses = document.querySelectorAll(".accordion-collapse"); // 모든 accordion-collapse 요소 선택
    
      // menu-toggle 클릭 시 active 제어
      menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    
        if (!sidebar.classList.contains("active")) {
          // sidebar에서 active가 제거되면 모든 accordion-collapse에서 show 제거 및 aria-expanded=false 설정
          accordionCollapses.forEach((collapse) => {
            collapse.classList.remove("show");
            const relatedLink = document.querySelector(
              `[data-bs-target="#${collapse.id}"]`
            );
            if (relatedLink) {
              relatedLink.setAttribute("aria-expanded", "false");
            }
          });
        }
      });
    
      // sidebar-link 클릭 시 active 제어
      sidebarLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
    
          // sidebar가 활성화 상태가 아닐 경우 활성화
          if (!sidebar.classList.contains("active")) {
            sidebar.classList.add("active");
          }
    
          // 클릭된 링크만 active 추가
          sidebarLinks.forEach((otherLink) => {
            otherLink.classList.remove("active");
          });
          link.classList.add("active");
        });
      });
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
