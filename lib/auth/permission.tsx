/**
 * 
 * @param userRole 
 * @returns boolean
 * 
 * 권한별로 나누기 AdminOnly, AdminUserOnly, All etc...
 */

export default function checkPermission(userRole: string) {
      // 로그인 된 상태 / 권한 없을 때
  const role = "ADMIN" || "SUPER";

  if (role !== userRole) {
    return false;
  } else {
    return true;
  }
}