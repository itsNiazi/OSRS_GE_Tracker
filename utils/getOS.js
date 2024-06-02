export default function getOS() {
  const { userAgent } = navigator;
  if (/Mac/i.test(userAgent)) {
    return "Mac";
  }
  if (/Win/i.test(userAgent)) {
    return "Windows";
  }
  return "Unknown";
}
