const mobileOrDesktop = ():string => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
      navigator.userAgent
    )
  ) {
    return "Mobile";
  } else {
    return "Desktop";
  }
};
export default mobileOrDesktop;
