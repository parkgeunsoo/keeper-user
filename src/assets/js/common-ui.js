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

    $(document).ready(function () {
      let timeout;
      $(".gnb > li").on("mouseenter", function () {
        const $this = $(this);
        clearTimeout(timeout);

        $(".gnb-depth").not($this.find(".gnb-depth")).css({
          display: "none",
          opacity: 0,
          pointerEvents: "none",
        });
        $this.find(".gnb-depth").css({
          display: "block",
          opacity: 1,
          pointerEvents: "auto",
        });
      });
    
      $(".gnb > li").on("mouseleave", function () {
        const $this = $(this);
        timeout = setTimeout(function () {
          $this.find(".gnb-depth").css({
            display: "none",
            opacity: 0,
            pointerEvents: "none",
          });
        }, 200);
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
    this.globalModal();
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
  globalModal: function () {
    document.addEventListener("DOMContentLoaded", function () {
      const firstModal = document.getElementById("modal-final-customer");
      const secondModal = document.getElementById("modal-sales-status");
    
      // 두 번째 모달 열기 전 첫 번째 모달 유지
      secondModal.addEventListener("show.bs.modal", function () {
        if (firstModal.classList.contains("show")) {
          firstModal.classList.add("modal-static"); // 첫 번째 모달 고정
          firstModal.style.pointerEvents = "none"; // 클릭 방지
        }
      });
    
      // 두 번째 모달 닫힐 때 첫 번째 모달 복구
      secondModal.addEventListener("hidden.bs.modal", function () {
        if (firstModal.classList.contains("modal-static")) {
          firstModal.classList.remove("modal-static");
          firstModal.style.pointerEvents = ""; // 클릭 가능하게 복구
        }
      });
    });
  }
};

Sidebar.init();
Navbar.init();
Common.init();
