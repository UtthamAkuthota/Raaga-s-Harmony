document.querySelectorAll(".whatsapp-button").forEach((button) => {
    button.addEventListener("click", function () {
      const phoneNumber = "916300173702";
      const messageText = "I want to join your class";
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
      let whatsappUrl;
  
      if (isMobile) {
        whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
          messageText
        )}`;
      } else {
        whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          messageText
        )}`;
      }
  
      window.open(whatsappUrl, "_blank");
    });
  });
  
  const video = document.getElementById("video");
  
  video.onmouseover = function () {
    video.play();
  };
  
  video.onmouseout = function () {
    video.pause();
  };

  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('check').checked = false;
    });
  });
  