 var navigation = responsiveNav("#nav", {
        customToggle: "#toggle",
        open: function () {
          var toggle = document.getElementById("toggle");
          toggle.className = toggle.className.replace(/(^|\s)closed(\s|$)/, "opened");
        },
        close: function () {
          var toggle = document.getElementById("toggle");
          toggle.className = toggle.className.replace(/(^|\s)opened(\s|$)/, "closed");
        }
      });
