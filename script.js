function openLogin() {

      document.getElementById(
        "loginModal"
      ).style.display = "flex";

    }


    function closeLogin() {

      document.getElementById(
        "loginModal"
      ).style.display = "none";

    }


    function login(event) {

      event.preventDefault();

      document.getElementById(
        "loginStatus"
      ).textContent =
        "Signed in successfully!";

      setTimeout(function () {

        closeLogin();

      }, 1000);

    }


    function signOut() {

      alert(
        "You have been signed out."
      );

    }


    function sendMessage(event) {

      event.preventDefault();

      alert(
        "Thank you! Your message has been received."
      );

      event.target.reset();

    }


    window.onclick = function(event) {

      const modal =
        document.getElementById("loginModal");

      if (event.target === modal) {

        closeLogin();

      }

    };
